import type { Story, Meta } from '@storybook/react';

import { Field } from './field';
import { Box } from '../box';
import { Input } from '../input';
import { Font } from '../font';

export default {
  component: Field,
  title: 'Field',
} as Meta;

const Template: Story = () => {
  return (
    <Box
      padding={[300, 300, 300, 300]}
      spacing={[100, 300, 100, 300, 100, 300, 100, 300, 100, 300]}
    >
      <Font variant="h5">Field without hint</Font>
      <Field>
        <Input placeholder="Type some value..." />
      </Field>
      <Font variant="h5">Field with hint</Font>
      <Field hint="Some description...">
        <Input placeholder="Type some value..." />
      </Field>
      <Font variant="h5">Field with error</Font>
      <Field hint="Some description..." error="Some error...">
        <Input placeholder="Type some value..." />
      </Field>
      <Font variant="h5">Field with error and label</Font>
      <Field
        maxWidth="300px"
        label="Example of label ads adda ssada dsadsa dsadsad asd sad saasdasdasdad "
        hint="Some description..."
        error="Some error..."
      >
        <Input placeholder="Type some value..." />
      </Field>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
