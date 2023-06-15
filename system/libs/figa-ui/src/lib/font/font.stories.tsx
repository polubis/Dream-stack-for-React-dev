import type { Story, Meta } from '@storybook/react';
import type { FontProps } from './defs';

import { Font } from './font';
import { FONT_MOTIVES, FONT_VARIANTS } from './consts';
import { Box } from '../box';

export default {
  component: Font,
  title: 'Font',
} as Meta;

const Template: Story<FontProps> = (args) => {
  return (
    <Box orientation="row" spacing={[200, 200, 200, 200]}>
      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={variant} style={{ margin: '8px 0' }}>
            <Font {...args} variant={variant} children={variant} />
          </div>
        ))}
      </Box>

      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={'italic' + variant} style={{ margin: '8px 0' }}>
            <Font {...args} italic variant={variant} children={variant} />
          </div>
        ))}
      </Box>

      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={'bold' + variant} style={{ margin: '8px 0' }}>
            <Font {...args} variant={variant} children="Some text" bold />
          </div>
        ))}
      </Box>

      <Box>
        {FONT_MOTIVES.map((motive) => (
          <div key={'motive' + motive} style={{ margin: '8px 0' }}>
            <Font {...args} variant="b1" motive={motive} children={motive} />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
