import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, type Extension } from '@codemirror/state';
import type { SetupConfig } from './defs';
import { indentWithTab } from '@codemirror/commands';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

const selectionExtensionIdx = 15;

const createBasicExtensions = ({
  readonly,
  wrapLines,
  theme,
}: Pick<SetupConfig, 'readonly' | 'wrapLines' | 'theme'>): Extension[] => {
  let setup = basicSetup;

  const themeSetup: Extension[] = [
    syntaxHighlighting(
      HighlightStyle.define(
        theme.tags.map(({ tag, color }) => {
          const handler = t[tag];

          if (typeof handler === 'function') {
            return {
              tag: handler(t.name),
              color,
            };
          }

          return {
            tag: handler,
            color,
          };
        })
      )
    ),
  ];
  const extensions: Extension[] = [];

  extensions.push(themeSetup);
  extensions.push(keymap.of([indentWithTab]));

  if (wrapLines) {
    extensions.push(EditorView.lineWrapping);
  }

  if (readonly) {
    setup = (setup as Extension[]).filter(
      (_, i) => i !== selectionExtensionIdx
    );
    extensions.push(EditorState.readOnly.of(true));
  }

  extensions.push(setup);

  return extensions;
};

const viewFactory = ({
  readonly,
  children,
  parent,
  wrapLines,
  theme,
  onChange,
}: Omit<SetupConfig, 'lang'>) => {
  const extensions: Extension[] = [
    ...createBasicExtensions({ readonly, wrapLines, theme }),
    ...(!readonly && onChange
      ? [
          EditorView.updateListener.of((v) => {
            if (v.docChanged) {
              onChange(v.state.doc.toString());
            }
          }),
        ]
      : []),
  ];

  return {
    create: (): EditorView => {
      return new EditorView({
        doc: children,
        extensions,
        parent,
      });
    },
    prependExtension: (extension: Extension): void => {
      extensions.unshift(extension);
    },
  };
};

export const setup = ({
  readonly,
  children,
  parent,
  lang,
  wrapLines,
  theme,
  onChange,
}: SetupConfig): Promise<EditorView> => {
  return new Promise((resolve) => {
    const view = viewFactory({
      readonly,
      children,
      parent,
      wrapLines,
      theme,
      onChange,
    });

    switch (lang) {
      case 'js':
        import('@codemirror/lang-javascript').then((mod) => {
          view.prependExtension(mod.javascript());
          resolve(view.create());
        });
        break;
      case 'md':
        import('@codemirror/lang-markdown').then((mod) => {
          view.prependExtension(mod.markdown());
          resolve(view.create());
        });
        break;
      default:
        throw Error('Unsupported lang');
    }
  });
};
