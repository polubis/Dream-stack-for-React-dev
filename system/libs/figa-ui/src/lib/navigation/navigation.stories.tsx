import type { Story, Meta } from '@storybook/react';

import { Navigation } from './navigation';
import { Button } from '../button';
import { Link } from '../link';
import { Logo } from '../logo';

export default {
  component: Navigation,
  title: 'Navigation',
} as Meta;

const LINKS = [
  'Home page',
  'Content',
  'SEO',
  'About',
  'More',
  'Authors',
  'Blog',
  'Posts',
  'FAQ',
];

const Template: Story = () => {
  const baseProps = {
    logo: <Logo />,
    action: <Button>Click me</Button>,
  };

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '12px',
      }}
    >
      <Navigation
        {...baseProps}
        links={LINKS.map((link) => (
          <Link variant="h6">
            <a href="/">{link}</a>
          </Link>
        ))}
      />
      <Navigation
        {...baseProps}
        links={[...LINKS].slice(0, 4).map((link) => (
          <Link variant="h6">
            <a href="/">{link}</a>
          </Link>
        ))}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
