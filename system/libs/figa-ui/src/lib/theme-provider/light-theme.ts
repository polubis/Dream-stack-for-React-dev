import type { Theme } from './defs';
import { tokens } from './tokens';

const light: Theme = {
  key: 'light',
  outline: {
    color: tokens.common.black,
  },
  scroll: {
    thumb: tokens.gray[600],
    track: tokens.gray[550],
    thumbHover: tokens.gray[650],
  },
  divider: {
    default: {
      bg: tokens.common.black,
    },
    primary: {
      bg: tokens.primary[50],
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
    ghost: {
      hoverBg: tokens.light[250],
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
  nav: {
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
    filled: {
      bg: tokens.gray[150],
      color: tokens.common.black,
      placeholderColor: tokens.gray[200],
      fxColor: tokens.common.black,
    },
    outlined: {
      borderColor: tokens.common.black,
      color: tokens.common.black,
      placeholderColor: tokens.gray[200],
      fxColor: tokens.common.black,
    },
    empty: {
      color: tokens.common.black,
      placeholderColor: tokens.gray[200],
      fxColor: tokens.common.black,
    },
    invalid: tokens.red[150],
  },
  placeholder: {
    filled: {
      bg: tokens.light[50],
    },
    outlined: {
      bg: tokens.common.white,
      borderColor: tokens.light[100],
    },
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
    bg: '#fafafa',
  },
  code: {
    bg: tokens.light[150],
    gutters: tokens.light[150],
    selectionBg: tokens.gray[400],
    foldPlaceholder: tokens.gray[400],
    tags: [
      {
        tag: 'angleBracket',
        color: '#ca3f77',
      },
      {
        tag: 'arithmeticOperator',
        color: '#000',
      },
      {
        tag: 'bitwiseOperator',
        color: '#000',
      },
      {
        tag: 'blockComment',
        color: '#7cac77',
      },
      {
        tag: 'bool',
        color: '#197ebd',
      },
      {
        tag: 'brace',
        color: '#000',
      },
      {
        tag: 'bracket',
        color: '#ca3f77',
      },
      {
        tag: 'className',
        color: '#007e6e',
      },
      {
        tag: 'comment',
        color: '#7cac77',
      },
      {
        tag: 'compareOperator',
        color: '#000',
      },
      {
        tag: 'controlKeyword',
        color: '#aa45cf',
      },
      {
        tag: 'definition',
        color: '#286190',
      },
      {
        tag: 'definitionKeyword',
        color: '#4b7bbf',
      },
      {
        tag: 'definitionOperator',
        color: '#000',
      },
      {
        tag: 'derefOperator',
        color: '#000',
      },
      {
        tag: 'function',
        color: '#98982f',
      },
      {
        tag: 'keyword',
        color: '#4b7bbf',
      },
      {
        tag: 'labelName',
        color: '#286190',
      },
      {
        tag: 'lineComment',
        color: '#7cac77',
      },
      {
        tag: 'literal',
        color: '#ca3f77',
      },
      {
        tag: 'logicOperator',
        color: '#000',
      },
      {
        tag: 'moduleKeyword',
        color: '#aa45cf',
      },
      {
        tag: 'name',
        color: '#286190',
      },
      {
        tag: 'null',
        color: '#197ebd',
      },
      {
        tag: 'number',
        color: '#c34d4d',
      },
      {
        tag: 'operatorKeyword',
        color: '#007e6e',
      },
      {
        tag: 'paren',
        color: '#ca3f77',
      },
      {
        tag: 'typeName',
        color: '#007e6e',
      },
    ],
  },
  codeBlock: {
    header: {
      bg: tokens.gray[400],
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
      bg: tokens.light[150],
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

export { light };
