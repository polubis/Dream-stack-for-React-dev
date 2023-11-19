import type { Story, Meta } from '@storybook/react';

import { ExpandableLink } from './expandable-link';
import { Box } from '../box';

export default {
  component: ExpandableLink,
  title: 'ExpandableLink',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[2000, 2000, 2000, 2000]}>
      <ExpandableLink>
        <ExpandableLink.Base isActive={true}>
          Name of the section
        </ExpandableLink.Base>
        <ExpandableLink.List>
          <ExpandableLink.Item>Link nr 1</ExpandableLink.Item>
          <ExpandableLink.Item>Link nr 2</ExpandableLink.Item>
        </ExpandableLink.List>
      </ExpandableLink>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
