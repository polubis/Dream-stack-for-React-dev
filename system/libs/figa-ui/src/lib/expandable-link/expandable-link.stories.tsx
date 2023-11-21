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
      <div style={{ display: 'flex' }}>
        <ExpandableLink>
          <ExpandableLink.Name isActive>Inputs</ExpandableLink.Name>
          <ExpandableLink.List>
            <ExpandableLink.Item path="/?path=/story/input--empty-input">
              Empty Input
            </ExpandableLink.Item>
            <ExpandableLink.Item path="/?path=/story/input--filled-input">
              Filled Input
            </ExpandableLink.Item>
          </ExpandableLink.List>
        </ExpandableLink>
      </div>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
