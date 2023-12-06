import type { Story, Meta } from '@storybook/react';

import { TopNavItem } from './top-nav-item';
import { PlusCircleIcon } from '../icon';

export default {
  component: TopNavItem,
  title: 'TopNavItem',
} as Meta;

const Template: Story = () => {
  return (
    <>
      <TopNavItem>
        Content <PlusCircleIcon />
      </TopNavItem>
      <TopNavItem active>
        Content <PlusCircleIcon />
      </TopNavItem>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
