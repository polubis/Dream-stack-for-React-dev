import type { Story, Meta } from '@storybook/react';

import { BullshitMeter } from './bullshit-meter';

export default {
  component: BullshitMeter,
  title: 'BullshitMeter',
} as Meta;

const Template: Story = () => {
  return <BullshitMeter />;
};

export const Default = Template.bind({});
Default.args = {};
