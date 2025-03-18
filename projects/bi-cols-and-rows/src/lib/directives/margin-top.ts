import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { MarginValues } from '../models/margin-values.type';

@Directive({
  selector: '[margin-top], [margin-top-xl], [margin-top-lg], [margin-top-md], [margin-top,sm], [margin-top-xm]'
})
export class MarginTop implements OnChanges {
  @Input('margin-top') marginTop?: MarginValues;
  @Input('margin-Top-xl') marginTopXl?: MarginValues;
  @Input('margin-top-lg') marginTopLg?: MarginValues;
  @Input('margin-top-md') marginTopMd?: MarginValues;
  @Input('margin-top-sm') marginTopSm?: MarginValues;
  @Input('margin-top-xm') marginTopXm?: MarginValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marginTop']) {
      this.marginTop ? this.addClass(this.marginTop) : this.removeSizeClass()
    }

    if (changes['marginTopXl']) {
      this.marginTopXl ? this.addClass(this.marginTopXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['marginTopLg']) {
      this.marginTopLg ? this.addClass(this.marginTopLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['marginTopMd']) {
      this.marginTopMd ? this.addClass(this.marginTopMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['marginTopSm']) {
      this.marginTopSm ? this.addClass(this.marginTopSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['marginTopXm']) {
      this.marginTopXm ? this.addClass(this.marginTopXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, marginType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^mt-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^mt-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return marginType ? `mt-${marginType}-${size}` : `ms-${size}`;
  }
}
