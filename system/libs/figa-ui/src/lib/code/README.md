```ts
import { EditorView } from '@codemirror/view';
import type { Extension } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { tokens } from '../theme-provider';

const CODE_LINE_HEIGHT = 22;

const dark = {
  editor: EditorView.theme({
    '&': {
      backgroundColor: '#050404',
    },

    // '.cm-content': {
    //   caretColor: 'red',
    //   padding: 0,
    // },

    '.cm-scroller': {
      fontSize: '1.6rem',
    },

    // '.selectionLayer': {
    //   backgroundColor: 'red',
    // },

    '.cm-cursor, .cm-dropCursor': { borderLeftColor: '#fff' },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: '#404040' },

    // '.cm-panels': { backgroundColor: darkBackground, color: fg1 },
    // '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
    // '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

    // '.cm-searchMatch': {
    //   backgroundColor: bg0,
    //   color: yellow,
    //   outline: `1px solid ${bg3}`,
    // },
    // '.cm-searchMatch.cm-searchMatch-selected': {
    //   backgroundColor: bg3,
    // },

    // '.cm-activeLine': { backgroundColor: highlightBackground },
    // '.cm-selectionMatch': { backgroundColor: bg3 },

    // '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
    //   outline: `1px solid ${bg3}`,
    //   fontStyle: 'bold',
    // },

    // '&.cm-focused .cm-matchingBracket': {
    //   backgroundColor: bg3,
    // },

    '*[title="Fold line"], *[title="Unfold line"]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: tokens.spacing[300],
    },

    '.cm-gutters': {
      backgroundColor: '#050404',
      color: '#fff',
      border: 'none',
    },

    '.cm-activeLineGutter': {
      backgroundColor: '#4d4d4d',
    },

    // '.cm-foldPlaceholder': {
    //   backgroundColor: 'transparent',
    //   border: 'none',
    //   color: '#ddd',
    // },

    // '.cm-tooltip': {
    //   border: 'none',
    //   backgroundColor: tooltipBackground,
    // },
    // '.cm-tooltip .cm-tooltip-arrow:before': {
    //   borderTopColor: 'transparent',
    //   borderBottomColor: 'transparent',
    // },
    // '.cm-tooltip .cm-tooltip-arrow:after': {
    //   borderTopColor: tooltipBackground,
    //   borderBottomColor: tooltipBackground,
    // },
    // '.cm-tooltip-autocomplete': {
    //   '& > ul > li[aria-selected]': {
    //     backgroundColor: highlightBackground,
    //     color: fg2,
    //   },
    // },
  }),
  content: HighlightStyle.define([
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
  ]),
};

const DEFAULT_THEME: Extension = [
  dark.editor,
  syntaxHighlighting(dark.content),
];

export { CODE_LINE_HEIGHT, DEFAULT_THEME };
```



```ts
 { tag: 'angleBracket', color: 'red' },
      // { tag: 'annotation', color: 'red' },
      { tag: 'arithmeticOperator', color: '#fff' },
      { tag: 'atom', color: 'red' },
      // { tag: 'attributeName', color: 'red' },
      // { tag: 'attributeValue', color: 'red' },
      // { tag: 'bitwiseOperator', color: '#fff' },
      { tag: 'blockComment', color: '#6A9955' },
      // { tag: 'bool', color: '#569cd6' },
      // { tag: 'brace', color: '#ffd70f' },
      // { tag: 'bracket', color: '#da6bad' },
      // { tag: 'changed', color: 'red' },
      // { tag: 'character', color: 'red' },
      // { tag: 'className', color: '#3abfb0' },
      // { tag: 'color', color: 'red' },
      // { tag: 'comment', color: '#6A9955' },
      // { tag: 'compareOperator', color: '#fff' },
      // { tag: 'constant', color: 'red' }, // Assuming t.constant(t.name) corresponds to a constant name
      // { tag: 'content', color: 'red' },
      // { tag: 'contentSeparator', color: 'red' },
      // { tag: 'controlKeyword', color: '#eba0d9' },
      // { tag: 'controlOperator', color: 'red' },
      // { tag: 'definition', color: '#4fc1ff' }, // Assuming t.definition(t.name) corresponds to a definition name
      // { tag: 'definitionKeyword', color: '#3981c5' },
      // { tag: 'definitionOperator', color: '#fff' },
      // { tag: 'deleted', color: 'red' },
      // { tag: 'derefOperator', color: '#fff' },
      // { tag: 'docComment', color: 'red' },
      // { tag: 'docString', color: 'red' },
      // { tag: 'documentMeta', color: 'red' },
      // { tag: 'emphasis', color: 'red' },
      // { tag: 'escape', color: 'red' },
      // { tag: 'float', color: 'red' },
      // { tag: 'function', color: '#dcdc9f' }, // Assuming t.function(t.name) corresponds to a function name
      // { tag: 'heading', color: 'red' },
      // { tag: 'heading1', color: 'red' },
      // { tag: 'heading2', color: 'red' },
      // { tag: 'heading3', color: 'red' },
      // { tag: 'heading4', color: 'red' },
      // { tag: 'heading5', color: 'red' },
      // { tag: 'heading6', color: 'red' },
      // { tag: 'inserted', color: 'red' },
      // { tag: 'integer', color: 'red' },
      // { tag: 'invalid', color: 'red' },
      // { tag: 'keyword', color: '#3981c5' },
      // { tag: 'labelName', color: '#4fc1ff' },
      // { tag: 'lineComment', color: '#6A9955' },
      // { tag: 'link', color: 'red' },
      // { tag: 'list', color: 'red' },
      // { tag: 'literal', color: '#ef8c59' },
      // { tag: 'local', color: 'red' }, // Assuming t.local(t.name) corresponds to a local variable name
      // { tag: 'logicOperator', color: '#fff' },
      // { tag: 'macroName', color: 'red' },
      // { tag: 'meta', color: 'red' },
      // { tag: 'modifier', color: 'red' },
      // { tag: 'moduleKeyword', color: '#eba0d9' },
      // { tag: 'monospace', color: 'red' },
      // { tag: 'name', color: '#4fc1ff' },
      // { tag: 'namespace', color: 'red' },
      // { tag: 'null', color: '#569cd6' },
      // { tag: 'number', color: '#accea8' },
      // { tag: 'operator', color: 'red' },
      // { tag: 'operatorKeyword', color: '#3abfb0' },
      // { tag: 'paren', color: '#da6bad' },
      // { tag: 'processingInstruction', color: 'red' },
      // { tag: 'propertyName', color: 'red' },
      // { tag: 'punctuation', color: 'red' },
      // { tag: 'quote', color: 'red' },
      // { tag: 'regexp', color: 'red' },
      // { tag: 'self', color: 'red' },
      // { tag: 'separator', color: 'red' },
      // { tag: 'special', color: 'red' }, // Assuming t.special(t.name) corresponds to a special name
      // { tag: 'squareBracket', color: 'red' },
      // { tag: 'standard', color: 'red' }, // Assuming t.standard(t.name) corresponds to a standard name
      // { tag: 'strikethrough', color: 'red' },
      // { tag: 'string', color: 'red' },
      // { tag: 'strong', color: 'red' },
      // { tag: 'tagName', color: 'red' },
      // { tag: 'typeName', color: '#3abfb0' },
      // { tag: 'typeOperator', color: 'red' },
      // { tag: 'unit', color: 'red' },
      // { tag: 'updateOperator', color: 'red' },
      // { tag: 'url', color: 'red' },
      // { tag: 'variableName', color: 'red' },
```