import { render, screen } from '@testing-library/react';
import { Code } from './code';

describe('Code can be used when: ', () => {
  const children = `  const { mergeConfig } = require('vite');
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
  // and https://nx.dev/packages/storybook/documents/custom-builder-configs`;

  it('renders given code snippet', () => {
    render(<Code children={children} />);

    screen.getByText(
      /To customize your Vite configuration you can use the viteFinal field./
    );
  });

  it('[FRAGILE] assigns class names for code component', () => {
    const { container } = render(
      <Code children={children} className="my-class" />
    );

    expect(container.querySelector('.my-class')).toBeTruthy();
  });

  describe('during readonly mode', () => {
    it('[FRAGILE] disables selection', () => {
      const readonly = render(<Code children={children} readonly />);

      expect(readonly.container.querySelector('.cm-activeLine')).toBeFalsy();

      const editable = render(<Code children={children} />);

      expect(editable.container.querySelector('.cm-activeLine')).toBeTruthy();
    });
  });
});
