import { fireEvent, render, screen } from '@testing-library/react';

import type {
  BmollNoteNotationSymbol,
  SharpNoteNotationSymbol,
} from '../../../domain';
import type { NoteButtonProps } from '../defs';
import { NoteButton } from '../note-button';

describe('note button component can be used when', () => {
  const noteButtonFixture = (props: Partial<NoteButtonProps> = {}) => {
    const result = render(
      <NoteButton
        noteId={2}
        noteOctave={2}
        notation="bmoll"
        onClick={jest.fn()}
        {...props}
      />
    );

    return result;
  };

  it('note symbol is displayed according to notation', () => {
    const { rerender } = noteButtonFixture({ notation: 'sharp' });

    screen.getByText('C#' as SharpNoteNotationSymbol);

    rerender(
      <NoteButton
        noteId={2}
        noteOctave={2}
        notation="bmoll"
        onClick={jest.fn()}
      />
    );

    screen.getByText('Db' as BmollNoteNotationSymbol);
  });

  it('handles click event', () => {
    const onClickSpy = jest.fn();

    noteButtonFixture({ onClick: onClickSpy, noteId: 1 });

    screen.getByText('C' as SharpNoteNotationSymbol);

    fireEvent.click(screen.getByText('C' as SharpNoteNotationSymbol));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('data attributes are used to handle events metadata (for reducing functions creation)', () => {
    noteButtonFixture({ noteId: 1 });

    const element = screen.getByText('C' as SharpNoteNotationSymbol);

    expect(element.dataset.noteId).toBe('1');
    expect(element.dataset.noteOctave).toBe('2');
  });
});
