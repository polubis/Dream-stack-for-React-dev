import type { Story, Meta } from '@storybook/react';

import { Nav, type NavProps } from '.';
import { Logo } from '../logo';
import { NavBar } from '../nav-bar';
import { Button } from '../button';

export default {
  component: Nav,
  title: 'Nav',
} as Meta;

const Template: Story<NavProps> = () => {
  return (
    <NavBar sticky>
      <Nav
        logo={<Logo />}
        actions={
          <>
            <Button size={2}>Register</Button>
            <Button size={2}>Sign In</Button>
          </>
        }
      >
        <Nav.Link variant="h6">
          <a href="/test">Articles</a>
        </Nav.Link>
        <Nav.Link variant="h6">
          <a href="/">Authors</a>
        </Nav.Link>
        <Nav.Link variant="h6">
          <a href="/">Creator</a>
        </Nav.Link>
        <Nav.Link variant="h6">
          <a href="/">Support</a>
        </Nav.Link>
        <Nav.Divider />
        <Nav.Link variant="h6">
          <a href="/">Admin</a>
        </Nav.Link>
        <Nav.Link variant="h6">
          <a href="/">Yours</a>
        </Nav.Link>
      </Nav>
    </NavBar>
  );
};

export const Default = Template.bind({});
Default.args = {};
