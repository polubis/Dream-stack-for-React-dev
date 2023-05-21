import type { ReactNode } from 'react';
import type { Story, Meta } from '@storybook/react';

import { Box } from './box';
import { Font } from '../font';
import { Button } from '../button';

export default {
  component: Box,
  title: 'Box',
} as Meta;

const Template: Story<{ children: ReactNode }> = (props) => {
  return (
    <div
      style={{ display: 'flex', flexFlow: 'column', gap: 12, padding: '24px' }}
    >
      {props.children}
    </div>
  );
};

export const OrientationAndSpacing = Template.bind({});
OrientationAndSpacing.args = {
  children: (
    <>
      <Box orientation="row" spacing={[100, 150, 200]}>
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box spacing={[100, 150, 200]}>
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box orientation="center-column" spacing={[100, 150, 200]}>
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box orientation="center-row" spacing={[100, 150, 200]}>
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
    </>
  ),
};

export const Padding = Template.bind({});
Padding.args = {
  children: (
    <Box spacing={[100, 150, 200]} padding={[950, 950, 950, 950]}>
      <Font variant="h6">My header</Font>
      <Font variant="b1">My header content</Font>
      <Button>Some button</Button>
    </Box>
  ),
};

export const Margins = Template.bind({});
Margins.args = {
  children: (
    <>
      <div>
        <Box spacing={[100, 150, 200]} margin="auto">
          <Font variant="h6">My header</Font>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </div>
      <div>
        <Box spacing={[100, 150, 200]} margin={['auto', 300, 150, 'auto']}>
          <Font variant="h6">My header</Font>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </div>
      <div>
        <Box spacing={[100, 150, 200]} margin={[500, 500, 500, 500]}>
          <Font variant="h6">My header</Font>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </div>
      <div>
        <Box
          spacing={[100, 150, 200]}
          maxWidth="350px"
          margin={['auto', 'auto']}
        >
          <Font variant="h6">My header</Font>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </div>
    </>
  ),
};

export const Variants = Template.bind({});
Variants.args = {
  children: (
    <>
      <Box variant="outlined" spacing={[100, 150, 200]}>
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
      <Box variant="filled" spacing={[100, 150, 200]}>
        <Font variant="h6">My header</Font>
        <Font variant="b1">My header content</Font>
        <Button>Some button</Button>
      </Box>
    </>
  ),
};
