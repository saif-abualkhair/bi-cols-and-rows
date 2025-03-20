import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { JustifyContent } from '../models/justfiy-content.type';

@Directive({
  selector: 'row[justify-content], row[justify-content-xl],row[justify-content-lg],row[justify-content-md],row[justify-content-sm],row[justify-content-xm]'
})
export class RowJustifyContent implements OnChanges {
  @Input('justify-content') justifyContent?: JustifyContent;
  @Input('justify-content-xl') justifyContentXl?: JustifyContent;
  @Input('justify-content-lg') justifyContentLg?: JustifyContent;
  @Input('justify-content-md') justifyContentMd?: JustifyContent;
  @Input('justify-content-sm') justifyContentSm?: JustifyContent;
  @Input('justify-content-xm') justifyContentXm?: JustifyContent;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['justifyContent']) {
      this.justifyContent ? this.addClass(this.justifyContent) : this.removeClass();
    }

    if (changes['justifyContentXl']) {
      this.justifyContentXl ? this.addClass(this.justifyContentXl, 'xl') : this.removeClass();
    }

    if (changes['justifyContentLg']) {
      this.justifyContentLg ? this.addClass(this.justifyContentLg, 'lg') : this.removeClass();
    }

    if (changes['justifyContentMd']) {
      this.justifyContentMd ? this.addClass(this.justifyContentMd, 'md') : this.removeClass();
    }

    if (changes['justifyContentSm']) {
      this.justifyContentSm ? this.addClass(this.justifyContentSm, 'sm') : this.removeClass();
    }

    if (changes['justifyContentXm']) {
      this.justifyContentXm ? this.addClass(this.justifyContentXm, 'xm') : this.removeClass();
    }
  }

  addClass(justification: JustifyContent, responsiveType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeClass(responsiveType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getClass(justification, responsiveType));
  }

  removeClass(responsiveType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = responsiveType ? new RegExp(`^justify-content${responsiveType}-.*`) : new RegExp(`^justify-content-.*`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getClass(justification: JustifyContent, responsiveType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return responsiveType ? `justify-content-${responsiveType}-${justification}` : `justify-content-${justification}`;
  }
}
