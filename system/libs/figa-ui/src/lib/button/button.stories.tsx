import type { Story, Meta } from '@storybook/react';
import type { ButtonProps } from './defs';

import { Button } from './button';
import { BUTTON_SIZES } from './consts';
import { DiscordIcon } from '../icon';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<Pick<ButtonProps, 'variant' | 'motive'>> = ({
  variant,
  motive,
}) => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[200, 200, 200, 200]}>
      <Box spacing={[200]}>
        <Font variant="h5">Rounded</Font>
        <Box orientation="row" spacing={BUTTON_SIZES.map(() => 150)}>
          {BUTTON_SIZES.map((size) => (
            <Button
              key={size}
              shape="rounded"
              motive={motive}
              variant={variant}
              size={size}
            >
              <DiscordIcon />
            </Button>
          ))}
        </Box>
      </Box>

      <Box spacing={[200]}>
        <Font variant="h5">Rectangle</Font>
        <Box orientation="row" spacing={BUTTON_SIZES.map(() => 150)}>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} size={size} variant={variant} motive={motive}>
              Click Me!
            </Button>
          ))}
        </Box>
      </Box>

      <Box spacing={[200]}>
        <Font variant="h5">Rounded but disabled</Font>
        <Box orientation="row" spacing={BUTTON_SIZES.map(() => 150)}>
          {BUTTON_SIZES.map((size) => (
            <Button
              key={size}
              disabled
              shape="rounded"
              motive={motive}
              variant={variant}
              size={size}
            >
              <DiscordIcon />
            </Button>
          ))}
        </Box>
      </Box>

      <Box spacing={[200]}>
        <Font variant="h5">Rectangle but disabled</Font>
        <Box orientation="row" spacing={BUTTON_SIZES.map(() => 150)}>
          {BUTTON_SIZES.map((size) => (
            <Button
              disabled
              key={size}
              size={size}
              variant={variant}
              motive={motive}
            >
              Click Me!
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const PrimaryFilled = Template.bind({});
PrimaryFilled.args = {
  variant: 'filled',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  variant: 'outlined',
};
