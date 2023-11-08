import type { Story, Meta } from '@storybook/react';

import { Popover } from './popover';
import { Button } from '../button';
import { Font } from '../font';
import { CloseIcon } from '../icon';
import { Box, BoxProps } from '../box';

export default {
  component: Popover,
  title: 'Popover',
} as Meta;

const Trigger = () => {
  const { toggle, opened } = Popover.use();

  return (
    <Popover.Trigger>
      <Button onClick={toggle}>{opened ? 'Close' : 'Open'}</Button>
    </Popover.Trigger>
  );
};

const Content = (props: BoxProps) => {
  const { close } = Popover.use();

  return (
    <Popover.Content
      padding={[250, 250, 250, 250]}
      orientation="row"
      variant="outlined"
      minWidth="300px"
      maxWidth="250px"
      {...props}
    >
      <Font variant="h5">My content is here</Font>
      <Button onClick={close}>
        <CloseIcon />
      </Button>
    </Popover.Content>
  );
};

const DefaultTemplate: Story = () => {
  return (
    <Box between style={{ minHeight: '100vh' }} padding={[300, 300, 300, 300]}>
      <Box orientation="row" between>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
      </Box>
      <Box orientation="row" between>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
      </Box>
      <Box orientation="row" between>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
        <Popover openOnInit>
          <Trigger />
          <Content />
        </Popover>
      </Box>
    </Box>
  );
};

const WithScrollOnXAxisTemplate: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]}>
      <Box spacing={[2000]}>
        <Popover openOnInit>
          <Trigger />
          <Content maxWidth={undefined} minWidth="1600px" />
        </Popover>
      </Box>
      <Box right>
        <Popover openOnInit>
          <Trigger />
          <Content maxWidth={undefined} minWidth="1600px" />
        </Popover>
      </Box>
    </Box>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const WithScrollOnXAxis = WithScrollOnXAxisTemplate.bind({});
WithScrollOnXAxis.args = {};
