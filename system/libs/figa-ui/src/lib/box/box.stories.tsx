import type { Story, Meta } from '@storybook/react';

import { Box } from './box';
import { Font } from '../font';
import { Button } from '../button';

export default {
  component: Box,
  title: 'Box',
} as Meta;

const Template: Story = () => {
  return (
    <div
      style={{ display: 'flex', flexFlow: 'column', gap: 12, padding: '24px' }}
    >
      <Box orientation="row">
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box>
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box orientation="center-column">
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box orientation="center-row">
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box orientation="center-row" variant="outlined">
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box orientation="center-row" variant="filled">
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box
        orientation="center-row"
        variant="filled"
        padding={[100, 100, 100, 100]}
      >
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box
        orientation="center-column"
        variant="filled"
        padding={[100, 100, 100, 100]}
        spacing={[1000, 500, 1000]}
      >
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
