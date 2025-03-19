import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GuttersSize } from '../models/gutters-size.type';

@Directive({
  selector: 'row[gutters-start], row[gutters-start-xl], row[gutters-start-lg], row[gutters-start-md], row[gutters-start-sm], row[gutters-start-xm]'
})
export class GuttersStart implements OnChanges {
  @Input('gutters-start') guttersStart?: GuttersSize;
  @Input('gutters-start-xl') guttersStartXl?: GuttersSize;
  @Input('gutters-start-lg') guttersStartLg?: GuttersSize;
  @Input('gutters-start-md') guttersStartMd?: GuttersSize;
  @Input('gutters-start-sm') guttersStartSm?: GuttersSize;
  @Input('gutters-start-xm') guttersStartXm?: GuttersSize;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['guttersStart']) {
      this.guttersStart ? this.addClass(this.guttersStart) : this.removeSizeClass()
    }

    if (changes['guttersStartXl']) {
      this.guttersStartXl ? this.addClass(this.guttersStartXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['guttersStartLg']) {
      this.guttersStartLg ? this.addClass(this.guttersStartLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['guttersStartMd']) {
      this.guttersStartMd ? this.addClass(this.guttersStartMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['guttersStartSm']) {
      this.guttersStartSm ? this.addClass(this.guttersStartSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['guttersStartXm']) {
      this.guttersStartXm ? this.addClass(this.guttersStartXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(guttersType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, guttersType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^gs-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^gs-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return guttersType ? `gs-${guttersType}-${size}` : `gs-${size}`;
  }
}
