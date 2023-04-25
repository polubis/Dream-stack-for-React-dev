import type { Story, Meta } from '@storybook/react';
import type { FontProps } from './defs';

import { Font } from './font';

export default {
  component: Font,
  title: 'Font',
} as Meta;

const Template: Story<FontProps> = (args) => <Font {...args} />;

export const WithCustomElement = Template.bind({});
WithCustomElement.args = {
  variant: 'h1',
  children: 'Headline 1',
  element: 'span',
};

export const H1 = Template.bind({});
H1.args = { variant: 'h1', children: 'Headline1 ' };

export const H2 = Template.bind({});
H2.args = { variant: 'h2', children: 'Headline2' };

export const H3 = Template.bind({});
H3.args = { variant: 'h3', children: 'Headline3' };

export const H4 = Template.bind({});
H4.args = { variant: 'h4', children: 'Headline4 ' };

export const H5 = Template.bind({});
H5.args = { variant: 'h5', children: 'Headline5' };

export const H6 = Template.bind({});
H6.args = { variant: 'h6', children: 'Headline6' };

export const B1 = Template.bind({});
B1.args = { variant: 'b1', children: 'Body1' };

export const B2 = Template.bind({});
B2.args = { variant: 'b2', children: 'Body2' };
