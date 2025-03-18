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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['justifyContent']?.currentValue) {
      this.setJustifyContentClass();
    }
  }

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer2: Renderer2) {
    this.bindBaseClasses();
  }

  bindBaseClasses() {
    this.renderer2.addClass(this.elementRef.nativeElement, 'row')
  }

  setJustifyContentClass() {
    this.renderer2.addClass(this.elementRef.nativeElement, this.justifyContentClass);
  }

  get justifyContentClass() {
    return `justify-content-${this.justifyContent}`
  }

  get alignItemsClass() {
    return `justify-content-${this.justifyContent}`
  }
}
