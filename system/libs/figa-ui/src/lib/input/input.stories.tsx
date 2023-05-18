import type { Story, Meta } from '@storybook/react';

import { Input } from './input';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const Template: Story = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
      }}
    >
      <Input />
      <Input placeholder="Please write something..." />
      <div style={{ width: '220px' }}>
        <Input value="custom value" />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
