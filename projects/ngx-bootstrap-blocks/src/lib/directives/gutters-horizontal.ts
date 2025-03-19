import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GuttersSize } from '../models/gutters-size.type';

@Directive({
  selector: 'row[gutters-horizontal], row[gutters-horizontal-xl], row[gutters-horizontal-lg], row[gutters-horizontal-md], row[gutters-horizontal-sm], row[gutters-horizontal-xm]'
})
export class GuttersHorizontal  implements OnChanges {
  @Input('gutters-horizontal') guttersHorizontal?: GuttersSize;
  @Input('gutters-horizontal-xl') guttersHorizontalXl?: GuttersSize;
  @Input('gutters-horizontal-lg') guttersHorizontalLg?: GuttersSize;
  @Input('gutters-horizontal-md') guttersHorizontalMd?: GuttersSize;
  @Input('gutters-horizontal-sm') guttersHorizontalSm?: GuttersSize;
  @Input('gutters-horizontal-xm') guttersHorizontalXm?: GuttersSize;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['guttersHorizontal']) {
      this.guttersHorizontal ? this.addClass(this.guttersHorizontal) : this.removeSizeClass()
    }

    if (changes['guttersHorizontalXl']) {
      this.guttersHorizontalXl ? this.addClass(this.guttersHorizontalXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['guttersHorizontalLg']) {
      this.guttersHorizontalLg ? this.addClass(this.guttersHorizontalLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['guttersHorizontalMd']) {
      this.guttersHorizontalMd ? this.addClass(this.guttersHorizontalMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['guttersHorizontalSm']) {
      this.guttersHorizontalSm ? this.addClass(this.guttersHorizontalSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['guttersHorizontalXm']) {
      this.guttersHorizontalXm ? this.addClass(this.guttersHorizontalXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(guttersType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, guttersType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^gx-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^gx-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return guttersType ? `gx-${guttersType}-${size}` : `gx-${size}`;
  }
}
