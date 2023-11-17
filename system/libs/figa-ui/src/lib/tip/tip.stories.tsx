import type { Story, Meta } from '@storybook/react';

import { Tip } from './tip';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Tip,
  title: 'Tip',
} as Meta;

const Template: Story = () => {
  return (
    <Box
      padding={[300, 300, 300, 300]}
      spacing={[1000, 1000, 1000, 1000, 1000]}
    >
      <Box padding={[1000, 0, 0, 0]}>
        <Tip content="This is my tip!" orientation="top">
          <Font variant="h5">I'm top and have content</Font>
        </Tip>
      </Box>
      <Box>
        <Tip content="This is my tip!" orientation="right">
          <Font variant="h5">I'm right and have content</Font>
        </Tip>
      </Box>
      <Box>
        <Tip content="This is my tip!">
          <Font variant="h5">I'm bottom and have content</Font>
        </Tip>
      </Box>
      <Box padding={[0, 0, 0, 1000]}>
        <Tip content="This is my tip!" orientation="left">
          <Font variant="h5">I'm left and have content</Font>
        </Tip>
      </Box>
      <Box style={{ height: '100px', overflow: 'scroll' }}>
        <Tip content="This is my tip with custom offset" orientation="bottom">
          <Font variant="h5">I work in scrollable area</Font>
        </Tip>
        <Font variant="h1">
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form
        </Font>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
