import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { AlignItems } from '../models/align-items.type';

@Directive({
  selector: 'row[align-items], row[align-items-xl],row[align-items-lg],row[align-items-md],row[align-items-sm],row[align-items-xm]'
})
export class RowAlignSelf implements OnChanges {
  @Input('align-items') alignItems?: AlignItems;
  @Input('align-items-xl') alignItemsXl?: AlignItems;
  @Input('align-items-lg') alignItemsLg?: AlignItems;
  @Input('align-items-md') alignItemsMd?: AlignItems;
  @Input('align-items-sm') alignItemsSm?: AlignItems;
  @Input('align-items-xm') alignItemsXm?: AlignItems;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alignItems']) {
      this.alignItems ? this.addClass(this.alignItems) : this.removeClass();
    }

    if (changes['alignItemsXl']) {
      this.alignItemsXl ? this.addClass(this.alignItemsXl) : this.removeClass();
    }

    if (changes['alignItemsLg']) {
      this.alignItemsXl ? this.addClass(this.alignItemsXl) : this.removeClass();
    }

    if (changes['alignItemsMd']) {
      this.alignItemsXl ? this.addClass(this.alignItemsXl) : this.removeClass();
    }

    if (changes['alignItemsSm']) {
      this.alignItemsXl ? this.addClass(this.alignItemsXl) : this.removeClass();
    }

    if (changes['alignItemsXm']) {
      this.alignItemsXl ? this.addClass(this.alignItemsXl) : this.removeClass();
    }
  }

  addClass(justification: AlignItems, responsiveType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    this.removeClass(responsiveType);
    this.renderer.addClass(this.elementRef.nativeElement, this.getClass(justification, responsiveType));
  }

  removeClass(responsiveType: 'xl' | 'lg' | 'md' | 'sm' | 'xm' | null = null) {
    const regex = responsiveType ? new RegExp(`^align-items${responsiveType}-.*`) : new RegExp(`^align-items-.*`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  getClass(justification: AlignItems, responsiveType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return responsiveType ? `align-items-${responsiveType}-${justification}` : `align-items-${justification}`;
  }
}
