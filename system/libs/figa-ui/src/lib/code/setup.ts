import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { DEFAULT_THEME } from './consts';
import { EditorState, type Extension } from '@codemirror/state';
import type { SetupConfig } from './defs';
import { indentWithTab } from '@codemirror/commands';

const selectionExtensionIdx = 15;

export const setup = ({
  readonly,
  children,
  parent,
  lang,
  wrapLines,
  onChange,
}: SetupConfig): EditorView => {
  let setup = basicSetup;
  const extensions: Extension[] = [
    javascript(),
    DEFAULT_THEME,
    keymap.of([indentWithTab]),
  ];

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

  const view = new EditorView({
    doc: children,
    extensions: [
      ...extensions,
      ...(!readonly && onChange
        ? [
            EditorView.updateListener.of((v) => {
              if (v.docChanged) {
                onChange(view.state.doc.toString());
              }
            }),
          ]
        : []),
    ],
    parent,
  });

  return view;
};
