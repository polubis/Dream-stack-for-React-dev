import type { Story, Meta } from '@storybook/react';

import { Checkbox } from './checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
} as Meta;

const Template: Story = () => {
  return <Checkbox />;
};

export const Default = Template.bind({});
Default.args = {};
