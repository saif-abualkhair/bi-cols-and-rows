import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PaddingValues } from '../models/padding-values.type';

@Directive({
  selector: '[padding-bottom], [padding-bottom-xl], [padding-bottom-lg], [padding-bottom-md], [padding-bottom,sm], [padding-bottom-xm]'
})
export class PaddingBottom implements OnChanges{
  @Input('padding-bottom') paddingBottom?: PaddingValues;
  @Input('padding-bottom-xl') paddingBottomXl?: PaddingValues;
  @Input('padding-bottom-lg') paddingBottomLg?: PaddingValues;
  @Input('padding-bottom-md') paddingBottomMd?: PaddingValues;
  @Input('padding-bottom-sm') paddingBottomSm?: PaddingValues;
  @Input('padding-bottom-xm') paddingBottomXm?: PaddingValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['paddingBottom']) {
      this.paddingBottom ? this.addClass(this.paddingBottom) : this.removeSizeClass()
    }

    if (changes['paddingBottomXl']) {
      this.paddingBottomXl ? this.addClass(this.paddingBottomXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['paddingBottomLg']) {
      this.paddingBottomLg ? this.addClass(this.paddingBottomLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['paddingBottomMd']) {
      this.paddingBottomMd ? this.addClass(this.paddingBottomMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['paddingBottomSm']) {
      this.paddingBottomSm ? this.addClass(this.paddingBottomSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['paddingBottomXm']) {
      this.paddingBottomXm ? this.addClass(this.paddingBottomXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(paddingType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getPaddingClass(size, paddingType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^pb-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^pb-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getPaddingClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return paddingType ? `pb-${paddingType}-${size}` : `pb-${size}`;
  }
}
