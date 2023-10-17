import type { Story, Meta } from '@storybook/react';

import { Slider } from './slider';

export default {
  component: Slider,
  title: 'Slider',
} as Meta;

const Template: Story = () => {
  return <Slider />;
};

export const Default = Template.bind({});
Default.args = {};
