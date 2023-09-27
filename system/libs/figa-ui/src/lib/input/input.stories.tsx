import type { Story, Meta } from '@storybook/react';

import { Input, Textarea } from './input';
import { Box } from '../box';
import { Font } from '../font';
import { INPUT_VARIANTS } from './consts';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const InputTemplate: Story = () => {
  return (
    <Box spacing={INPUT_VARIANTS.map(() => 300)} padding={[300, 300, 300, 300]}>
      {INPUT_VARIANTS.map((variant) => (
        <Box
          spacing={[300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]}
        >
          <Font variant="h3">Variant "{variant}"</Font>
          <Font variant="h5">Without placeholder</Font>
          <Input variant={variant} />
          <Font variant="h5">With placeholder</Font>
          <Input variant={variant} placeholder="Please write something..." />
          <Font variant="h5">
            With value and min width 200px max width 300px
          </Font>
          <Input
            variant={variant}
            value="custom value"
            minWidth="200px"
            maxWidth="300px"
          />
          <Font variant="h5">Invalid input</Font>
          <Input
            variant={variant}
            invalid
            value="custom value asda dd sadsasadsadsadsadsadsad sasad "
            minWidth="200px"
            maxWidth="200px"
          />
          <Font variant="h5">Disabled input</Font>
          <Input
            variant={variant}
            invalid
            disabled
            value="custom value asda dd sadsasadsadsadsadsadsad sasad "
            minWidth="200px"
            maxWidth="200px"
          />
          <Font variant="h5">Loading input</Font>
          <Input
            variant={variant}
            invalid
            loading
            value="custom value asda dd sadsasadsadsadsadsadsad sasad "
            minWidth="200px"
            maxWidth="200px"
          />
          <Font variant="h5">Input with prefix</Font>
          <Input
            prefix
            variant={variant}
            value="custom value asda dd sadsasadsadsadsadsadsad sasad "
            minWidth="200px"
            maxWidth="200px"
          />
        </Box>
      ))}
    </Box>
  );
};

const TextareaTemplate: Story = () => {
  return (
    <Box spacing={INPUT_VARIANTS.map(() => 300)} padding={[300, 300, 300, 300]}>
      {INPUT_VARIANTS.map((variant) => (
        <Box
          spacing={[300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]}
        >
          <Font variant="h3">Variant "{variant}"</Font>
          <Font variant="h5">Without placeholder</Font>
          <Textarea variant={variant} />
          <Font variant="h5">With placeholder</Font>
          <Textarea variant={variant} placeholder="Please write something..." />
          <Font variant="h5">
            With value and min width 200px max width 300px
          </Font>
          <Textarea
            variant={variant}
            value="custom value"
            minWidth="200px"
            maxWidth="300px"
          />
          <Font variant="h5">Invalid input</Font>
          <Textarea
            variant={variant}
            invalid
            value="custom value asda dd sadsasadsadsadsadsadsad sasad "
            minWidth="200px"
            maxWidth="200px"
          />
          <Font variant="h5">Disabled input</Font>
          <Textarea
            variant={variant}
            invalid
            disabled
            value="custom value asda dd sadsasadsadsadsadsadsad sasad "
            minWidth="200px"
            maxWidth="200px"
          />
          <Font variant="h5">Loading input</Font>
          <Textarea
            variant={variant}
            invalid
            loading
            value="custom value asda dd sadsasadsadsadsadsadsad sasad "
            minWidth="200px"
            maxWidth="200px"
          />
        </Box>
      ))}
    </Box>
  );
};

export const InputControl = InputTemplate.bind({});
InputControl.args = {};

export const TextareaControl = TextareaTemplate.bind({});
TextareaControl.args = {};
