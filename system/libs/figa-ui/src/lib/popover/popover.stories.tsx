import type { Story, Meta } from '@storybook/react';

import { Popover } from './popover';
import { Button } from '../button';
import { Font } from '../font';
import { CloseIcon } from '../icon';
import { Box, type BoxProps } from '../box';

export default {
  component: Popover,
  title: 'Popover',
  parameters: {
    viewport: {
      viewports: {
        tinyMobile: {
          name: 'tinyMobile',
          styles: {
            width: '300px',
            height: '800px',
          },
        },
      },
    },
  },
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
      {props.children ?? (
        <>
          <Font variant="h5">My content is here</Font>
          <Button onClick={close}>
            <CloseIcon />
          </Button>
        </>
      )}
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

const WithTooBigContentInXAxis: Story = () => {
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

const WithCloseModeBackdrop: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]}>
      <Font variant="h6">
        s simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Font>
      <Popover openOnInit closeMode="backdrop">
        <Trigger />
        <Content />
      </Popover>
    </Box>
  );
};

const WithCustomScrollInsideTemplate: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]}>
      <Popover openOnInit>
        <Trigger />
        <Content
          padding={[0, 0, 0, 0]}
          maxWidth={undefined}
          minWidth={undefined}
        >
          <Font variant="h1">
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. s simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. s simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. s simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Font>
        </Content>
      </Popover>
    </Box>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const WithTooBigContentOnXAxis = WithTooBigContentInXAxis.bind({});
WithTooBigContentOnXAxis.args = {};

export const WithBackdropCloseMode = WithCloseModeBackdrop.bind({});
WithBackdropCloseMode.args = {};

export const WithCustomScrollInside = WithCustomScrollInsideTemplate.bind({});
WithCustomScrollInside.args = {};

export const OnMobile = DefaultTemplate.bind({});
OnMobile.args = {};
OnMobile.parameters = {
  viewport: {
    defaultViewport: 'tinyMobile',
  },
};
