import type { Story, Meta } from '@storybook/react';
import type { ButtonProps } from './defs';

import { Button } from './button';
import { BUTTON_SIZES } from './consts';
import { DiscordIcon } from '../icon';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<{ variant: ButtonProps['variant'] }> = ({ variant }) => {
  return (
    <>
      {BUTTON_SIZES.map((size) => (
        <div key={'rounded-' + size} style={{ margin: '8px 0' }}>
          <Button shape="rounded" variant={variant} size={size}>
            <DiscordIcon />
          </Button>
        </div>
      ))}
      {BUTTON_SIZES.map((size) => (
        <div key={'rectangle-' + size} style={{ margin: '8px 0' }}>
          <Button size={size} variant={variant}>
            Click Me!
          </Button>
        </div>
      ))}
    </>
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
