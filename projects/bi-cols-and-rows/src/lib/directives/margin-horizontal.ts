import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { MarginValues } from '../models/margin-values.type';

@Directive({
  selector: '[margin-horizontal], [margin-horizontal-xl], [margin-horizontal-lg], [margin-horizontal-md], [margin-horizontal,sm], [margin-horizontal-xm]'
})
export class MarginHorizontal implements OnChanges {
  @Input('margin-horizontal') marginHorizontal?: MarginValues;
  @Input('margin-horizontal-xl') marginHorizontalXl?: MarginValues;
  @Input('margin-horizontal-lg') marginHorizontalLg?: MarginValues;
  @Input('margin-horizontal-md') marginHorizontalMd?: MarginValues;
  @Input('margin-horizontal-sm') marginHorizontalSm?: MarginValues;
  @Input('margin-horizontal-xm') marginHorizontalXm?: MarginValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marginHorizontal']) {
      this.marginHorizontal ? this.addClass(this.marginHorizontal) : this.removeSizeClass()
    }

    if (changes['marginHorizontalXl']) {
      this.marginHorizontalXl ? this.addClass(this.marginHorizontalXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['marginHorizontalLg']) {
      this.marginHorizontalLg ? this.addClass(this.marginHorizontalLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['marginHorizontalMd']) {
      this.marginHorizontalMd ? this.addClass(this.marginHorizontalMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['marginHorizontalSm']) {
      this.marginHorizontalSm ? this.addClass(this.marginHorizontalSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['marginHorizontalXm']) {
      this.marginHorizontalXm ? this.addClass(this.marginHorizontalXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, marginType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^mx-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^mx-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return marginType ? `mx-${marginType}-${size}` : `mx-${size}`;
  }
}
