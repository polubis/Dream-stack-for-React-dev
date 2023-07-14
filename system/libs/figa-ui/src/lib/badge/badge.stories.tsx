import type { Story, Meta } from '@storybook/react';

import { Badge } from './badge';
import { Box } from '../box';
import { BADGE_MOTIVES, BADGE_VARIANTS } from './consts';
import { Font } from '../font';

export default {
  component: Badge,
  title: 'Badge',
} as Meta;

const Template: Story = () => {
  return (
    <Box spacing={BADGE_VARIANTS.map(() => 300)} padding={[300, 300, 300, 300]}>
      {BADGE_VARIANTS.map((variant) => (
        <Box key={variant} spacing={BADGE_MOTIVES.map(() => 300)}>
          <Font variant="h5"> Variant {variant}</Font>
          {BADGE_MOTIVES.map((motive) => (
            <Badge motive={motive} variant={variant} key={motive}>
              BADGE {motive.toUpperCase()}
            </Badge>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
