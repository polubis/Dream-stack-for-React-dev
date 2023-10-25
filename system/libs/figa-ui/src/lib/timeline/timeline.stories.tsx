import type { Story, Meta } from '@storybook/react';

import { Timeline } from './timeline';
import { Box } from '../box';

export default {
  component: Timeline,
  title: 'Timeline',
} as Meta;

const Template: Story = () => {
  return (
    <Box style={{ height: '100vh' }}>
      <Box margin="auto">
        <Timeline />
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
