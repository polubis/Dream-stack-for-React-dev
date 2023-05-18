import type { DecoratorFunction } from '@storybook/addons';
import type { Story } from '@storybook/react';
import { ThemeProvider } from '../src/lib/theme-provider';

const withGlobalStyleDecorator: DecoratorFunction<JSX.Element> = (
  StoryComponent: Story
) => (
  <ThemeProvider>
    <StoryComponent />
  </ThemeProvider>
);

const decorators = [withGlobalStyleDecorator];

export { decorators };
