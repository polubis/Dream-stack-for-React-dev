import type { Story, Meta } from '@storybook/react';

import * as IconModule from './icon';
import { Box } from '../box';

export default {
  component: IconModule.Icon,
  title: 'Icon',
} as Meta;

const Template: Story = () => {
  const { Icon, ...Icons } = IconModule;
  const entries = Object.entries(Icons);

  return (
    <Box spacing={entries.map(() => 150)}>
      {entries.map(([key, IconComponent]) => (
        <IconComponent key={key} />
      ))}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
