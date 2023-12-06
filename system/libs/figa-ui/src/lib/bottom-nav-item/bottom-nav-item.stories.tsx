import type { Story, Meta } from '@storybook/react';

import { BottomNavItem } from './bottom-nav-item';
import { HomeIcon } from '../icon';

export default {
  component: BottomNavItem,
  title: 'BottomNavItem',
} as Meta;

const Template: Story = () => {
  return (
    <>
      <BottomNavItem icon={<HomeIcon />} text="Home" />
      <BottomNavItem icon={<HomeIcon />} active text="Home" />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
