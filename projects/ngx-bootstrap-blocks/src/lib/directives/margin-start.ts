import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { MarginValues } from '../models/margin-values.type';

@Directive({
  selector: '[margin-start], [margin-start-xl], [margin-start-lg], [margin-start-md], [margin-start-sm], [margin-start-xm]'
})
export class MarginStart implements OnChanges {
  @Input('margin-start') marginStart?: MarginValues;
  @Input('margin-start-xl') marginStartXl?: MarginValues;
  @Input('margin-start-lg') marginStartLg?: MarginValues;
  @Input('margin-start-md') marginStartMd?: MarginValues;
  @Input('margin-start-sm') marginStartSm?: MarginValues;
  @Input('margin-start-xm') marginStartXm?: MarginValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marginStart']) {
      this.marginStart ? this.addClass(this.marginStart) : this.removeSizeClass()
    }

    if (changes['marginStartXl']) {
      this.marginStartXl ? this.addClass(this.marginStartXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['marginStartLg']) {
      this.marginStartLg ? this.addClass(this.marginStartLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['marginStartMd']) {
      this.marginStartMd ? this.addClass(this.marginStartMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['marginStartSm']) {
      this.marginStartSm ? this.addClass(this.marginStartSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['marginStartXm']) {
      this.marginStartXm ? this.addClass(this.marginStartXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(marginType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, marginType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^ms-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^ms-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return marginType ? `ms-${marginType}-${size}` : `ms-${size}`;
  }
}
