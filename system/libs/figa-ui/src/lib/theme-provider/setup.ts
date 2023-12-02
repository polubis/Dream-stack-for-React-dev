import type { Themes } from './defs';
import { light } from './light-theme';
import { dark } from './dark-theme';
import { tokens } from './tokens';

// Check for reference: https://mui.com/joy-ui/customization/theme-colors/

const themes: Themes = {
  light,
  dark,
};

export { themes, tokens };
