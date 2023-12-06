import type { Story, Meta } from '@storybook/react';

import { Nav, type NavProps } from '.';
import { Logo } from '../logo';
import { Button } from '../button';

export default {
  component: Nav,
  title: 'Nav',
} as Meta;

const Template: Story<NavProps> = () => {
  return (
    <Nav
      logo={<Logo />}
      actions={
        <>
          <Button size={2}>Register</Button>
          <Button size={2}>Sign In</Button>
        </>
      }
    >
      <a href="/test">Articles</a>
      <a href="/">Authors</a>
      <a href="/">Creator</a>
      <a href="/">Support</a>
      <a href="/">Admin</a>
      <a href="/">Yours</a>
    </Nav>
  );
};

export const Default = Template.bind({});
Default.args = {};
