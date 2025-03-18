import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { MarginValues } from '../models/margin-values.type';

@Directive({
  selector: '[margin-end], [margin-end-xl], [margin-end-lg], [margin-end-md], [margin-end-sm], [margin-end-xm]'
})
export class MarginEnd implements OnChanges {
  @Input('margin-end') marginEnd?: MarginValues;
  @Input('margin-end-xl') marginEndXl?: MarginValues;
  @Input('margin-end-lg') marginEndLg?: MarginValues;
  @Input('margin-end-md') marginEndMd?: MarginValues;
  @Input('margin-end-sm') marginEndSm?: MarginValues;
  @Input('margin-end-xm') marginEndXm?: MarginValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marginEnd']) {
      this.marginEnd ? this.addClass(this.marginEnd) : this.removeSizeClass()
    }

    if (changes['marginEndXl']) {
      this.marginEndXl ? this.addClass(this.marginEndXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['marginEndLg']) {
      this.marginEndLg ? this.addClass(this.marginEndLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['marginEndMd']) {
      this.marginEndMd ? this.addClass(this.marginEndMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['marginEndSm']) {
      this.marginEndSm ? this.addClass(this.marginEndSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['marginEndXm']) {
      this.marginEndXm ? this.addClass(this.marginEndXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, marginType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^me-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^me-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return marginType ? `me-${marginType}-${size}` : `me-${size}`;
  }
}
