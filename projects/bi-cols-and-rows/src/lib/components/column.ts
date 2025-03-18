import { Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Size } from '../models/column-size.type';

@Component({
  selector: 'column',
  imports: [],
  template: `
    <ng-content></ng-content>
  `
})

export class Col implements OnChanges {
  @Input('size') size?: Size;
  @Input('size-xl') sizeXl?: Size;
  @Input('size-lg') sizeLg?: Size;
  @Input('size-md') sizeMd?: Size;
  @Input('size-sm') sizeSm?: Size;
  @Input('size-xm') sizeXm?: Size;

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['size']) {
      this.size ? this.addClass(this.getSizeClass(this.size)) : this.removeSizeClass();
    }

    if (changes['sizeXl']) {
      this.size ? this.addClass(this.getSizeClass(this.size, 'xl')) : this.removeSizeClass();
    }

    if (changes['sizeLg']) {
      this.size ? this.addClass(this.getSizeClass(this.size, 'lg')) : this.removeSizeClass();
    }

    if (changes['sizeMd']) {
      this.size ? this.addClass(this.getSizeClass(this.size, 'md')) : this.removeSizeClass();
    }

    if (changes['sizeSm']) {
      this.size ? this.addClass(this.getSizeClass(this.size, 'sm')) : this.removeSizeClass();
    }

    if (changes['sizeXm']) {
      this.size ? this.addClass(this.getSizeClass(this.size, 'xm')) : this.removeSizeClass();
    }
  }

  constructor (private elementRef: ElementRef<HTMLElement>, private renderer2: Renderer2) {
    this.bindBaseClasses();
  }

  bindBaseClasses () {
    this.renderer2.addClass(this.elementRef.nativeElement, 'col')
  }

  addClass (classValue: string) {
    this.renderer2.addClass(this.elementRef.nativeElement, classValue);
  }

  removeSizeClass (sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^col-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^col-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer2.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getSizeClass (size: Size, sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    return sizeType ? `col-${sizeType}-${size}` : `col-${size}`
  }
}
