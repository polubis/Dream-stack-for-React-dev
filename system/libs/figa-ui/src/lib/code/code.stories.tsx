import type { Story, Meta } from '@storybook/react';
import type { CodeProps } from './defs';

import { Code } from './code';

export default {
  component: Code,
  title: 'Code',
} as Meta;

const Template: Story<CodeProps> = (props) => <Code {...props} />;

const children = `
const { mergeConfig } = require('vite');
const viteTsConfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  core: { builder: '@storybook/builder-vite' },
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  staticDirs: [{ from: '../../../assets', to: '/' }],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
    });
  },
};

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
`;

export const Default = Template.bind({});
Default.args = {
  children,
};

export const Readonly = Template.bind({});
Readonly.args = {
  children,
  readonly: true,
};
