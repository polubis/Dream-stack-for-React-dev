import type { CodeProps } from './defs';

import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { searchKeymap } from '@codemirror/search';
import {
  CompletionContext,
  autocompletion,
  CompletionResult,
} from '@codemirror/autocomplete';
import { useLayoutEffect } from 'react';

const OPTIONS = [
  {
    label: 'M',
    type: 'text',
    apply: '<M>\n    \n  </M>',
  },
  {
    label: 'A',
    type: 'text',
    apply: '<A>\n    \n  </A>',
  },
];

const Code = ({ id, children }: CodeProps) => {
  useLayoutEffect(() => {
    const myTheme = EditorView.theme({
      '&': {
        background: '#0A0A0A !important',
      },
      '.cm-line': {
        color: '#f6f6f6',
      },
      '.cm-line > span': {
        color: '#FF7878',
      },
      '.cm-gutters': {
        background: '#0A0A0d !important',
      },
      '.cm-gutterElement': {
        color: '#fff',
      },
      '.cm-matchingBracket': {
        color: '#FF7878 !important',
      },
    });

    const attachCompletions = (
      context: CompletionContext
    ): CompletionResult | null => {
      const word = context.matchBefore(/\w*/);

      if (!word || !context.explicit || word.from === word.to) {
        return null;
      }

      return {
        from: word.from,
        options: OPTIONS,
      };
    };

    const parent = document.getElementById(id);

    if (!parent) {
      throw Error('There is no parent for code component');
    }

    const view = new EditorView({
      doc: children,
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        keymap.of(searchKeymap),
        markdown(),
        autocompletion({
          override: [attachCompletions],
        }),
        EditorView.updateListener.of((v) => {
          if (v.docChanged) {
            const [, ...values] = v.changes.toJSON()[1];
            const isSnippet =
              '<M>\n    \n  </M>'.replace(/(?:\r\n|\r|\n)/g, ',') ===
              values.toString();

            if (isSnippet) {
              view.dispatch({
                selection: {
                  anchor: v.state.selection.ranges[0].from - 7,
                },
              });
            }
          }
        }),
        oneDark,
        myTheme,
      ],
      parent,
    });

    return () => {
      view.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return <div id={id} />;
};

export { Code };
