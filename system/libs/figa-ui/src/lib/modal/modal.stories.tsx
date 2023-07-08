import type { Story, Meta } from '@storybook/react';

import { Modal } from './modal';
import { Font } from '../font';
import type { ModalProps } from './defs';

export default {
  component: Modal,
  title: 'Modal',
} as Meta;

const Template: Story<ModalProps> = (props) => <Modal {...props} />;

export const Default = Template.bind({});
Default.args = {
  spacing: [200],
  children: [
    <Font key={0} variant="h5">
      Custom modal header
    </Font>,
    <Font key={1} variant="b2">
      Custom modal content
    </Font>,
  ],
};

export const Streched = Template.bind({});
Streched.args = {
  spacing: [200, 150],
  children: [
    <Font key={0} variant="h5">
      Custom modal header
    </Font>,
    <Font key={1} variant="b2">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </Font>,
    <Font key={2} variant="b2">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </Font>,
  ],
};
