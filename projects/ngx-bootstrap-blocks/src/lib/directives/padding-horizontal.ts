import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PaddingValues } from '../models/padding-values.type';

@Directive({
  selector: '[padding-horizontal], [padding-horizontal-xl], [padding-horizontal-lg], [padding-horizontal-md], [padding-horizontal,sm], [padding-horizontal-xm]'
})
export class PaddingHorizontal implements OnChanges{
  @Input('padding-horizontal') paddingHorizontal?: PaddingValues;
  @Input('padding-horizontal-xl') paddingHorizontalXl?: PaddingValues;
  @Input('padding-horizontal-lg') paddingHorizontalLg?: PaddingValues;
  @Input('padding-horizontal-md') paddingHorizontalMd?: PaddingValues;
  @Input('padding-horizontal-sm') paddingHorizontalSm?: PaddingValues;
  @Input('padding-horizontal-xm') paddingHorizontalXm?: PaddingValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['paddingHorizontal']) {
      this.paddingHorizontal ? this.addClass(this.paddingHorizontal) : this.removeSizeClass()
    }

    if (changes['paddingHorizontalXl']) {
      this.paddingHorizontalXl ? this.addClass(this.paddingHorizontalXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['paddingHorizontalLg']) {
      this.paddingHorizontalLg ? this.addClass(this.paddingHorizontalLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['paddingHorizontalMd']) {
      this.paddingHorizontalMd ? this.addClass(this.paddingHorizontalMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['paddingHorizontalSm']) {
      this.paddingHorizontalSm ? this.addClass(this.paddingHorizontalSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['paddingHorizontalXm']) {
      this.paddingHorizontalXm ? this.addClass(this.paddingHorizontalXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(paddingType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getPaddingClass(size, paddingType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^px-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^px-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getPaddingClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return paddingType ? `px-${paddingType}-${size}` : `px-${size}`;
  }
}
