import { NgModule } from '@angular/core';
import { Padding, MarginHorizontal, MarginStart, MarginEnd, Margin, MarginVertical, PaddingHorizontal, PaddingVertical, PaddingBottom, PaddingStart, PaddingTop, PaddingEnd, Column, Row, MarginBottom, MarginTop } from '../public-api';
import { ColumnAlignSelf, } from './directives/column-align-self';
import { RowAlignItems } from './directives/row-align-items';
import { RowJustifyContent } from './directives/row-justify-content';
import { Gutters } from './directives/gutters';
import { GuttersEnd } from './directives/gutters-end';
import { GuttersStart } from './directives/gutters-start';
import { GuttersTop } from './directives/gutters-top';
import { GuttersBottom } from './directives/gutters-bottom';
import { GuttersVertical } from './directives/gutters-vertical';
import { GuttersHorizontal } from './directives/gutters-horizontal';

@NgModule({
  declarations: [],
  imports: [
    Row,
    RowAlignItems,
    RowJustifyContent,
    Gutters,
    GuttersEnd,
    GuttersTop,
    GuttersStart,
    GuttersBottom,
    GuttersVertical,
    GuttersHorizontal,
    Column,
    ColumnAlignSelf,
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
    RowAlignItems,
    RowJustifyContent,
    Gutters,
    GuttersEnd,
    GuttersTop,
    GuttersStart,
    GuttersBottom,
    GuttersVertical,
    GuttersHorizontal,
    Column,
    ColumnAlignSelf,
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
