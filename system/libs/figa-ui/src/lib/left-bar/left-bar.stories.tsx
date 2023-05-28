import type { Story, Meta } from '@storybook/react';

import { LeftBar } from './left-bar';
import { Button } from '../button';

export default {
  component: LeftBar,
  title: 'LeftBar',
} as Meta;

const Template: Story = () => {
  return (
    <div style={{ minHeight: '150vh' }}>
      <LeftBar>
        <Button size={2}>A</Button>
        <Button size={2}>B</Button>
        <Button size={2}>C</Button>
      </LeftBar>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
