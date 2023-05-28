import type { Story, Meta } from '@storybook/react';

import { CodeBlock } from './code-block';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: CodeBlock,
  title: 'CodeBlock',
} as Meta;

const Template: Story = () => {
  return (
    <Box spacing={[300]} maxWidth="300px">
      <CodeBlock
        header={(Dots) => (
          <>
            {Dots} <Font variant="b1">Header</Font>
          </>
        )}
      >
        <Font variant="h5">Content</Font>
      </CodeBlock>
      <CodeBlock>
        <Font variant="h5">Content</Font>
      </CodeBlock>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
