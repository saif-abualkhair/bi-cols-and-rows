import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PaddingValues } from '../models/padding-values.type';

@Directive({
  selector: '[padding-top], [padding-top-xl], [padding-top-lg], [padding-top-md], [padding-top,sm], [padding-top-xm]'
})
export class PaddingTop implements OnChanges {
  @Input('padding-top') paddingTop?: PaddingValues;
  @Input('padding-top-xl') paddingTopXl?: PaddingValues;
  @Input('padding-top-lg') paddingTopLg?: PaddingValues;
  @Input('padding-top-md') paddingTopMd?: PaddingValues;
  @Input('padding-top-sm') paddingTopSm?: PaddingValues;
  @Input('padding-top-xm') paddingTopXm?: PaddingValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['paddingTop']) {
      this.paddingTop ? this.addClass(this.paddingTop) : this.removeSizeClass()
    }

    if (changes['paddingTopXl']) {
      this.paddingTopXl ? this.addClass(this.paddingTopXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['paddingTopLg']) {
      this.paddingTopLg ? this.addClass(this.paddingTopLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['paddingTopMd']) {
      this.paddingTopMd ? this.addClass(this.paddingTopMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['paddingTopSm']) {
      this.paddingTopSm ? this.addClass(this.paddingTopSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['paddingTopXm']) {
      this.paddingTopXm ? this.addClass(this.paddingTopXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.renderer.addClass(this.elementRef.nativeElement, this.getPaddingClass(size, paddingType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^pt-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^pt-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getPaddingClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return paddingType ? `pt-${paddingType}-${size}` : `pt-${size}`;
  }
}
