import type { Story, Meta } from '@storybook/react';

import { Radio, RadioCase } from '.';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Radio,
  title: 'Radio',
} as Meta;

const Template: Story = () => {
  return (
    <Box
      padding={[300, 300, 600, 300]}
      spacing={[150, 300, 150, 300, 150, 300, 150, 300]}
    >
      <Font variant="h5">Variants</Font>
      <Radio>
        <RadioCase label="First" name="1" value="First" />
        <RadioCase label="Second" name="1" value="Second" />
      </Radio>
      <Font variant="h5">Reversed</Font>
      <Radio>
        <RadioCase reversed label="First" name="2" value="First" />
        <RadioCase reversed label="Second" name="2" value="Second" />
      </Radio>
      <Font variant="h5">Active</Font>
      <Radio>
        <RadioCase active label="First" name="3" value="First" />
        <RadioCase label="Second" name="3" value="Second" />
      </Radio>
      <Font variant="h5">Disabled</Font>
      <Radio>
        <RadioCase active disabled label="First" name="4" value="First" />
        <RadioCase disabled label="Second" name="4" value="Second" />
      </Radio>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
