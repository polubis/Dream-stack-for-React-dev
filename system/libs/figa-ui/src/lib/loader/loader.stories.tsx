import type { Story, Meta } from '@storybook/react';

import { Loader } from './loader';
import { Box } from '../box';
import { Font } from '../font';
import { LOADER_SIZES, LOADER_VARIANTS } from './consts';

export default {
  component: Loader,
  title: 'Loader',
} as Meta;

const Template: Story = () => {
  return (
    <Box spacing={[500, 500, 500]} padding={[300, 300, 300, 300]}>
      {LOADER_SIZES.map((size) => (
        <Box spacing={[300]}>
          <Font variant="h5">Size {size}</Font>
          <Box orientation="row" spacing={[300, 300, 300, 300]}>
            {LOADER_VARIANTS.map((variant) => (
              <Loader key={variant} size={size} variant={variant} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
