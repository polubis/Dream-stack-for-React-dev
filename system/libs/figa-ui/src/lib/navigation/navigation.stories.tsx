import type { Story, Meta } from '@storybook/react';

import { Navigation } from './navigation';
import { Button } from '../button';
import { Link } from '../link';
import { Logo } from '../logo';
import { Box } from '../box';
import { Font } from '../font';

export default {
  component: Navigation,
  title: 'Navigation',
} as Meta;

const LINKS = [
  'Home page really wide really',
  'Content',
  'SEO',
  'About',
  'More',
  'Authors',
  'Blog',
  'Posts',
  'FAQ',
  'Others',
  'More',
  'Etc',
  'Any',
  'Custom',
  'Different',
];

const Template: Story = () => {
  const baseProps = {
    logo: <Logo />,
    action: <Button size={2}>Click me</Button>,
  };

  return (
    <Box spacing={[200, 0, 0]} padding={[300, 300, 300, 300]}>
      <Font variant="h5">For desktop</Font>
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
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
