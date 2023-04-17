import type { Theme, Themes, Tokens } from './defs';

// Check for reference: https://mui.com/joy-ui/customization/theme-colors/
const tokens: Tokens = {
  common: {
    black: '#000000',
    white: '#ffffff',
  },
};

const light: Theme = {
  font: {
    color: tokens.common.black,
  },
  background: {
    body: tokens.common.white,
  },
};

const dark: Theme = {
  font: {
    color: tokens.common.white,
  },
  background: {
    body: tokens.common.black,
  },
};

const themes: Themes = {
  light,
  dark,
};

export { themes };
