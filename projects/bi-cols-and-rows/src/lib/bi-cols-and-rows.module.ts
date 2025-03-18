import { NgModule } from '@angular/core';
import { Padding, MarginHorizontal, MarginStart, MarginEnd, Margin, MarginVertical, PaddingHorizontal, PaddingVertical, PaddingBottom, PaddingStart, PaddingTop, PaddingEnd, Col, Row, MarginBottom, MarginTop } from '../public-api';



@NgModule({
  declarations: [],
  imports: [
    Row,
    Col,
    Margin,
    MarginEnd,
    MarginTop,
    MarginStart,
    MarginBottom,
    MarginVertical,
    MarginHorizontal,
    Padding,
    PaddingEnd,
    PaddingTop,
    PaddingStart,
    PaddingBottom,
    PaddingVertical,
    PaddingHorizontal
  ],
  exports: [
    Row,
    Col,
    Margin,
    MarginEnd,
    MarginTop,
    MarginStart,
    MarginBottom,
    MarginVertical,
    MarginHorizontal,
    Padding,
    PaddingEnd,
    PaddingTop,
    PaddingStart,
    PaddingBottom,
    PaddingVertical,
    PaddingHorizontal
  ]
})
export class BiColsAndRowsModule { }
