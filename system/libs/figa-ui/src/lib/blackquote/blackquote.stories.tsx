import { Story, Meta } from '@storybook/react';
import { Blackquote } from './blackquote';
import { BlackquoteProps } from './defs';

export default {
  component: Blackquote,
  title: 'Blackquote',
} as Meta;

const Template: Story<BlackquoteProps> = (args) => <Blackquote {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Example text for blackquote.',
};
