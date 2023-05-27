import type { Story, Meta } from '@storybook/react';

import { Footer } from './footer';
import { Font } from '../font';

export default {
  component: Footer,
  title: 'Footer',
} as Meta;

const Template: Story = () => {
  return (
    <Footer
      blocks={
        <>
          <Font variant="h5">First</Font>
          <Font variant="h5">Middle</Font>
          <Font variant="h5">Last</Font>
        </>
      }
      socials={<Font variant="b2">I</Font>}
      logo={<Font variant="b2">Logo</Font>}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
