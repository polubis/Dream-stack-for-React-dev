import type { Story, Meta } from '@storybook/react';

import { Link } from './link';
import { FONT_VARIANTS } from '../font';
import { Box } from '../box';

export default {
  component: Link,
  title: 'Link',
} as Meta;

const Template: Story = () => {
  return (
    <Box orientation="row" spacing={[200, 200, 200]}>
      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={variant} style={{ margin: '8px 0' }}>
            <Link variant={variant}>
              <a href="/">{variant}</a>
            </Link>
          </div>
        ))}
      </Box>
      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={variant} style={{ margin: '8px 0' }}>
            <Link motive="primary" variant={variant} italic>
              <a href="/">{variant}</a>
            </Link>
          </div>
        ))}
      </Box>
      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={variant} style={{ margin: '8px 0' }}>
            <Link motive="primary" variant={variant} bold>
              <a href="/">{variant}</a>
            </Link>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
