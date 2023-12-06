import type { Story, Meta } from '@storybook/react';

import { BottomNav } from './bottom-nav';
import { LinkedinIcon } from '../icon';

export default {
  component: BottomNav,
  title: 'BottomNav',
  parameters: {
    viewport: {
      viewports: {
        tinyMobile: {
          name: 'tinyMobile',
          styles: {
            width: '300px',
            height: '800px',
          },
        },
      },
    },
  },
} as Meta;

const Template: Story = () => {
  return (
    <BottomNav>
      <BottomNav.Item text="Home" icon={<LinkedinIcon />} />
      <BottomNav.Item text="Articles" icon={<LinkedinIcon />} />
      <BottomNav.Item text="Main" icon={<LinkedinIcon />} />
      <BottomNav.Item text="View" icon={<LinkedinIcon />} />
      <BottomNav.Item text="View" icon={<LinkedinIcon />} />
      <BottomNav.Item text="View" icon={<LinkedinIcon />} />
      <BottomNav.Item text="View" icon={<LinkedinIcon />} />
    </BottomNav>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const OnMobile = Template.bind({});
OnMobile.args = {};
OnMobile.parameters = {
  viewport: {
    defaultViewport: 'tinyMobile',
  },
};
