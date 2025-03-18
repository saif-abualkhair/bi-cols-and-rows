import { NgModule } from '@angular/core';
import { Padding, MarginHorizontal, MarginStart, MarginEnd, Margin, MarginVertical, PaddingHorizontal, PaddingVertical, PaddingBottom, PaddingStart, PaddingTop, PaddingEnd, Col, Row, MarginBottom, MarginTop } from '../public-api';
import { RowAlignSelf } from './directives/row-align-self';
import { RowAlignItems } from './directives/row-align-items';
import { RowJustifyContent } from './directives/row-justify-content';



@NgModule({
  declarations: [],
  imports: [
    Row,
    RowAlignSelf,
    RowAlignItems,
    RowJustifyContent,
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
    RowAlignSelf,
    RowAlignItems,
    RowJustifyContent,
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
