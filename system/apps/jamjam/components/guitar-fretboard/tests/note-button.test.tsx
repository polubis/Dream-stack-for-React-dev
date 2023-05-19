import { fireEvent, render, screen } from '@testing-library/react';

import type {
  BmollNoteNotationSymbol,
  SharpNoteNotationSymbol,
} from '../../../domain';
import type { NoteButtonProps } from '../defs';
import { ColorfulNoteButton, UnobviousNoteButton } from '../note-button';

describe('note button with unique note colors can be used when', () => {
  const colorfulNoteButtonFixture = (props: Partial<NoteButtonProps> = {}) => {
    const result = render(
      <ColorfulNoteButton
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
    const { rerender } = colorfulNoteButtonFixture({ notation: 'sharp' });

    screen.getByText('C#' as SharpNoteNotationSymbol);

    rerender(
      <ColorfulNoteButton
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

    colorfulNoteButtonFixture({ onClick: onClickSpy, noteId: 1 });

    fireEvent.click(screen.getByText('C' as SharpNoteNotationSymbol));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('data attributes are used to handle events)', () => {
    colorfulNoteButtonFixture({ noteId: 1 });

    const element = screen.getByText('C' as SharpNoteNotationSymbol);

    expect(element.dataset.noteId).toBe('1');
    expect(element.dataset.noteOctave).toBe('2');
  });
});

describe('note button with unknown note identifier and color can be used when', () => {
  const unobviousNoteButtonFixture = (props: Partial<NoteButtonProps> = {}) => {
    const result = render(
      <UnobviousNoteButton
        noteId={2}
        noteOctave={2}
        notation="bmoll"
        onClick={jest.fn()}
        {...props}
      />
    );
    const element = result.container.querySelector<HTMLButtonElement>(
      '.guitar-fretboard-fret-note.unobvious'
    )!;

    return { result, element };
  };

  it('note symbol is hidden', () => {
    unobviousNoteButtonFixture({ noteId: 1 });

    expect(screen.queryByText('C' as SharpNoteNotationSymbol)).toBeFalsy();
  });

  it('[FRAGILE] data attributes are used to handle events', () => {
    const { element } = unobviousNoteButtonFixture({ noteId: 1 });

    expect(element.dataset.noteId).toBe('1');
    expect(element.dataset.noteOctave).toBe('2');
  });

  it('[FRAGILE] handles click event', () => {
    const onClickSpy = jest.fn();

    const { element } = unobviousNoteButtonFixture({
      noteId: 1,
      onClick: onClickSpy,
    });

    fireEvent.click(element);

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
