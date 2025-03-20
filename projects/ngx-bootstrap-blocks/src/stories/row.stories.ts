import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Row } from '../lib/components/row';
import { importProvidersFrom } from '@angular/core';
import { Margin, NgxBootstrapBlocksModule, Padding } from '../public-api';
import { JustifyContent } from '../lib/models/justfiy-content.type';
import { AlignItems } from '../lib/models/align-items.type';
import { getTemplateArgs } from './stories.util';

const meta: Meta<RowArgs> = {
  title: 'Example/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    'justify-content': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly',],
    },
    'justify-content-xl': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly',],
    },
    'justify-content-lg': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly',],
    },
    'justify-content-md': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly',],
    },
    'justify-content-sm': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly',],
    },
    'justify-content-xm': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly',],
    },
    'align-items': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch',],
    },
    'align-items-xl': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch',],
    },
    "align-items-lg": {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch',],
    },
    'align-items-md': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch',],
    },
    'align-items-sm': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch',],
    },
    'align-items-xm': {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch',],
    },
    'margin': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', 'auto',],
    },
    'margin-xl': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', 'auto',],
    },
    'margin-lg': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', 'auto',],
    },
    'margin-md': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', 'auto',],
    },
    'margin-sm': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', 'auto',],
    },
    'margin-xm': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', 'auto',],
    },
    'padding': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5',],
    },
    'padding-xl': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5',],
    },
    'padding-lg': {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5',],
    },
    "padding-md": {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5',],
    },
    "padding-sm": {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5',],
    },
    "padding-xm": {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5',],
    },
  },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgxBootstrapBlocksModule)],
    }),
    moduleMetadata({
      imports: [NgxBootstrapBlocksModule]
    }),
  ],
  render: (args) => {
    const templateArgs = getTemplateArgs(args);

    return {
      props: args as Row,
      template: `
        <row ${templateArgs}>
          <column class="bg-primary border border-dark" size="3">Column 1</column>
  
          <column class="bg-primary border border-dark" size="3">Column 2</column>
  
          <column class="bg-primary border border-dark" size="3">Column 3</column>
        </row>
      `,
    }
  },
};

export default meta;
type Story = StoryObj<RowArgs>;

export const RowAll: Story = {
  args: {
    'justify-content': undefined,
    'justify-content-xl': undefined,
    'justify-content-lg': undefined,
    'justify-content-md': undefined,
    'justify-content-sm': undefined,
    'justify-content-xm': undefined,
    'align-items': undefined,
    'align-items-xl': undefined,
    'align-items-lg': undefined,
    'align-items-md': undefined,
    'align-items-sm': undefined,
    'align-items-xm': undefined,
    'margin': undefined,
    'margin-xl': undefined,
    'margin-lg': undefined,
    'margin-md': undefined,
    'margin-sm': undefined,
    'margin-xm': undefined,
    'padding': undefined,
    'padding-xl': undefined,
    'padding-lg': undefined,
    'padding-md': undefined,
    'padding-sm': undefined,
  },
};

type RowArgs = {
  'justify-content'?: JustifyContent;
  'justify-content-xl'?: JustifyContent;
  'justify-content-lg'?: JustifyContent;
  'justify-content-md'?: JustifyContent;
  'justify-content-sm'?: JustifyContent;
  'justify-content-xm'?: JustifyContent;
  'align-items'?: AlignItems;
  'align-items-xl'?: AlignItems;
  'align-items-lg'?: AlignItems;
  'align-items-md'?: AlignItems
  'align-items-sm'?: AlignItems;
  'align-items-xm'?: AlignItems;
  'margin'?: Margin;
  'margin-xl'?: Margin;
  'margin-lg'?: Margin;
  'margin-md'?: Margin;
  'margin-sm'?: Margin;
  'margin-xm'?: Margin;
  'padding'?: Padding;
  'padding-xl'?: Padding;
  'padding-lg'?: Padding;
  'padding-md'?: Padding;
  'padding-sm'?: Padding;
  'padding-xm'?: Padding;
}
