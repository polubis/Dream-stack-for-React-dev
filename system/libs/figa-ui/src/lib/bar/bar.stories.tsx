import type { Story, Meta } from '@storybook/react';

import { Bar } from './Bar';
import type { BarProps } from './defs';
import { Button } from '../button';
import { ArrowTopIcon, CloseIcon } from '../icon';

export default {
  component: Bar,
  title: 'Bar',
} as Meta;

const Nodes = [
  <Button>
    <ArrowTopIcon />
  </Button>,
  <Button>
    <CloseIcon />
  </Button>,
];

const Template: Story<BarProps> = () => {
  return (
    <>
      <Bar>{Nodes}</Bar>
      <Bar right>{Nodes}</Bar>
      <Bar top right>
        {Nodes}
      </Bar>
      <Bar top>{Nodes}</Bar>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
