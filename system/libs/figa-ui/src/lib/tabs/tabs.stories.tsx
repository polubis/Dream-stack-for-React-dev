import type { Story, Meta } from '@storybook/react';

import { Tabs, Tab } from '.';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Tabs,
  title: 'Tabs',
} as Meta;

const titles = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Six',
  'Last',
] as const;

const Template: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[300]}>
      <Font variant="h5">Tabs showcase</Font>
      <Tabs>
        {titles.map((title, idx) => (
          <Tab key={title} active={idx === 0} disabled={idx === 3}>
            {title}
          </Tab>
        ))}
      </Tabs>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
