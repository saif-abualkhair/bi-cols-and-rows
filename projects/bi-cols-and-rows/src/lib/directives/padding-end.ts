import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PaddingValues } from '../models/padding-values.type';

@Directive({
  selector: '[padding-end], [padding-end-xl], [padding-end-lg], [padding-end-md], [padding-end,sm], [padding-end-xm]'
})
export class PaddingEnd implements OnChanges{
  @Input('padding-end') paddingEnd?: PaddingValues;
  @Input('padding-end-xl') paddingEndXl?: PaddingValues;
  @Input('padding-end-lg') paddingEndLg?: PaddingValues;
  @Input('padding-end-md') paddingEndMd?: PaddingValues;
  @Input('padding-end-sm') paddingEndSm?: PaddingValues;
  @Input('padding-end-xm') paddingEndXm?: PaddingValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['paddingEnd']) {
      this.paddingEnd ? this.addClass(this.paddingEnd) : this.removeSizeClass()
    }

    if (changes['paddingEndXl']) {
      this.paddingEndXl ? this.addClass(this.paddingEndXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['paddingEndLg']) {
      this.paddingEndLg ? this.addClass(this.paddingEndLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['paddingEndMd']) {
      this.paddingEndMd ? this.addClass(this.paddingEndMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['paddingEndSm']) {
      this.paddingEndSm ? this.addClass(this.paddingEndSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['paddingEndXm']) {
      this.paddingEndXm ? this.addClass(this.paddingEndXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.renderer.addClass(this.elementRef.nativeElement, this.getPaddingClass(size, paddingType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^pe-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^pe-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getPaddingClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return paddingType ? `pe-${paddingType}-${size}` : `pe-${size}`;
  }
}
