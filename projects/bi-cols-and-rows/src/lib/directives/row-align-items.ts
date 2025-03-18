import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { AlignItems } from '../models/align-items.type';

@Directive({
  selector: 'row[align-self], row[align-self-xl],row[align-self-lg],row[align-self-md],row[align-self-sm],row[align-self-xm]'
})
export class RowAlignItems implements OnChanges {
  @Input('align-self') alignSelf?: AlignItems;
  @Input('align-self-xl') alignSelfXl?: AlignItems;
  @Input('align-self-lg') alignSelfLg?: AlignItems;
  @Input('align-self-md') alignSelfMd?: AlignItems;
  @Input('align-self-sm') alignSelfSm?: AlignItems;
  @Input('align-self-xm') alignSelfXm?: AlignItems;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alignSelf']) {
      this.alignSelf ? this.addClass(this.alignSelf) : this.removeClass();
    }

    if (changes['alignSelfXl']) {
      this.alignSelfXl ? this.addClass(this.alignSelfXl) : this.removeClass();
    }

    if (changes['alignSelfLg']) {
      this.alignSelfXl ? this.addClass(this.alignSelfXl) : this.removeClass();
    }

    if (changes['alignSelfMd']) {
      this.alignSelfXl ? this.addClass(this.alignSelfXl) : this.removeClass();
    }

    if (changes['alignSelfSm']) {
      this.alignSelfXl ? this.addClass(this.alignSelfXl) : this.removeClass();
    }

    if (changes['alignSelfXm']) {
      this.alignSelfXl ? this.addClass(this.alignSelfXl) : this.removeClass();
    }
  }

  addClass(justification: AlignItems, responsiveType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeClass(responsiveType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getClass(justification, responsiveType));
  }

  removeClass(responsiveType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = responsiveType ? new RegExp(`^align-self${responsiveType}-.*`) : new RegExp(`^align-self-.*`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getClass(justification: AlignItems, responsiveType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return responsiveType ? `align-self-${responsiveType}-${justification}` : `align-self-${justification}`;
  }
}
