import type { Story, Meta } from '@storybook/react';

import { Link } from './link';
import { FONT_VARIANTS } from '../font';

export default {
  component: Link,
  title: 'Link',
} as Meta;

const Template: Story = () => {
  return (
    <>
      {FONT_VARIANTS.map((variant) => (
        <div key={variant} style={{ margin: '8px 0' }}>
          <Link variant={variant}>
            <a href="/">{variant}</a>
          </Link>
        </div>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
