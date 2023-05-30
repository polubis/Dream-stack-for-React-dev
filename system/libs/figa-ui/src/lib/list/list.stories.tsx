import type { Story, Meta } from '@storybook/react';

import { List, ListItem } from './list';
import { Box } from '../box';

export default {
  component: List,
  title: 'List',
} as Meta;

const Template: Story = () => {
  return (
    <Box spacing={[300]}>
      <List>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>

      <List ordered>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
