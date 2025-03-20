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
      options: ['none', 'start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    'justify-content-xl': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    'justify-content-lg': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    'justify-content-md': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    'justify-content-sm': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    'justify-content-xm': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    'align-items': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-items-xl': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-items-lg': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-items-md': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-items-sm': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-items-xm': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'margin': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5', 'auto'],
    },
    'margin-xl': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5', 'auto'],
    },
    'margin-lg': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5', 'auto'],
    },
    'margin-md': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5', 'auto'],
    },
    'margin-sm': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5', 'auto'],
    },
    'margin-xm': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5', 'auto'],
    },
    'margin-vertical': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5', 'auto'],
    },
    'margin-horizontal': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5', 'auto'],
    },
    'padding': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5'],
    },
    'padding-xl': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5'],
    },
    'padding-lg': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5'],
    },
    'padding-md': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5'],
    },
    'padding-sm': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5'],
    },
    'padding-xm': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5'],
    },
    'padding-vertical': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5'],
    },
    'padding-horizontal': {
      control: { type: 'select' },
      options: ['none', '0', '1', '2', '3', '4', '5'],
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
      props: args,
      template: `
        <row class="bg-secondary" ${templateArgs}>
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

export const Default: Story = {
  args: {
    'justify-content': 'none',
    'justify-content-xl': 'none',
    'justify-content-lg': 'none',
    'justify-content-md': 'none',
    'justify-content-sm': 'none',
    'justify-content-xm': 'none',
    'align-items': 'none',
    'align-items-xl': 'none',
    'align-items-lg': 'none',
    'align-items-md': 'none',
    'align-items-sm': 'none',
    'align-items-xm': 'none',
    'margin': 'none',
    'margin-xl': 'none',
    'margin-lg': 'none',
    'margin-md': 'none',
    'margin-sm': 'none',
    'margin-xm': 'none',
    'margin-vertical': 'none',
    'margin-horizontal': 'none',
    'padding': 'none',
    'padding-xl': 'none',
    'padding-lg': 'none',
    'padding-md': 'none',
    'padding-sm': 'none',
    'padding-xm': 'none',
    'padding-vertical': 'none',
    'padding-horizontal': 'none',
  },
};

type RowArgs = {
  'justify-content'?: JustifyContent | 'none';
  'justify-content-xl'?: JustifyContent | 'none';
  'justify-content-lg'?: JustifyContent | 'none';
  'justify-content-md'?: JustifyContent | 'none';
  'justify-content-sm'?: JustifyContent | 'none';
  'justify-content-xm'?: JustifyContent | 'none';
  'align-items'?: AlignItems | 'none';
  'align-items-xl'?: AlignItems | 'none';
  'align-items-lg'?: AlignItems | 'none';
  'align-items-md'?: AlignItems | 'none';
  'align-items-sm'?: AlignItems | 'none';
  'align-items-xm'?: AlignItems | 'none';
  'margin'?: Margin | 'none';
  'margin-xl'?: Margin | 'none';
  'margin-lg'?: Margin | 'none';
  'margin-md'?: Margin | 'none';
  'margin-sm'?: Margin | 'none';
  'margin-xm'?: Margin | 'none';
  'margin-vertical'?: Margin | 'none';
  'margin-horizontal'?: Margin | 'none';
  'padding'?: Padding | 'none';
  'padding-xl'?: Padding | 'none';
  'padding-lg'?: Padding | 'none';
  'padding-md'?: Padding | 'none';
  'padding-sm'?: Padding | 'none';
  'padding-xm'?: Padding | 'none';
  'padding-vertical'?: Padding | 'none';
  'padding-horizontal'?: Padding | 'none';
}
