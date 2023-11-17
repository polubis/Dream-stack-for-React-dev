import type { Story, Meta } from '@storybook/react';

import { Placeholder } from './placeholder';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Placeholder,
  title: 'Placeholder',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[150, 300, 150]}>
      <Font variant="h5">Filled and Outlined variants</Font>
      <Box orientation="row" spacing={[150]}>
        <Placeholder />
        <Placeholder variant="outlined" />
      </Box>
      <Font variant="h5">With full width and height</Font>
      <Placeholder full />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
