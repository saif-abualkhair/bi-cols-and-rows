import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GuttersSize } from '../models/gutters-size.type';

@Directive({
  selector: 'row[gutters-end], row[gutters-end-xl], row[gutters-end-lg], row[gutters-end-md], row[gutters-end-sm], row[gutters-end-xm]'
})
export class GuttersEnd implements OnChanges {
  @Input('gutters-end') guttersEnd?: GuttersSize;
  @Input('gutters-end-xl') guttersEndXl?: GuttersSize;
  @Input('gutters-end-lg') guttersEndLg?: GuttersSize;
  @Input('gutters-end-md') guttersEndMd?: GuttersSize;
  @Input('gutters-end-sm') guttersEndSm?: GuttersSize;
  @Input('gutters-end-xm') guttersEndXm?: GuttersSize;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['guttersEnd']) {
      this.guttersEnd ? this.addClass(this.guttersEnd) : this.removeSizeClass()
    }

    if (changes['guttersEndXl']) {
      this.guttersEndXl ? this.addClass(this.guttersEndXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['guttersEndLg']) {
      this.guttersEndLg ? this.addClass(this.guttersEndLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['guttersEndMd']) {
      this.guttersEndMd ? this.addClass(this.guttersEndMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['guttersEndSm']) {
      this.guttersEndSm ? this.addClass(this.guttersEndSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['guttersEndXm']) {
      this.guttersEndXm ? this.addClass(this.guttersEndXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(guttersType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, guttersType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^ge-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^ge-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return guttersType ? `ge-${guttersType}-${size}` : `ge-${size}`;
  }
}
