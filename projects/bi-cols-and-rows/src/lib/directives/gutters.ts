import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GuttersSize } from '../models/gutters-size.type';

@Directive({
  selector: 'row[gutters]'
})
export class Gutters implements OnChanges {
  @Input('gutters') gutters?: GuttersSize;
  @Input('gutters-xl') guttersXl?: GuttersSize;
  @Input('gutters-lg') guttersLg?: GuttersSize;
  @Input('gutters-md') guttersMd?: GuttersSize;
  @Input('gutters-sm') guttersSm?: GuttersSize;
  @Input('gutters-xm') guttersXm?: GuttersSize;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gutters']) {
      this.gutters ? this.addClass(this.gutters) : this.removeSizeClass()
    }

    if (changes['guttersXl']) {
      this.guttersXl ? this.addClass(this.guttersXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['guttersLg']) {
      this.guttersLg ? this.addClass(this.guttersLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['guttersMd']) {
      this.guttersMd ? this.addClass(this.guttersMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['guttersSm']) {
      this.guttersSm ? this.addClass(this.guttersSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['guttersXm']) {
      this.guttersXm ? this.addClass(this.guttersXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(guttersType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, guttersType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^g-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^g-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return guttersType ? `g-${guttersType}-${size}` : `g-${size}`;
  }

}
