import type { Story, Meta } from '@storybook/react';
import type { BlackquoteProps } from './defs';

import { Blackquote } from './blackquote';

export default {
  component: Blackquote,
  title: 'Blackquote',
} as Meta;

const Template: Story<BlackquoteProps> = (args) => <Blackquote {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Example text for blackquote.',
};
