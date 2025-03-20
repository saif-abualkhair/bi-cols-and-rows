import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { Column, NgxBootstrapBlocksModule } from '../public-api';
import { getTemplateArgs } from './stories.util';
import { Size } from '../lib/models/column-size.type';
import { AlignSelf } from '../lib/models/align-self.type';

const meta: Meta<ColumnArgs> = {
  title: 'Example/Column',
  component: Column,
  tags: ['autodocs'],
  argTypes: {
    'size': {
      control: { type: 'select' },
      options: ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
    },
    'size-xl': {
      control: { type: 'select' },
      options: ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
    },
    'size-lg': {
      control: { type: 'select' },
      options: ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
    },
    'size-md': {
      control: { type: 'select' },
      options: ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
    },
    'size-sm': {
      control: { type: 'select' },
      options: ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
    },
    'size-xm': {
      control: { type: 'select' },
      options: ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'],
    },
    'align-self': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-self-xl': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-self-lg': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-self-md': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-self-sm': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    },
    'align-self-xm': {
      control: { type: 'select' },
      options: ['none', 'start', 'end', 'center', 'baseline', 'stretch'],
    }
    
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
        <row class="bg-secondary">
          <column class="bg-primary border border-dark" ${templateArgs}>Column 1</column>
  
          <column class="bg-primary border border-dark" ${templateArgs}>Column 2</column>
  
          <column class="bg-primary border border-dark" ${templateArgs}>Column 3</column>
        </row>
      `,
    }
  },
};

export default meta;
type Story = StoryObj<ColumnArgs>;

export const Default: Story = {
  args: {
    'size': '3',
    'size-xl': 'none',
    'size-lg': 'none',
    'size-md': 'none',
    'size-sm': 'none',
    'size-xm': 'none',
    'align-self': 'none',
    'align-self-xl': 'none',
    'align-self-lg': 'none',
    'align-self-md': 'none',
    'align-self-sm': 'none',
    'align-self-xm': 'none'

  },
};

type ColumnArgs = {
  'size': Size | 'none';
  'size-xl': Size | 'none';
  'size-lg': Size | 'none';
  'size-md': Size | 'none';
  'size-sm': Size | 'none';
  'size-xm': Size | 'none';
  'align-self': AlignSelf| 'none';
  'align-self-xl': AlignSelf | 'none';
  'align-self-lg': AlignSelf | 'none';
  'align-self-md': AlignSelf | 'none';
  'align-self-sm': AlignSelf | 'none';
  'align-self-xm': AlignSelf | 'none';
}
