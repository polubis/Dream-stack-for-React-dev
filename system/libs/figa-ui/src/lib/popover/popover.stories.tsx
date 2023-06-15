import type { Story, Meta } from '@storybook/react';

import { Popover } from './popover';
import { Button } from '../button';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Popover,
  title: 'Popover',
} as Meta;

const Template: Story = () => {
  return (
    <Popover
      initialOpen
      trigger={({ isOpen, toggle }) => (
        <Button onClick={toggle}>{isOpen ? 'Hide me' : 'Show me'}</Button>
      )}
    >
      {({ close }) => (
        <Box spacing={[400]}>
          <Font variant="h6">Example header</Font>
          <Button onClick={close}>Close Me</Button>
        </Box>
      )}
    </Popover>
  );
};

export const Default = Template.bind({});
Default.args = {};
