import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GuttersSize } from '../models/gutters-size.type';

@Directive({
  selector: 'row[gutters-bottom], row[gutters-bottom-xl], row[gutters-bottom-lg], row[gutters-bottom-md], row[gutters-bottom-sm], row[gutters-bottom-xm]'
})
export class GuttersBottom  implements OnChanges {
  @Input('gutters-bottom') guttersBottom?: GuttersSize;
  @Input('gutters-bottom-xl') guttersBottomXl?: GuttersSize;
  @Input('gutters-bottom-lg') guttersBottomLg?: GuttersSize;
  @Input('gutters-bottom-md') guttersBottomMd?: GuttersSize;
  @Input('gutters-bottom-sm') guttersBottomSm?: GuttersSize;
  @Input('gutters-bottom-xm') guttersBottomXm?: GuttersSize;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['guttersBottom']) {
      this.guttersBottom ? this.addClass(this.guttersBottom) : this.removeSizeClass()
    }

    if (changes['guttersBottomXl']) {
      this.guttersBottomXl ? this.addClass(this.guttersBottomXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['guttersBottomLg']) {
      this.guttersBottomLg ? this.addClass(this.guttersBottomLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['guttersBottomMd']) {
      this.guttersBottomMd ? this.addClass(this.guttersBottomMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['guttersBottomSm']) {
      this.guttersBottomSm ? this.addClass(this.guttersBottomSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['guttersBottomXm']) {
      this.guttersBottomXm ? this.addClass(this.guttersBottomXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(guttersType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getMarginClass(size, guttersType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^gb-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^gb-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getMarginClass(size: GuttersSize, guttersType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return guttersType ? `gb-${guttersType}-${size}` : `gb-${size}`;
  }
}
