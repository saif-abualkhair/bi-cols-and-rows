import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { MarginValues } from '../models/margin-values.type';

@Directive({
  selector: '[margin-vertical], [margin-vertical-xl], [margin-vertical-lg], [margin-vertical-md], [margin-vertical,sm], [margin-vertical-xm]'
})
export class MarginVertical implements OnChanges {
  @Input('margin-vertical') marginVertical?: MarginValues;
  @Input('margin-vertical-xl') marginVerticalXl?: MarginValues;
  @Input('margin-vertical-lg') marginVerticalLg?: MarginValues;
  @Input('margin-vertical-md') marginVerticalMd?: MarginValues;
  @Input('margin-vertical-sm') marginVerticalSm?: MarginValues;
  @Input('margin-vertical-xm') marginVerticalXm?: MarginValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marginVertical']) {
      this.marginVertical ? this.addClass(this.marginVertical) : this.removeSizeClass()
    }

    if (changes['marginVerticalXl']) {
      this.marginVerticalXl ? this.addClass(this.marginVerticalXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['marginVerticalLg']) {
      this.marginVerticalLg ? this.addClass(this.marginVerticalLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['marginVerticalMd']) {
      this.marginVerticalMd ? this.addClass(this.marginVerticalMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['marginVerticalSm']) {
      this.marginVerticalSm ? this.addClass(this.marginVerticalSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['marginVerticalXm']) {
      this.marginVerticalXm ? this.addClass(this.marginVerticalXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(marginType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, marginType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^my-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^my-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return marginType ? `my-${marginType}-${size}` : `my-${size}`;
  }
}