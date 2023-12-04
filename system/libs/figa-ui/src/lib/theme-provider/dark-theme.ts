import type { Theme } from './defs';
import { tokens } from './tokens';

const dark: Theme = {
  key: 'dark',
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
  divider: {
    default: {
      bg: tokens.common.white,
    },
    primary: {
      bg: tokens.primary[100],
    },
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
    ghost: {
      hoverBg: tokens.dark[250],
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
  nav: {
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
      fxColor: tokens.common.white,
    },
    outlined: {
      borderColor: tokens.common.white,
      color: tokens.common.white,
      placeholderColor: tokens.gray[50],
      fxColor: tokens.common.white,
    },
    empty: {
      color: tokens.common.white,
      placeholderColor: tokens.gray[50],
      fxColor: tokens.common.white,
    },
    invalid: tokens.red[150],
  },
  placeholder: {
    filled: {
      bg: tokens.gray[300],
    },
    outlined: {
      bg: tokens.common.black,
      borderColor: tokens.gray[300],
    },
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
  code: {
    bg: tokens.dark[150],
    gutters: tokens.dark[150],
    selectionBg: '#4d4d4d',
    foldPlaceholder: '#4d4d4d',
    tags: [
      { tag: 'angleBracket', color: '#da6bad' },
      { tag: 'arithmeticOperator', color: '#fff' },
      { tag: 'bitwiseOperator', color: '#fff' },
      { tag: 'blockComment', color: '#6A9955' },
      { tag: 'bool', color: '#569cd6' },
      { tag: 'brace', color: '#ffd70f' },
      { tag: 'bracket', color: '#da6bad' },
      { tag: 'className', color: '#3abfb0' },
      { tag: 'comment', color: '#6A9955' },
      { tag: 'compareOperator', color: '#fff' },
      { tag: 'controlKeyword', color: '#eba0d9' },
      { tag: 'definition', color: '#4fc1ff' },
      { tag: 'definitionKeyword', color: '#3981c5' },
      { tag: 'definitionOperator', color: '#fff' },
      { tag: 'derefOperator', color: '#fff' },
      { tag: 'function', color: '#dcdc9f' },
      { tag: 'keyword', color: '#3981c5' },
      { tag: 'labelName', color: '#4fc1ff' },
      { tag: 'lineComment', color: '#6A9955' },
      { tag: 'literal', color: '#ef8c59' },
      { tag: 'logicOperator', color: '#fff' },
      { tag: 'moduleKeyword', color: '#eba0d9' },
      { tag: 'name', color: '#4fc1ff' },
      { tag: 'null', color: '#569cd6' },
      { tag: 'number', color: '#accea8' },
      { tag: 'operatorKeyword', color: '#3abfb0' },
      { tag: 'paren', color: '#da6bad' },
      { tag: 'typeName', color: '#3abfb0' },
    ],
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

export { dark };
