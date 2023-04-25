import type { Theme, Themes, Tokens } from './defs';

// Check for reference: https://mui.com/joy-ui/customization/theme-colors/
const tokens: Tokens = {
  backdrop: {
    50: '#0000003d',
  },
  radius: {
    50: '4px',
  },
  z: {
    50: '1',
    100: '2',
    150: '3',
    200: '4',
    250: '5',
    300: '6',
    350: '7',
    400: '8',
    450: '9',
    500: '10',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  dark: {
    50: '#2D2D2D',
  },
  padding: {
    50: '4px',
    100: '8px',
    150: '12px',
    200: '16px',
    250: '20px',
    300: '24px',
    350: '28px',
    400: '32px',
    450: '36px',
    500: '40px',
  },
};

const light: Theme = {
  font: {
    color: tokens.common.black,
  },
  background: {
    body: tokens.common.white,
  },
  modal: {
    background: tokens.common.white,
    border: tokens.dark[50],
    backdrop: tokens.backdrop[50],
  },
};

const dark: Theme = {
  font: {
    color: tokens.common.white,
  },
  background: {
    body: tokens.common.black,
  },
  modal: {
    background: tokens.common.black,
    border: tokens.dark[50],
    backdrop: tokens.backdrop[50],
  },
};

const themes: Themes = {
  light,
  dark,
};

export { themes, tokens };
