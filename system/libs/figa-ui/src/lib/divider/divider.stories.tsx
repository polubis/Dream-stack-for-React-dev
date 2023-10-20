import type { Story, Meta } from '@storybook/react';

import { Divider, type DividerProps } from '.';
import { Box } from '../box';
import { Font } from '../font';
import { DIVIDER_AXIS, DIVIDER_MOTIVES } from './consts';

export default {
  component: Divider,
  title: 'Divider',
} as Meta;

const Template: Story<DividerProps> = (props) => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[200, 200, 200, 200]}>
      {DIVIDER_AXIS.map((axis) => (
        <Box orientation="row" spacing={[200, 200]}>
          <Font variant="b2">Axis {axis}:</Font>
          <Divider axis={axis} />
        </Box>
      ))}
      {DIVIDER_MOTIVES.map((motive) => (
        <Box orientation="row" spacing={[200, 200]}>
          <Font variant="b2">Motive {motive}: </Font>
          <Divider motive={motive} />
        </Box>
      ))}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
