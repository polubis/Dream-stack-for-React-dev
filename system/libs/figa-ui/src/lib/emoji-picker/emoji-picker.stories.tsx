import type { Story, Meta } from '@storybook/react';
import type { EmojiPickerProps } from './defs';

import { EmojiPicker } from './emoji-picker';

export default {
  component: EmojiPicker,
  title: 'EmojiPicker',
} as Meta;

const Template: Story<EmojiPickerProps> = (args) => <EmojiPicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Pick your emoji',
};
