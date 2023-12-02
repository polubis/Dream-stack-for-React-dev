import type { Theme } from './defs';
import { tokens } from './tokens';
import { tags as t } from '@lezer/highlight';

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
    tags: [
      // { tag: t.angleBracket, color: 'red' },
      // { tag: t.annotation, color: 'red' },
      { tag: t.arithmeticOperator, color: '#fff' },
      // { tag: t.atom, color: 'red' },
      // { tag: t.attributeName, color: 'red' },
      // { tag: t.attributeValue, color: 'red' },
      { tag: t.bitwiseOperator, color: '#fff' },
      { tag: t.blockComment, color: '#6A9955' },
      { tag: t.bool, color: '#569cd6' },
      { tag: t.brace, color: '#ffd70f' },
      { tag: t.bracket, color: '#da6bad' },
      // { tag: t.changed, color: 'red' },
      // { tag: t.character, color: 'red' },
      { tag: t.className, color: '#3abfb0' },
      // { tag: t.color, color: 'red' },
      { tag: t.comment, color: '#6A9955' },
      { tag: t.compareOperator, color: '#fff' },
      // { tag: t.constant(t.name), color: 'red' },
      // { tag: t.content, color: 'red' },
      // { tag: t.contentSeparator, color: 'red' },
      { tag: t.controlKeyword, color: '#eba0d9' },
      // { tag: t.controlOperator, color: 'red' },
      { tag: t.definition(t.name), color: '#4fc1ff' },
      { tag: t.definitionKeyword, color: '#3981c5' },
      { tag: t.definitionOperator, color: '#fff' },
      // { tag: t.deleted, color: 'red' },
      { tag: t.derefOperator, color: '#fff' },
      // { tag: t.docComment, color: 'red' },
      // { tag: t.docString, color: 'red' },
      // { tag: t.documentMeta, color: 'red' },
      // { tag: t.emphasis, color: 'red' },
      // { tag: t.escape, color: 'red' },
      // { tag: t.float, color: 'red' },
      { tag: t.function(t.name), color: '#dcdc9f' },
      // { tag: t.heading, color: 'red' },
      // { tag: t.heading1, color: 'red' },
      // { tag: t.heading2, color: 'red' },
      // { tag: t.heading3, color: 'red' },
      // { tag: t.heading4, color: 'red' },
      // { tag: t.heading5, color: 'red' },
      // { tag: t.heading6, color: 'red' },
      // { tag: t.inserted, color: 'red' },
      // { tag: t.integer, color: 'red' },
      // { tag: t.invalid, color: 'red' },
      { tag: t.keyword, color: '#3981c5' },
      { tag: t.labelName, color: '#4fc1ff' },
      { tag: t.lineComment, color: '#6A9955' },
      // { tag: t.link, color: 'red' },
      // { tag: t.list, color: 'red' },
      { tag: t.literal, color: '#ef8c59' },
      { tag: t.local(t.name), color: 'red' },
      { tag: t.logicOperator, color: '#fff' },
      // { tag: t.macroName, color: 'red' },
      // { tag: t.meta, color: 'red' },
      // { tag: t.modifier, color: 'red' },
      { tag: t.moduleKeyword, color: '#eba0d9' },
      // { tag: t.monospace, color: 'red' },
      { tag: t.name, color: '#4fc1ff' },
      // { tag: t.namespace, color: 'red' },
      { tag: t.null, color: '#569cd6' },
      { tag: t.number, color: '#accea8' },
      { tag: t.operator, color: 'red' },
      { tag: t.operatorKeyword, color: '#3abfb0' },
      { tag: t.paren, color: '#da6bad' },
      // { tag: t.processingInstruction, color: 'red' },
      // { tag: t.propertyName, color: 'red' },
      // { tag: t.punctuation, color: 'red' },
      // { tag: t.quote, color: 'red' },
      // { tag: t.regexp, color: 'red' },
      // { tag: t.self, color: 'red' },
      // { tag: t.separator, color: 'red' },
      // { tag: t.special(t.name), color: 'red' },
      // { tag: t.squareBracket, color: 'red' },
      // { tag: t.standard(t.name), color: 'red' },
      // { tag: t.strikethrough, color: 'red' },
      // { tag: t.string, color: 'red' },
      // { tag: t.strong, color: 'red' },
      // { tag: t.tagName, color: 'red' },
      { tag: t.typeName, color: '#3abfb0' },
      // { tag: t.typeOperator, color: 'red' },
      // { tag: t.unit, color: 'red' },
      // { tag: t.updateOperator, color: 'red' },
      // { tag: t.url, color: 'red' },
      // { tag: t.variableName, color: 'red' },
    ],
  },
  codeBlock: {
    header: {
      bg: '#050404',
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
      bg: '#050404',
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
