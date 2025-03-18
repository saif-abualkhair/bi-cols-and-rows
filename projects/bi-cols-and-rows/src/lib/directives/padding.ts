import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PaddingValues } from '../models/padding-values.type';

@Directive({
  selector: '[padding], [padding-xl], [padding-lg], [padding-md], [padding-sm], [padding-xm]'
})
export class Padding implements OnChanges {
  @Input('padding') padding?: PaddingValues;
  @Input('padding-xl') paddingXl?: PaddingValues;
  @Input('padding-lg') paddingLg?: PaddingValues;
  @Input('padding-md') paddingMd?: PaddingValues;
  @Input('padding-sm') paddingSm?: PaddingValues;
  @Input('padding-xm') paddingXm?: PaddingValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['padding']) {
      this.padding ? this.addClass(this.padding) : this.removeSizeClass()
    }

    if (changes['paddingXl']) {
      this.paddingXl ? this.addClass(this.paddingXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['paddingLg']) {
      this.paddingLg ? this.addClass(this.paddingLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['paddingMd']) {
      this.paddingMd ? this.addClass(this.paddingMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['paddingSm']) {
      this.paddingSm ? this.addClass(this.paddingSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['paddingXm']) {
      this.paddingXm ? this.addClass(this.paddingXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.renderer.addClass(this.elementRef.nativeElement, this.getPaddingClass(size, paddingType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^p-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^p-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getPaddingClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return paddingType ? `p-${paddingType}-${size}` : `p-${size}`;
  }
}
