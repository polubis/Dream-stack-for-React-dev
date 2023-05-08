import type { Story, Meta } from '@storybook/react';
import type { CodeProps } from './defs';

import { Code } from './code';

export default {
  component: Code,
  title: 'Code',
} as Meta;

const Template: Story<CodeProps> = (props) => <Code {...props} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  children: `<Prelude>
  <M>
    When you compare the documentation and code written by developers, you can
    often find a completely different use for certain things.
  </M>
  <M>
    Technology is evolving and it's really problematic to handle all use cases -
    especially when you are writing libs/frameworks.
  </M>
  <M>
    A typical example of that is useRef() hook which sometimes is used by a
    community in a different way than described in the docs.
  </M>
  <M>Yup, that's right. That hook has more than one use case.</M>
</Prelude>`,
};
