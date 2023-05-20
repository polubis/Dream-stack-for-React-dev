import type { Spacing, Theme, Themes, Tokens } from './defs';

const spacing: Spacing = {
  25: '2px',
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
  550: '44px',
  600: '48px',
  650: '52px',
  700: '56px',
  750: '60px',
  800: '64px',
  850: '68px',
  900: '72px',
  950: '76px',
  1000: '80px',
};

// Check for reference: https://mui.com/joy-ui/customization/theme-colors/
const tokens: Tokens = {
  backdrop: {
    50: '#0000003d',
  },
  radius: {
    50: '4px',
    1000: '50%',
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
    100: '#0a0a0a',
  },
  light: {
    50: '#f9f9f9',
    100: '#e5e5e5',
  },
  gray: {
    0: '#fbfbfb',
    50: '#9d9d9d',
    100: '#8D8D8D',
    150: '#E9E9E9',
    200: '#949494',
    250: '#DADADA',
    300: '#3c3c3c',
  },
  blue: {
    200: '#69B6CE',
    600: '#354049',
  },
  purple: {
    50: '#bf63bc',
    100: '#ffdafe',
  },
  red: {
    50: '#ff0000',
  },
  spacing,
  primary: {
    50: '#FF7878',
    100: '#FFD6AD',
    150: '#C97550',
    200: '#ff966a',
    250: '#FBA81F',
  },
  secondary: {
    50: '#9FD1AA',
    100: '#D1FFDC',
    150: '#70A07B',
    200: '#ffa47d',
    250: '#00ff38',
  },
};

const light: Theme = {
  font: {
    color: tokens.common.black,
  },
  body: {
    bg: tokens.common.white,
  },
  modal: {
    bg: tokens.common.white,
    border: tokens.dark[50],
    backdrop: tokens.backdrop[50],
  },
  button: {
    filled: {
      primary: {
        color: tokens.common.black,
        bg: tokens.primary[50],
      },
    },
    outlined: {
      primary: {
        color: tokens.primary[50],
        bg: 'transparent',
        borderColor: tokens.primary[50],
      },
    },
  },
  select: {
    bg: tokens.gray[150],
    color: tokens.common.black,
    placeholderColor: tokens.gray[200],
    hoverBg: tokens.gray[250],
    optionSeparator: tokens.gray[200],
    optionActiveColor: tokens.secondary[150],
  },
  link: {
    default: {
      hoverColor: tokens.primary[50],
      color: tokens.common.black,
    },
    primary: {
      hoverColor: tokens.primary[50],
      color: tokens.primary[50],
    },
  },
  navigation: {
    bg: tokens.gray[0],
    borderColor: tokens.gray[50],
  },
  logo: {
    text: {
      first: tokens.purple[50],
      second: tokens.common.black,
      last: tokens.primary[200],
    },
    bg: {
      first: {
        from: tokens.red[50],
        to: tokens.primary[250],
      },
      second: {
        from: tokens.secondary[250],
        to: tokens.primary[250],
      },
      last: {
        from: tokens.blue[200],
        to: tokens.primary[250],
      },
    },
  },
  progressCircle: {
    bg: tokens.gray[150],
  },
  input: {
    bg: tokens.gray[150],
    color: tokens.common.black,
    placeholderColor: tokens.gray[200],
  },
  box: {
    bg: tokens.light[50],
    borderColor: tokens.light[100],
  },
};

const dark: Theme = {
  font: {
    color: tokens.common.white,
  },
  body: {
    bg: tokens.common.black,
  },
  modal: {
    bg: tokens.common.black,
    border: tokens.dark[50],
    backdrop: tokens.backdrop[50],
  },
  button: {
    filled: {
      primary: {
        color: tokens.common.black,
        bg: tokens.primary[50],
      },
    },
    outlined: {
      primary: {
        color: tokens.primary[50],
        bg: 'transparent',
        borderColor: tokens.primary[50],
      },
    },
  },
  select: {
    bg: tokens.dark[50],
    color: tokens.common.white,
    placeholderColor: tokens.gray[50],
    hoverBg: tokens.gray[100],
    optionSeparator: tokens.gray[100],
    optionActiveColor: tokens.secondary[50],
  },
  link: {
    default: {
      hoverColor: tokens.primary[50],
      color: tokens.common.white,
    },
    primary: {
      hoverColor: tokens.primary[100],
      color: tokens.primary[100],
    },
  },
  navigation: {
    bg: tokens.dark[100],
    borderColor: tokens.gray[300],
  },
  logo: {
    text: {
      first: tokens.purple[100],
      second: tokens.common.white,
      last: tokens.secondary[200],
    },
    bg: {
      first: {
        from: tokens.red[50],
        to: tokens.primary[250],
      },
      second: {
        from: tokens.secondary[250],
        to: tokens.primary[250],
      },
      last: {
        from: tokens.blue[200],
        to: tokens.primary[250],
      },
    },
  },
  progressCircle: {
    bg: tokens.dark[50],
  },
  input: {
    bg: tokens.dark[50],
    color: tokens.common.white,
    placeholderColor: tokens.gray[50],
  },
  box: {
    bg: tokens.gray[300],
    borderColor: tokens.gray[300],
  },
};

const themes: Themes = {
  light,
  dark,
};

export { themes, tokens };
