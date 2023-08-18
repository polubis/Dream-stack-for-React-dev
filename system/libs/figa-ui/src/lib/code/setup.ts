import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { DEFAULT_THEME } from './consts';
import { EditorState, type Extension } from '@codemirror/state';
import type { SetupConfig } from './defs';

const selectionExtensionIdx = 15;

export const setup = ({
  readonly,
  children,
  parent,
  onChange,
}: SetupConfig): EditorView => {
  let setup = basicSetup;
  const extensions: Extension[] = [javascript(), DEFAULT_THEME];

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
