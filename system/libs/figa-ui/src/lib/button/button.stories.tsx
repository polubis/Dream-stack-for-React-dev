import type { Story, Meta } from '@storybook/react';
import type { ButtonProps } from './defs';

import { Button } from './button';
import { BUTTON_SIZES } from './consts';
import { DiscordIcon } from '../icon';
import { Box } from '../box';
import { Font } from '../font';
import { Avatar } from '../avatar';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<Pick<ButtonProps, 'variant' | 'motive'>> = ({
  variant,
  motive,
}) => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[200, 200, 200, 200, 200]}>
      <Box spacing={[200, 200]}>
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
        <Box orientation="row" spacing={BUTTON_SIZES.map(() => 150)}>
          {BUTTON_SIZES.map((size) => (
            <Button
              key={size}
              shape="rounded"
              motive={motive}
              variant={variant}
              size={size}
            >
              <Avatar
                alt="My alt text"
                src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
              />
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

      <Box spacing={[200, 200]}>
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
              <Avatar
                alt="My alt text"
                src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
              />
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

      <Box spacing={[200]}>
        <Font variant="h5">Rounded but loading</Font>
        <Box orientation="row" spacing={BUTTON_SIZES.map(() => 150)}>
          {BUTTON_SIZES.map((size) => (
            <Button
              key={size}
              loading
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
        <Font variant="h5">Rectangle but loading</Font>
        <Box orientation="row" spacing={BUTTON_SIZES.map(() => 150)}>
          {BUTTON_SIZES.map((size) => (
            <Button
              loading
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

export const SecondaryFilled = Template.bind({});
SecondaryFilled.args = {
  variant: 'filled',
  motive: 'secondary',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  variant: 'outlined',
  motive: 'secondary',
};
