import type { Story, Meta } from '@storybook/react';

import { Logo } from './logo';

export default {
  component: Logo,
  title: 'Logo',
} as Meta;

const Template: Story = () => {
  return (
    <div style={{ display: 'flex', flexFlow: 'wrap', gap: '32px' }}>
      <Logo />
      <Logo parts={['First', 'Second', 'Last']} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
