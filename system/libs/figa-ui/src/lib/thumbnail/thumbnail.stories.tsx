import type { Story, Meta } from '@storybook/react';

import { Thumbnail } from './thumbnail';

export default {
  component: Thumbnail,
  title: 'Thumbnail',
} as Meta;

const Template: Story = () => {
  return (
    <Thumbnail
      alt="Thumbnail"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMoD_dTTKX7ZPPEdDaSFDzOfKk7WNfPDq8w&usqp=CAU"
      title="Example of thumbnail"
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
