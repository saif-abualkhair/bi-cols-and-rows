import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PaddingValues } from '../models/padding-values.type';

@Directive({
  selector: '[padding-vertical], [padding-vertical-xl], [padding-vertical-lg], [padding-vertical-md], [padding-vertical,sm], [padding-vertical-xm]'
})
export class PaddingVertical implements OnChanges {
  @Input('padding-vertical') paddingVertical?: PaddingValues;
  @Input('padding-vertical-xl') paddingVerticalXl?: PaddingValues;
  @Input('padding-vertical-lg') paddingVerticalLg?: PaddingValues;
  @Input('padding-vertical-md') paddingVerticalMd?: PaddingValues;
  @Input('padding-vertical-sm') paddingVerticalSm?: PaddingValues;
  @Input('padding-vertical-xm') paddingVerticalXm?: PaddingValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['paddingVertical']) {
      this.paddingVertical ? this.addClass(this.paddingVertical) : this.removeSizeClass()
    }

    if (changes['paddingVerticalXl']) {
      this.paddingVerticalXl ? this.addClass(this.paddingVerticalXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['paddingVerticalLg']) {
      this.paddingVerticalLg ? this.addClass(this.paddingVerticalLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['paddingVerticalMd']) {
      this.paddingVerticalMd ? this.addClass(this.paddingVerticalMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['paddingVerticalSm']) {
      this.paddingVerticalSm ? this.addClass(this.paddingVerticalSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['paddingVerticalXm']) {
      this.paddingVerticalXm ? this.addClass(this.paddingVerticalXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(paddingType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getPaddingClass(size, paddingType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^py-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^py-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getPaddingClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return paddingType ? `py-${paddingType}-${size}` : `py-${size}`;
  }
}
