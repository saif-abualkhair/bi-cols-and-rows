import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GuttersSize } from '../models/gutters-size.type';

@Directive({
  selector: 'row[gutters-top], row[gutters-top-xl], row[gutters-top-lg], row[gutters-top-md], row[gutters-top-sm], row[gutters-top-xm]'
})
export class GuttersTop implements OnChanges {
  @Input('gutters-top') gutters?: GuttersSize;
  @Input('gutters-top-xl') guttersTopXl?: GuttersSize;
  @Input('gutters-top-lg') guttersTopLg?: GuttersSize;
  @Input('gutters-top-md') guttersTopMd?: GuttersSize;
  @Input('gutters-top-sm') guttersTopSm?: GuttersSize;
  @Input('gutters-top-xm') guttersTopXm?: GuttersSize;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['guttersTop']) {
      this.gutters ? this.addClass(this.gutters) : this.removeSizeClass()
    }

    if (changes['guttersTopXl']) {
      this.guttersTopXl ? this.addClass(this.guttersTopXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['guttersTopLg']) {
      this.guttersTopLg ? this.addClass(this.guttersTopLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['guttersTopMd']) {
      this.guttersTopMd ? this.addClass(this.guttersTopMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['guttersTopSm']) {
      this.guttersTopSm ? this.addClass(this.guttersTopSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['guttersTopXm']) {
      this.guttersTopXm ? this.addClass(this.guttersTopXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(guttersType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, guttersType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^gt-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^gt-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return guttersType ? `gt-${guttersType}-${size}` : `gt-${size}`;
  }
}
