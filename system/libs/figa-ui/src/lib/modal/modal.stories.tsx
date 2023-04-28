import type { Story, Meta } from '@storybook/react';
import type { ModalProps } from './defs';

import { Modal } from './modal';
import { useState } from 'react';

export default {
  component: Modal,
  title: 'Modal',
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Click me to open :)</button>
      {open && <Modal {...args} onClose={() => setOpen(false)} />}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ width: '50px', height: '50px' }}>Content inside modal</div>
  ),
};
