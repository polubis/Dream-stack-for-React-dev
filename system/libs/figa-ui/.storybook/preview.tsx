import type { DecoratorFunction } from '@storybook/addons';
import type { Story } from '@storybook/react';
import { ThemeProvider } from '../src/lib/theme-provider';
import { Sandbox } from '../src/lib/sandbox';

const withGlobalStyleDecorator: DecoratorFunction<JSX.Element> = (
  StoryComponent: Story
) => (
  <ThemeProvider>
    <Sandbox>
      <StoryComponent />
    </Sandbox>
  </ThemeProvider>
);

const decorators = [withGlobalStyleDecorator];

export { decorators };
