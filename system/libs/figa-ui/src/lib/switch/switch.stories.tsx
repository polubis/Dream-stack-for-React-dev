import type { Story, Meta } from '@storybook/react';

import { Switch } from './switch';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Switch,
  title: 'Switch',
} as Meta;

const Template: Story = () => {
  return (
    <Box
      padding={[300, 300, 300, 300]}
      spacing={[150, 300, 150, 300, 150, 300, 150, 300]}
    >
      <Font variant="h5">Empty</Font>
      <Switch />
      <Font variant="h5">With labels</Font>
      <Box orientation="row" spacing={[150]}>
        <Switch label="Default" />
        <Switch reversed label="Reversed" />
      </Box>
      <Font variant="h5">Active</Font>
      <Box orientation="row">
        <Switch label="Default" active />
      </Box>
      <Font variant="h5">Disabled</Font>
      <Box orientation="row" spacing={[150]}>
        <Switch label="Default" disabled />
        <Switch label="Default" disabled active />
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
