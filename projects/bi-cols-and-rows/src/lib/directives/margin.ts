import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { MarginValues } from '../models/margin-values.type';

@Directive({
  selector: '[margin], [margin-xl], [margin-lg], [margin-md], [margin-sm], [margin-xm]'
})
export class Margin implements OnChanges {
  @Input('margin') margin?: MarginValues;
  @Input('margin-xl') marginXl?: MarginValues;
  @Input('margin-lg') marginLg?: MarginValues;
  @Input('margin-md') marginMd?: MarginValues;
  @Input('margin-sm') marginSm?: MarginValues;
  @Input('margin-xm') marginXm?: MarginValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['margin']) {
      this.margin ? this.addClass(this.margin) : this.removeSizeClass()
    }

    if (changes['marginXl']) {
      this.marginXl ? this.addClass(this.marginXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['marginLg']) {
      this.marginLg ? this.addClass(this.marginLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['marginMd']) {
      this.marginMd ? this.addClass(this.marginMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['marginSm']) {
      this.marginSm ? this.addClass(this.marginSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['marginXm']) {
      this.marginXm ? this.addClass(this.marginXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, marginType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^m-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^m-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return marginType ? `m-${marginType}-${size}` : `m-${size}`;
  }
}
