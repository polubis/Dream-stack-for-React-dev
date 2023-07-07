const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  staticDirs: [
    {
      from: '../../../assets',
      to: '/',
    },
  ],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {});
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/figa-ui/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: true,
  },
};

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
