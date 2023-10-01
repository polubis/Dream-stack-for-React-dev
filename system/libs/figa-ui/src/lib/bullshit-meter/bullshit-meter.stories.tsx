import type { Story, Meta } from '@storybook/react';

import { BullshitMeter } from './bullshit-meter';
import type { BullshitMeterProps } from './defs';

export default {
  component: BullshitMeter,
  title: 'BullshitMeter',
} as Meta;

const Template: Story<BullshitMeterProps> = (props) => (
  <BullshitMeter {...props} />
);

export const Default = Template.bind({});
Default.args = {
  value: 30,
};
