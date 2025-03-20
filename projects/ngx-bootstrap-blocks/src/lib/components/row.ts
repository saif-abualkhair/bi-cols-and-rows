import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'row',
  template: `
      <ng-content></ng-content>
  `
})
export class Row {
  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {
    this.addBaseClass();
  }

  addBaseClass() {
    const baseClass = 'row';
    this.renderer.addClass(this.elementRef.nativeElement, baseClass);
  }
}
