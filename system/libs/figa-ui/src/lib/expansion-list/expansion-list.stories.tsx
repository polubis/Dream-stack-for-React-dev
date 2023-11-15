import type { Story, Meta } from '@storybook/react';

import { ExpansionList } from './expansion-list';
import { Button } from '../button';
import { Font } from '../font';
import { Box } from '../box';

export default {
  component: ExpansionList,
  title: 'ExpansionList',
} as Meta;

const Template: Story = () => {
  const [selection, { toggle }] = ExpansionList.use({ 1: true });

  return (
    <Box padding={[300, 300, 300, 300]} spacing={[200]}>
      <Font variant="h5">Default setup</Font>
      <ExpansionList>
        <ExpansionList.Item>
          <ExpansionList.Header>
            <Font variant="b2">This is the header</Font>
            <Button size={2} shape="rounded" onClick={() => toggle(0)}>
              {selection[0] ? 'C' : 'O'}
            </Button>
          </ExpansionList.Header>
          <ExpansionList.Content opened={selection[0]}>
            <Font variant="h6">Content</Font>
          </ExpansionList.Content>
        </ExpansionList.Item>
        <ExpansionList.Item>
          <ExpansionList.Header>
            <Font variant="b2">This is the header</Font>
            <Button size={2} shape="rounded" onClick={() => toggle(1)}>
              {selection[1] ? 'C' : 'O'}
            </Button>
          </ExpansionList.Header>
          <ExpansionList.Content opened={selection[1]}>
            <Font variant="h6">Content</Font>
          </ExpansionList.Content>
        </ExpansionList.Item>
      </ExpansionList>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
