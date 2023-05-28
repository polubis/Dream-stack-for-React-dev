import type { Story, Meta } from '@storybook/react';

import { LogoGraphic } from './logo-graphic';
import { Box } from '../box';

export default {
  component: LogoGraphic,
  title: 'LogoGraphic',
} as Meta;

const Template: Story = () => {
  return (
    <Box spacing={[150, 150, 150]}>
      <LogoGraphic size={48} />
      <LogoGraphic size={120} />
      <LogoGraphic size={40} />
      <LogoGraphic size={200} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
