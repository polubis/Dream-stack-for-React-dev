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
    <Box
      spacing={[
        400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400,
        400, 400, 400, 400, 400, 400, 400, 400,
      ]}
      padding={[300, 300, 300, 300]}
    >
      <Font variant="h3">Orientations</Font>
      <Box spacing={[150]}>
        <Font variant="h5">Row box</Font>
        <Box orientation="row" spacing={[200]}>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Column box</Font>
        <Box spacing={[200]}>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Row right</Font>
        <Box orientation="row" spacing={[200]} right>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Row between</Font>
        <Box orientation="row" spacing={[200]} between>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Column between</Font>
        <Box spacing={[200]} between style={{ height: '120px' }}>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Column right</Font>
        <Box spacing={[200]} right>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Column center</Font>
        <Box spacing={[200]} center>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Column between</Font>
        <Box spacing={[200]} between style={{ height: '120px' }}>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Font variant="h3">Variants</Font>
      <Box spacing={[150]}>
        <Font variant="h5">Empty</Font>
        <Box spacing={[200]}>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Outlined with padding</Font>
        <Box variant="outlined" spacing={[200]} padding={[250, 250, 250, 250]}>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Filled with padding</Font>
        <Box variant="filled" spacing={[200]} padding={[250, 250, 250, 250]}>
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Font variant="h3">Positioning</Font>
      <Box spacing={[150]}>
        <Font variant="h5">Filled with max width 420px</Font>
        <Box
          variant="filled"
          spacing={[200]}
          padding={[250, 250, 250, 250]}
          maxWidth="420px"
        >
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">
          Filled with min width 420px and max width 500px
        </Font>
        <Box
          variant="filled"
          spacing={[200]}
          padding={[250, 250, 250, 250]}
          minWidth="420px"
          maxWidth="500px"
        >
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
      <Box spacing={[150]}>
        <Font variant="h5">Filled with max width 420px and auto margin</Font>
        <Box
          variant="filled"
          spacing={[200]}
          padding={[250, 250, 250, 250]}
          maxWidth="420px"
          margin="auto"
        >
          <Font variant="b1">My header content</Font>
          <Button>Some button</Button>
        </Box>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
