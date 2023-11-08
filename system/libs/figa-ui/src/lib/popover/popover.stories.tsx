import type { Story, Meta } from '@storybook/react';

import { Popover } from './popover';
import { tokens } from '../theme-provider';
import { Button } from '../button';
import { Font } from '../font';
import { CloseIcon } from '../icon';

export default {
  component: Popover,
  title: 'Popover',
} as Meta;

const Trigger = () => {
  const { toggle } = Popover.use();

  return (
    <Popover.Trigger>
      <Button onClick={toggle}>Show</Button>
    </Popover.Trigger>
  );
};

const Content = () => {
  const { close } = Popover.use();

  return (
    <Popover.Content>
      <div style={{ padding: tokens.spacing[250] }}>
        <Font variant="h5">My content is here</Font>
        <Button onClick={close}>
          <CloseIcon />
        </Button>
      </div>
    </Popover.Content>
  );
};

const Template: Story = () => {
  return (
    <div style={{ padding: tokens.spacing[300] }}>
      <Popover>
        <Trigger />
        <Content />
      </Popover>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
