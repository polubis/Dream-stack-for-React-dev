import type { Story, Meta } from '@storybook/react';
import type { FontProps } from './defs';

import { Font } from './font';
import { FONT_VARIANTS } from './consts';

export default {
  component: Font,
  title: 'Font',
} as Meta;

const Template: Story<FontProps> = (args) => {
  return (
    <>
      {FONT_VARIANTS.map((variant) => (
        <div key={variant} style={{ margin: '8px 0' }}>
          <Font {...args} variant={variant} children={variant} />
        </div>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
