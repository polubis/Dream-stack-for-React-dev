import type { Story, Meta } from '@storybook/react';

import { ProgressCircle } from './progress-circle';

export default {
  component: ProgressCircle,
  title: 'ProgressCircle',
} as Meta;

const Template: Story = () => {
  return (
    <div style={{ padding: '24px' }}>
      <ProgressCircle />
      <ProgressCircle size={150} jump={1000} />
      <ProgressCircle size={50} interval={100} />
      <ProgressCircle size={300} jump={1000} ms={3000} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
