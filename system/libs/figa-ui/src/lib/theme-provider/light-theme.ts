import type { Theme } from './defs';
import { tokens } from './tokens';
import { tags as t } from '@lezer/highlight';

const light: Theme = {
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
    bg: tokens.common.white,
    borderColor: tokens.gray[50],
  },
  code: {
    tags: [
      // { tag: t.angleBracket, color: 'red' },
      // { tag: t.annotation, color: 'red' },
      { tag: t.arithmeticOperator, color: '#f0f0f0' },
      // { tag: t.atom, color: 'red' },
      // { tag: t.attributeName, color: 'red' },
      // { tag: t.attributeValue, color: 'red' },
      { tag: t.bitwiseOperator, color: '#f0f0f0' },
      { tag: t.blockComment, color: '#b3cc99' },
      { tag: t.bool, color: '#99c2ff' },
      { tag: t.brace, color: '#ffe066' },
      { tag: t.bracket, color: '#e599c3' },
      // { tag: t.changed, color: 'red' },
      // { tag: t.character, color: 'red' },
      { tag: t.className, color: '#99e6e6' },
      // { tag: t.color, color: 'red' },
      { tag: t.comment, color: '#b3cc99' },
      { tag: t.compareOperator, color: '#f0f0f0' },
      // { tag: t.constant(t.name), color: 'red' },
      // { tag: t.content, color: 'red' },
      // { tag: t.contentSeparator, color: 'red' },
      { tag: t.controlKeyword, color: '#ffb3e6' },
      // { tag: t.controlOperator, color: 'red' },
      { tag: t.definition(t.name), color: '#80c7ff' },
      { tag: t.definitionKeyword, color: '#668cc5' },
      { tag: t.definitionOperator, color: '#f0f0f0' },
      // { tag: t.deleted, color: 'red' },
      { tag: t.derefOperator, color: '#f0f0f0' },
      // { tag: t.docComment, color: 'red' },
      // { tag: t.docString, color: 'red' },
      // { tag: t.documentMeta, color: 'red' },
      // { tag: t.emphasis, color: 'red' },
      // { tag: t.escape, color: 'red' },
      // { tag: t.float, color: 'red' },
      { tag: t.function(t.name), color: '#d9d9b0' },
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
      { tag: t.keyword, color: '#668cc5' },
      { tag: t.labelName, color: '#80c7ff' },
      { tag: t.lineComment, color: '#b3cc99' },
      // { tag: t.link, color: 'red' },
      // { tag: t.list, color: 'red' },
      { tag: t.literal, color: '#ff9966' },
      { tag: t.local(t.name), color: 'red' },
      { tag: t.logicOperator, color: '#f0f0f0' },
      // { tag: t.macroName, color: 'red' },
      // { tag: t.meta, color: 'red' },
      // { tag: t.modifier, color: 'red' },
      { tag: t.moduleKeyword, color: '#ffb3e6' },
      // { tag: t.monospace, color: 'red' },
      { tag: t.name, color: '#80c7ff' },
      // { tag: t.namespace, color: 'red' },
      { tag: t.null, color: '#99c2ff' },
      { tag: t.number, color: '#b3d9b3' },
      { tag: t.operator, color: 'red' },
      { tag: t.operatorKeyword, color: '#99e6e6' },
      { tag: t.paren, color: '#e599c3' },
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
      { tag: t.typeName, color: '#99e6e6' },
      // { tag: t.typeOperator, color: 'red' },
      // { tag: t.unit, color: 'red' },
      // { tag: t.updateOperator, color: 'red' },
      // { tag: t.url, color: 'red' },
      // { tag: t.variableName, color: 'red' },
    ],
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

export { light };
