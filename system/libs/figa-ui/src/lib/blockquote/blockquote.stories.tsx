import type { Story, Meta } from '@storybook/react';

import { Blockquote } from './blockquote';
import { Box } from '../box';
import { FONT_VARIANTS } from '../font';

export default {
  component: Blockquote,
  title: 'Blockquote',
} as Meta;

const Template: Story = () => {
  return (
    <Box spacing={FONT_VARIANTS.map(() => 150)}>
      {FONT_VARIANTS.map((variant) => (
        <Blockquote key={variant} variant={variant} children={variant} />
      ))}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
