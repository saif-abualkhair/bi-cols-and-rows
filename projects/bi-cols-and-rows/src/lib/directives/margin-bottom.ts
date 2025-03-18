import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { MarginValues } from '../models/margin-values.type';

@Directive({
  selector: '[margin-bottom], [margin-bottom-xl], [margin-bottom-lg], [margin-bottom-md], [margin-bottom-sm], [margin-bottom-xm]'
})
export class MarginBottom implements OnChanges {
  @Input('margin-bottom') marginBottom?: MarginValues;
  @Input('margin-bottom-xl') marginBottomXl?: MarginValues;
  @Input('margin-bottom-lg') marginBottomLg?: MarginValues;
  @Input('margin-bottom-md') marginBottomMd?: MarginValues;
  @Input('margin-bottom-sm') marginBottomSm?: MarginValues;
  @Input('margin-bottom-xm') marginBottomXm?: MarginValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['marginBottom']) {
      this.marginBottom ? this.addClass(this.marginBottom) : this.removeSizeClass()
    }

    if (changes['marginBottomXl']) {
      this.marginBottomXl ? this.addClass(this.marginBottomXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['marginBottomLg']) {
      this.marginBottomLg ? this.addClass(this.marginBottomLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['marginBottomMd']) {
      this.marginBottomMd ? this.addClass(this.marginBottomMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['marginBottomSm']) {
      this.marginBottomSm ? this.addClass(this.marginBottomSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['marginBottomXm']) {
      this.marginBottomXm ? this.addClass(this.marginBottomXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, marginType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^mb-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^mb-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: MarginValues, marginType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return marginType ? `mb-${marginType}-${size}` : `mb-${size}`;
  }
}
