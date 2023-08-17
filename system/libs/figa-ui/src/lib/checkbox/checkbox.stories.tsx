import type { Story, Meta } from '@storybook/react';

import { Checkbox } from './checkbox';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Checkbox,
  title: 'Checkbox',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]}>
      <Box spacing={[200, 200]}>
        <Font variant="h5">Possible use cases</Font>
        <Box orientation="row" spacing={[300, 300, 300]}>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" checked />
          <Checkbox label="Disabled and unchecked" disabled />
          <Checkbox label="Disabled and checked" disabled checked />
        </Box>
        <Box maxWidth="max-content" spacing={[300]}>
          <Checkbox label="Reversed" reversed />
          <Checkbox />
        </Box>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
