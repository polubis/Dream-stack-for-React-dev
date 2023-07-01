import type { Story, Meta } from '@storybook/react';

import { Image } from './image';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Image,
  title: 'Image',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[300]}>
      <Font variant="h5">400x200</Font>
      <Image
        maxWidth="400px"
        maxHeight="200px"
        alt="My image"
        src="https://img.freepik.com/premium-wektory/dobry-widok-na-gory-grafika-ilustracja-projekt-koszulki-wektor-sztuki_24519-2593.jpg?w=2000"
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
