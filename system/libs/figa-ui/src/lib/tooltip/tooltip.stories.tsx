import type { Story, Meta } from '@storybook/react';

import { Tooltip } from './tooltip';
import { Box } from '../box';
import { Image } from '../image';
import { Font } from '../font';

export default {
  component: Tooltip,
  title: 'Tooltip',
} as Meta;

const Template: Story = () => {
  return (
    <Box
      padding={[300, 300, 300, 300]}
      spacing={[400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400]}
      center
    >
      <Font variant="h3">Tooltip variants</Font>
      <Box spacing={[150]} center>
        <Font variant="h5">Tooltip TOP</Font>
        <Box spacing={[150]} between>
          <Tooltip content="Tooltip TOP" direction="top" delay={400}>
            <Image
              maxWidth="400px"
              maxHeight="200px"
              alt="My image"
              src="https://img.freepik.com/premium-wektory/dobry-widok-na-gory-grafika-ilustracja-projekt-koszulki-wektor-sztuki_24519-2593.jpg?w=2000"
            />
          </Tooltip>
        </Box>
      </Box>
      <Box spacing={[150]} center>
        <Font variant="h5">Tooltip RIGHT</Font>
        <Box spacing={[150]} between>
          <Tooltip content="Tooltip RIGHT" direction="right" delay={400}>
            <Image
              maxWidth="400px"
              maxHeight="200px"
              alt="My image"
              src="https://img.freepik.com/premium-wektory/dobry-widok-na-gory-grafika-ilustracja-projekt-koszulki-wektor-sztuki_24519-2593.jpg?w=2000"
            />
          </Tooltip>
        </Box>
      </Box>
      <Box spacing={[150]} center>
        <Font variant="h5">Tooltip BOTTOM</Font>
        <Box spacing={[150]} between>
          <Tooltip content="Tooltip BOTTOM" direction="bottom" delay={400}>
            <Image
              maxWidth="400px"
              maxHeight="200px"
              alt="My image"
              src="https://img.freepik.com/premium-wektory/dobry-widok-na-gory-grafika-ilustracja-projekt-koszulki-wektor-sztuki_24519-2593.jpg?w=2000"
            />
          </Tooltip>
        </Box>
      </Box>
      <Box spacing={[150]} center>
        <Font variant="h5">Tooltip LEFT</Font>
        <Box spacing={[150]} between>
          <Tooltip content="Tooltip LEFT" direction="left" delay={400}>
            <Image
              maxWidth="400px"
              maxHeight="200px"
              alt="My image"
              src="https://img.freepik.com/premium-wektory/dobry-widok-na-gory-grafika-ilustracja-projekt-koszulki-wektor-sztuki_24519-2593.jpg?w=2000"
            />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
