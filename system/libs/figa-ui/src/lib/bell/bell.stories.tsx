import { Story, Meta } from '@storybook/react';
import { Bell, AnimationIterationCount } from './bell';

export default {
  component: Bell,
  title: 'Bell',
} as Meta;

const Template: Story = (args) => <Bell {...args} />;

export const Basic = Template.bind({});
Basic.args = { size: 256 };

export const Size128 = Template.bind({});
Size128.args = {
  size: 128,
  animationIterationCount: AnimationIterationCount.INFINITE,
};

export const Infinite = Template.bind({});
Infinite.args = {
  size: 256,
  animationIterationCount: AnimationIterationCount.INFINITE,
};
