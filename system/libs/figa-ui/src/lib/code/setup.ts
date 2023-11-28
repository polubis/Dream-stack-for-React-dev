import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { DEFAULT_THEME } from './consts';
import { EditorState, type Extension } from '@codemirror/state';
import type { SetupConfig } from './defs';
import { indentWithTab } from '@codemirror/commands';

const selectionExtensionIdx = 15;

const createBasicExtensions = ({
  readonly,
  wrapLines,
}: Pick<SetupConfig, 'readonly' | 'wrapLines'>): Extension[] => {
  let setup = basicSetup;
  const extensions: Extension[] = [];

  extensions.push(DEFAULT_THEME);
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
  onChange,
}: Omit<SetupConfig, 'lang'>) => {
  const extensions: Extension[] = [
    ...createBasicExtensions({ readonly, wrapLines }),
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
  onChange,
}: SetupConfig): Promise<EditorView> => {
  return new Promise((resolve) => {
    const view = viewFactory({
      readonly,
      children,
      parent,
      wrapLines,
      onChange,
    });

    switch (lang) {
      case 'js':
        import('@codemirror/lang-javascript').then((mod) => {
          view.prependExtension(mod.javascript());
          resolve(view.create());
        });
        break;
      case 'css':
        import('@codemirror/lang-css').then((mod) => {
          view.prependExtension(mod.css());
          resolve(view.create());
        });
        break;
      case 'html':
        import('@codemirror/lang-html').then((mod) => {
          view.prependExtension(mod.html());
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
