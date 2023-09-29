import type { Story, Meta } from '@storybook/react';

import { Input, Textarea } from './input';
import { Box } from '../box';
import { Font } from '../font';
import type { InputProps, TextareaProps } from './defs';
import { CloseIcon, EditIcon } from '../icon';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const InputTemplate: Story<InputProps> = (props) => {
  const elements = [
    <Input key={0} prefx={<Font variant="b3">+48</Font>} {...props} />,
    <Input key={1} suffx={<Font variant="b3">PL</Font>} {...props} />,
    <Input
      key={2}
      suffx={<Font variant="b3">PL</Font>}
      prefx={<Font variant="b3">+48</Font>}
      {...props}
    />,
    <Input
      key={3}
      loading
      suffx={<Font variant="b3">PL</Font>}
      prefx={<Font variant="b3">+48</Font>}
      {...props}
    />,
    <Input
      key={4}
      invalid
      suffx={<Font variant="b3">PL</Font>}
      prefx={<Font variant="b3">+48</Font>}
      {...props}
    />,
    <Input
      key={5}
      loading
      invalid
      suffx={<Font variant="b3">PL</Font>}
      prefx={<Font variant="b3">+48</Font>}
      {...props}
    />,
    <Input
      key={6}
      disabled
      loading
      invalid
      suffx={<Font variant="b3">PL</Font>}
      prefx={<Font variant="b3">+48</Font>}
      {...props}
    />,
    <Input key={7} disabled {...props} />,
    <Input
      key={8}
      disabled
      suffx={<Font variant="b3">PL</Font>}
      prefx={<Font variant="b3">+48</Font>}
      {...props}
    />,
    <Input key={9} loading {...props} />,
    <Input key={10} invalid {...props} />,
    <Input key={11} loading invalid {...props} />,
    <Input key={12} suffx={<CloseIcon />} prefx={<EditIcon />} {...props} />,
  ];

  return (
    <Box
      spacing={elements.map(() => 300)}
      maxWidth="280px"
      padding={[300, 300, 300, 300]}
    >
      {elements}
    </Box>
  );
};

const TextareaTemplate: Story<TextareaProps> = (props) => {
  const elements = [
    <Textarea key={0} {...props} placeholder="" />,
    <Textarea key={1} {...props} />,
    <Textarea key={2} value="custom value" {...props} />,
    <Textarea
      key={3}
      invalid
      value="custom value asda dd sadsasadsadsadsadsadsad sasad "
      {...props}
    />,
    <Textarea
      key={4}
      invalid
      disabled
      value="custom value asda dd sadsasadsadsadsadsadsad sasad "
      {...props}
    />,
    <Textarea
      key={5}
      invalid
      loading
      value="custom value asda dd sadsasadsadsadsadsadsad sasad "
      {...props}
    />,
  ];

  return (
    <Box
      maxWidth="280px"
      spacing={elements.map(() => 300)}
      padding={[300, 300, 300, 300]}
    >
      {elements}
    </Box>
  );
};

export const EmptyInput = InputTemplate.bind({});
EmptyInput.args = {
  variant: 'empty',
  placeholder: 'Type something...',
};

export const FilledInput = InputTemplate.bind({});
FilledInput.args = {
  variant: 'filled',
  placeholder: 'Type something...',
};

export const OutlinedInput = InputTemplate.bind({});
OutlinedInput.args = {
  variant: 'outlined',
  placeholder: 'Type something...',
};

export const TextareaEmpty = TextareaTemplate.bind({});
TextareaEmpty.args = {
  variant: 'empty',
  placeholder: 'Type something...',
};

export const TextareaFilled = TextareaTemplate.bind({});
TextareaFilled.args = {
  variant: 'filled',
  placeholder: 'Type something...',
};

export const TextareaOutlined = TextareaTemplate.bind({});
TextareaOutlined.args = {
  variant: 'outlined',
  placeholder: 'Type something...',
};
