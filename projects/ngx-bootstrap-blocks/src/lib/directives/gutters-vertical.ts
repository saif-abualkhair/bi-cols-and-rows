import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GuttersSize } from '../models/gutters-size.type';

@Directive({
  selector: 'row[gutters-vertical], row[gutters-vertical-xl], row[gutters-vertical-lg], row[gutters-vertical-md], row[gutters-vertical-sm], row[gutters-vertical-xm]'
})
export class GuttersVertical  implements OnChanges {
  @Input('gutters-vertical') guttersVertical?: GuttersSize;
  @Input('gutters-vertical-xl') guttersVerticalXl?: GuttersSize;
  @Input('gutters-vertical-lg') guttersVerticalLg?: GuttersSize;
  @Input('gutters-vertical-md') guttersVerticalMd?: GuttersSize;
  @Input('gutters-vertical-sm') guttersVerticalSm?: GuttersSize;
  @Input('gutters-vertical-xm') guttersVerticalXm?: GuttersSize;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['guttersVertical']) {
      this.guttersVertical ? this.addClass(this.guttersVertical) : this.removeSizeClass()
    }

    if (changes['guttersVerticalXl']) {
      this.guttersVerticalXl ? this.addClass(this.guttersVerticalXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['guttersVerticalLg']) {
      this.guttersVerticalLg ? this.addClass(this.guttersVerticalLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['guttersVerticalMd']) {
      this.guttersVerticalMd ? this.addClass(this.guttersVerticalMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['guttersVerticalSm']) {
      this.guttersVerticalSm ? this.addClass(this.guttersVerticalSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['guttersVerticalXm']) {
      this.guttersVerticalXm ? this.addClass(this.guttersVerticalXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(guttersType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, guttersType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^gy-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^gy-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return guttersType ? `gy-${guttersType}-${size}` : `gy-${size}`;
  }
}
