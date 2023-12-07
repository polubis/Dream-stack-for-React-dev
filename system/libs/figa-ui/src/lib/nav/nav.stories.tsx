import type { Story, Meta } from '@storybook/react';

import { Nav, type NavProps } from '.';
import { Logo } from '../logo';
import { Button } from '../button';
import { TopNavItem } from '../top-nav-item';

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
          <TopNavItem>Sign In</TopNavItem>
          <TopNavItem>Register</TopNavItem>
        </>
      }
    >
      <a href="/test">
        <TopNavItem>Articles</TopNavItem>
      </a>
      <a href="/test">
        <TopNavItem>Articles</TopNavItem>
      </a>
      <a href="/test">
        <TopNavItem>Articles</TopNavItem>
      </a>
      <a href="/test">
        <TopNavItem>Articles</TopNavItem>
      </a>
      <a href="/test">
        <TopNavItem>Articles</TopNavItem>
      </a>
    </Nav>
  );
};

export const Default = Template.bind({});
Default.args = {};
