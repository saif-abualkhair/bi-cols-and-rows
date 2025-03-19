import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { PaddingValues } from '../models/padding-values.type';

@Directive({
  selector: '[padding-start], [padding-start-xl], [padding-start-lg], [padding-start-md], [padding-start,sm], [padding-start-xm]'
})
export class PaddingStart implements OnChanges {
  @Input('padding-start') paddingStart?: PaddingValues;
  @Input('padding-start-xl') paddingStartXl?: PaddingValues;
  @Input('padding-start-lg') paddingStartLg?: PaddingValues;
  @Input('padding-start-md') paddingStartMd?: PaddingValues;
  @Input('padding-start-sm') paddingStartSm?: PaddingValues;
  @Input('padding-start-xm') paddingStartXm?: PaddingValues;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['paddingStart']) {
      this.paddingStart ? this.addClass(this.paddingStart) : this.removeSizeClass()
    }

    if (changes['paddingStartXl']) {
      this.paddingStartXl ? this.addClass(this.paddingStartXl, 'xl') : this.removeSizeClass('xl')
    }


    if (changes['paddingStartLg']) {
      this.paddingStartLg ? this.addClass(this.paddingStartLg, 'lg') : this.removeSizeClass('lg')
    }


    if (changes['paddingStartMd']) {
      this.paddingStartMd ? this.addClass(this.paddingStartMd, 'md') : this.removeSizeClass('md')
    }


    if (changes['paddingStartSm']) {
      this.paddingStartSm ? this.addClass(this.paddingStartSm, 'sm') : this.removeSizeClass('sm')
    }


    if (changes['paddingStartXm']) {
      this.paddingStartXm ? this.addClass(this.paddingStartXm, 'xm') : this.removeSizeClass('xm')
    }
  }

  addClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeSizeClass(paddingType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getPaddingClass(size, paddingType));
  }

  removeSizeClass(sizeType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = sizeType ? new RegExp(`^ps-${sizeType}-(1[0-2]|[1-9])$`) : new RegExp(`^ps-(1[0-2]|[1-9])$`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getPaddingClass(size: PaddingValues, paddingType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return paddingType ? `ps-${paddingType}-${size}` : `ps-${size}`;
  }
}
