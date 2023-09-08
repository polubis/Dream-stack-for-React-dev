import type { Story, Meta } from '@storybook/react';

import { Detail } from './detail';
import { Box } from '../box';

export default {
  component: Detail,
  title: 'Detail',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]}>
      <Detail value="10" label="Number of users" />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
