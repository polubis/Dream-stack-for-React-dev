import type { Story, Meta } from '@storybook/react';

import { Font } from './font';
import { FONT_MOTIVES, FONT_VARIANTS } from './consts';
import { Box } from '../box';

export default {
  component: Font,
  title: 'Font',
} as Meta;

const Template: Story = () => {
  return (
    <Box padding={[300, 300, 300, 300]} spacing={[200, 200, 200, 200]}>
      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={variant}>
            <Font variant={variant} children={variant} />
          </div>
        ))}
      </Box>

      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={'italic' + variant}>
            <Font italic variant={variant} children={variant} />
          </div>
        ))}
      </Box>

      <Box>
        {FONT_VARIANTS.map((variant) => (
          <div key={'bold' + variant}>
            <Font variant={variant} children="Some text" bold />
          </div>
        ))}
      </Box>

      <Box>
        {FONT_MOTIVES.map((motive) => (
          <div key={'motive' + motive}>
            <Font variant="b1" motive={motive} children={motive} />
          </div>
        ))}
      </Box>

      <Box maxWidth="80px">
        {FONT_MOTIVES.map((motive) => (
          <div key={'motive' + motive}>
            <Font variant="h3" trim motive={motive} children={motive} />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
