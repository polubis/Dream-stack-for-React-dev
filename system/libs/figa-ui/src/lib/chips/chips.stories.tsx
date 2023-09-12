import type { Story, Meta } from '@storybook/react';

import { Chips, Chip } from '.';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Chips,
  title: 'Chips',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[150]}>
      <Font variant="h5">Example of use</Font>
      <Chips>
        <Chip>React</Chip>
        <Chip>Angular</Chip>
        <Chip>Vue</Chip>
        <Chip active>Node</Chip>
      </Chips>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
