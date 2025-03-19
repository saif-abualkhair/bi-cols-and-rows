import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { AlignSelf } from '../models/align-self.type';

@Directive({
  selector: 'column[align-self], column[align-self-xl],column[align-self-lg],column[align-self-md],column[align-self-sm],column[align-self-xm]'
})
export class ColumnAlignSelf implements OnChanges {
  @Input('align-self') alignSelf?: AlignSelf;
  @Input('align-self-xl') alignSelfXl?: AlignSelf;
  @Input('align-self-lg') alignSelfLg?: AlignSelf;
  @Input('align-self-md') alignSelfMd?: AlignSelf;
  @Input('align-self-sm') alignSelfSm?: AlignSelf;
  @Input('align-self-xm') alignSelfXm?: AlignSelf;

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

  addClass(justification: AlignSelf, responsiveType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
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

  getClass(justification: AlignSelf, responsiveType: 'xl' | 'lg' | 'md' | 'md' | 'sm' | 'xm' | null = null) {
    return responsiveType ? `align-self-${responsiveType}-${justification}` : `align-self-${justification}`;
  }
}
