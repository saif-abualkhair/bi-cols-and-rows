import { Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { JustifyContent } from '../models/justfiy-content.type';
import { AlignItems } from '../models/align-items.type';

@Component({
  selector: 'row',
  imports: [],
  template: `
      <ng-content></ng-content>
  `
})
export class Row implements OnChanges {
  @Input('justify-content') justifyContent: JustifyContent = 'start';
  @Input('align-items') alignItems: AlignItems = 'start';
  @Input('align-self') alignSelf: AlignItems = 'start';

  constructor (private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {
    this.addClass('row');
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['justifyContent']) {
      this.removeJustifyContentClass();
      this.justifyContent ? this.addClass(this.justifyContentClass) : this.removeJustifyContentClass();
    }

    if (changes['alignItems']) {
      this.removeJustifyContentClass();
      this.alignItems ? this.addClass(this.alignItemsClass) : this.removeAlignItemsClass();
    }

    if (changes['alignSelf']) {
      this.removeJustifyContentClass();
      this.alignSelf ? this.addClass(this.alignSelfClass) : this.removeAlignSelfClass();
    }
  }

  addClass (cls: string) {
    this.renderer.addClass(this.elementRef.nativeElement, cls)
  }

  removeAlignItemsClass () {
    const regex = new RegExp(`^align-items-.*`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  removeJustifyContentClass () {
    const regex = new RegExp(`^justify-content-.*`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  removeAlignSelfClass () {
    const regex = new RegExp(`^align-self-.*`);
    const classToRemove = Array.from(this.elementRef.nativeElement.classList)
      .find(cls => regex.test(cls));
    if (classToRemove) {
      this.renderer.removeClass(this.elementRef.nativeElement, classToRemove);
    }
  }

  get justifyContentClass () {
    return `justify-content-${this.justifyContent}`
  }

  get alignItemsClass () {
    return `align-items-${this.alignItems}`
  }

  get alignSelfClass () {
    return `align-self-${this.alignSelf}`
  }
}
