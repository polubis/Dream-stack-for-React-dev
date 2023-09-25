import type { Spacing, Theme, Themes, Tokens } from './defs';

const spacing: Spacing = {
  0: '0',
  25: '2px',
  50: '4px',
  75: '6px',
  100: '8px',
  125: '10px',
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
  1250: '100px',
  1500: '140px',
  1750: '160px',
  2000: '180px',
  3000: '270px',
  4000: '360px',
};

// Check for reference: https://mui.com/joy-ui/customization/theme-colors/
const tokens: Tokens = {
  shadow: {
    50: '0 3px 4px rgba(0, 0, 0, .14)',
  },
  width: {
    50: '1080px',
  },
  backdrop: {
    50: '#0000003d',
    100: '#00000073',
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
    150: '#292929',
    200: 'rgba(0,0,0,.90)',
  },
  light: {
    50: '#f9f9f9',
    100: '#e5e5e5',
    150: '#f3f3f3',
    200: 'rgba(255,255,255,.90)',
  },
  gray: {
    0: '#fbfbfb',
    50: '#9d9d9d',
    100: '#8D8D8D',
    150: '#E9E9E9',
    200: '#949494',
    250: '#DADADA',
    300: '#3c3c3c',
    350: '#565656',
    400: '#dfdfdf',
    450: '#272727',
    500: '#212121',
    550: '#f1f1f1',
    600: '#888',
    650: '#555',
  },
  green: {
    50: '#b2d9ba',
    100: '#d7f2e6',
    150: '#84e798',
    200: '#54a17f',
    250: '#348863',
  },
  blue: {
    200: '#69B6CE',
    600: '#354049',
    650: '#79C1F3',
  },
  purple: {
    50: '#bf63bc',
    100: '#ffdafe',
  },
  yellow: {
    50: '#FFD200',
    100: '#a8922c',
  },
  red: {
    50: '#ff0000',
    100: '#cc8787',
    150: '#e27373',
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
  outline: {
    color: tokens.common.black,
  },
  scroll: {
    thumb: tokens.gray[600],
    track: tokens.gray[550],
    thumbHover: tokens.gray[650],
  },
  checkbox: {
    borderColor: tokens.common.white,
    checked: {
      bg: tokens.primary[50],
      borderColor: tokens.primary[50],
      color: tokens.common.white,
    },
  },
  radio: {
    borderColor: tokens.common.black,
    active: {
      bg: tokens.green[200],
      borderColor: tokens.green[200],
    },
  },
  switch: {
    bg: tokens.gray[200],
    color: tokens.common.white,
    active: {
      bg: tokens.green[200],
    },
  },
  tabs: {
    filled: {
      bg: tokens.gray[150],
      active: {
        borderColor: tokens.green[200],
      },
    },
  },
  chips: {
    color: tokens.common.black,
    borderColor: tokens.common.black,
    active: {
      color: tokens.green[250],
      borderColor: tokens.green[250],
    },
  },
  badge: {
    outlined: {
      primary: {
        color: tokens.primary[50],
        borderColor: tokens.primary[50],
      },
      secondary: {
        color: tokens.primary[150],
        borderColor: tokens.primary[150],
      },
      ok: {
        color: tokens.green[200],
        borderColor: tokens.green[200],
      },
      casual: {
        color: tokens.common.black,
        borderColor: tokens.common.black,
      },
    },
    filled: {
      primary: {
        color: tokens.common.black,
        bg: tokens.primary[50],
      },
      secondary: {
        color: tokens.common.black,
        bg: tokens.primary[100],
      },
      ok: {
        color: tokens.common.black,
        bg: tokens.green[50],
      },
      casual: {
        color: tokens.common.black,
        bg: tokens.gray[150],
      },
    },
  },
  thumbnail: {
    bg: tokens.backdrop[100],
    color: tokens.common.white,
  },
  filePicker: {
    outline: {
      color: tokens.primary[50],
    },
    invalid: {
      color: tokens.red[150],
      outline: tokens.red[150],
    },
  },
  field: {
    invalid: {
      color: tokens.red[100],
    },
    hint: {
      color: tokens.common.black,
    },
  },
  font: {
    default: {
      color: tokens.common.black,
    },
    primary: {
      color: tokens.primary[50],
    },
  },
  body: {
    bg: tokens.common.white,
  },
  alert: {
    filled: {
      info: {
        bg: tokens.gray[150],
        color: tokens.common.black,
      },
      ok: {
        bg: tokens.green[150],
        color: tokens.common.black,
      },
      error: {
        bg: tokens.red[50],
        color: tokens.common.white,
      },
      warn: {
        bg: tokens.yellow[50],
        color: tokens.common.black,
      },
    },
    outlined: {
      info: {
        color: tokens.common.black,
      },
      ok: {
        color: tokens.green[200],
      },
      error: {
        color: tokens.red[100],
      },
      warn: {
        color: tokens.yellow[100],
      },
    },
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
        outlineColor: tokens.common.black,
      },
      secondary: {
        color: tokens.common.black,
        bg: tokens.primary[100],
        outlineColor: tokens.common.black,
      },
      tertiary: {
        color: tokens.common.white,
        bg: tokens.common.black,
        outlineColor: tokens.common.white,
      },
    },
    outlined: {
      primary: {
        color: tokens.primary[50],
        bg: 'transparent',
        borderColor: tokens.primary[50],
        outlineColor: tokens.common.black,
      },
      secondary: {
        color: tokens.primary[150],
        bg: 'transparent',
        borderColor: tokens.primary[150],
        outlineColor: tokens.common.black,
      },
      tertiary: {
        color: tokens.common.black,
        bg: 'transparent',
        borderColor: tokens.common.black,
        outlineColor: tokens.common.white,
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
  navigation: {
    bg: tokens.gray[0],
    borderColor: tokens.gray[50],
    bgWithOpacity: tokens.light[200],
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
    filled: {
      bg: tokens.gray[150],
      color: tokens.common.black,
      placeholderColor: tokens.gray[200],
    },
    outlined: {
      borderColor: tokens.common.black,
      color: tokens.common.black,
      placeholderColor: tokens.gray[200],
    },
    empty: {
      color: tokens.common.black,
      placeholderColor: tokens.gray[200],
    },
    invalid: tokens.red[150],
  },
  box: {
    filled: {
      bg: tokens.light[50],
    },
    outlined: {
      bg: tokens.common.white,
      borderColor: tokens.light[100],
    },
  },
  footer: {
    bg: tokens.common.white,
    borderColor: tokens.gray[50],
  },
  codeBlock: {
    header: {
      bg: tokens.light[150],
      dots: {
        first: {
          bg: tokens.green[50],
        },
        second: {
          bg: tokens.yellow[50],
        },
        third: {
          bg: tokens.blue[650],
        },
      },
    },
    content: {
      bg: tokens.gray[400],
    },
  },
  list: {
    marker: {
      bg: tokens.primary[50],
    },
  },
  blockquote: {
    bg: tokens.light[50],
    borderColor: tokens.light[100],
  },
  loader: {
    primary: tokens.common.black,
    secondary: tokens.primary[50],
  },
  avatars: {
    restCounter: {
      bg: tokens.primary[50],
      color: tokens.common.black,
    },
  },
  creatorLayout: {
    bg: tokens.common.white,
    borderColor: tokens.light[100],
  },
};

const dark: Theme = {
  outline: {
    color: tokens.common.white,
  },
  switch: {
    bg: tokens.gray[50],
    color: tokens.common.white,
    active: {
      bg: tokens.green[200],
    },
  },
  scroll: {
    thumb: tokens.gray[600],
    track: tokens.gray[550],
    thumbHover: tokens.gray[650],
  },
  radio: {
    borderColor: tokens.common.white,
    active: {
      bg: tokens.green[200],
      borderColor: tokens.green[200],
    },
  },
  checkbox: {
    borderColor: tokens.common.white,
    checked: {
      bg: tokens.primary[50],
      borderColor: tokens.primary[50],
      color: tokens.common.white,
    },
  },
  tabs: {
    filled: {
      bg: tokens.gray[500],
      active: {
        borderColor: tokens.green[50],
      },
    },
  },
  chips: {
    color: tokens.common.white,
    borderColor: tokens.common.white,
    active: {
      color: tokens.green[50],
      borderColor: tokens.green[50],
    },
  },
  badge: {
    outlined: {
      primary: {
        color: tokens.primary[50],
        borderColor: tokens.primary[50],
      },
      secondary: {
        color: tokens.primary[100],
        borderColor: tokens.primary[100],
      },
      ok: {
        color: tokens.green[100],
        borderColor: tokens.green[100],
      },
      casual: {
        color: tokens.gray[150],
        borderColor: tokens.gray[150],
      },
    },
    filled: {
      primary: {
        color: tokens.common.black,
        bg: tokens.primary[50],
      },
      secondary: {
        color: tokens.common.black,
        bg: tokens.primary[100],
      },
      ok: {
        color: tokens.common.black,
        bg: tokens.green[100],
      },
      casual: {
        color: tokens.common.black,
        bg: tokens.gray[150],
      },
    },
  },
  thumbnail: {
    bg: tokens.backdrop[100],
    color: tokens.common.white,
  },
  filePicker: {
    outline: {
      color: tokens.primary[50],
    },
    invalid: {
      color: tokens.red[150],
      outline: tokens.red[150],
    },
  },
  field: {
    invalid: {
      color: tokens.red[100],
    },
    hint: {
      color: tokens.common.white,
    },
  },
  font: {
    default: {
      color: tokens.common.white,
    },
    primary: {
      color: tokens.primary[100],
    },
  },
  body: {
    bg: tokens.common.black,
  },
  alert: {
    filled: {
      info: {
        bg: tokens.gray[150],
        color: tokens.common.black,
      },
      ok: {
        bg: tokens.green[150],
        color: tokens.common.black,
      },
      error: {
        bg: tokens.red[50],
        color: tokens.common.white,
      },
      warn: {
        bg: tokens.yellow[50],
        color: tokens.common.black,
      },
    },
    outlined: {
      info: {
        color: tokens.common.white,
      },
      ok: {
        color: tokens.green[150],
      },
      error: {
        color: tokens.red[150],
      },
      warn: {
        color: tokens.yellow[50],
      },
    },
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
        outlineColor: tokens.common.white,
      },
      secondary: {
        color: tokens.common.black,
        bg: tokens.primary[100],
        outlineColor: tokens.common.white,
      },
      tertiary: {
        color: tokens.common.black,
        bg: tokens.common.white,
        outlineColor: tokens.common.white,
      },
    },
    outlined: {
      primary: {
        color: tokens.primary[50],
        bg: 'transparent',
        borderColor: tokens.primary[50],
        outlineColor: tokens.common.white,
      },
      secondary: {
        color: tokens.primary[100],
        bg: 'transparent',
        borderColor: tokens.primary[100],
        outlineColor: tokens.common.white,
      },
      tertiary: {
        color: tokens.common.white,
        bg: 'transparent',
        borderColor: tokens.common.white,
        outlineColor: tokens.common.white,
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
  navigation: {
    bg: tokens.dark[100],
    borderColor: tokens.gray[300],
    bgWithOpacity: tokens.dark[200],
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
    filled: {
      bg: tokens.dark[50],
      color: tokens.common.white,
      placeholderColor: tokens.gray[50],
    },
    outlined: {
      borderColor: tokens.common.white,
      color: tokens.common.white,
      placeholderColor: tokens.gray[50],
    },
    empty: {
      color: tokens.common.white,
      placeholderColor: tokens.gray[50],
    },
    invalid: tokens.red[150],
  },
  box: {
    filled: {
      bg: tokens.gray[300],
    },
    outlined: {
      bg: tokens.common.black,
      borderColor: tokens.gray[300],
    },
  },
  footer: {
    bg: tokens.common.black,
    borderColor: tokens.gray[300],
  },
  codeBlock: {
    header: {
      bg: tokens.gray[350],
      dots: {
        first: {
          bg: tokens.green[50],
        },
        second: {
          bg: tokens.yellow[50],
        },
        third: {
          bg: tokens.blue[650],
        },
      },
    },
    content: {
      bg: tokens.dark[150],
    },
  },
  list: {
    marker: {
      bg: tokens.primary[50],
    },
  },
  blockquote: {
    bg: tokens.gray[450],
    borderColor: tokens.gray[300],
  },
  loader: {
    primary: tokens.common.white,
    secondary: tokens.primary[50],
  },
  avatars: {
    restCounter: {
      bg: tokens.primary[50],
      color: tokens.common.black,
    },
  },
  creatorLayout: {
    borderColor: tokens.gray[300],
    bg: tokens.common.black,
  },
};

const themes: Themes = {
  light,
  dark,
};

export { themes, tokens };
