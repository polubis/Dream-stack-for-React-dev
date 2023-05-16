import { Button } from '@system/figa-ui';

import { getNoteSymbol } from '../../domain';

import type { NoteButtonProps } from './defs';
import { NOTES_COLORS } from './consts';

const NoteButton = ({
  noteId,
  noteOctave,
  notation,
  onClick,
}: NoteButtonProps) => {
  return (
    <Button
      size={2}
      className="guitar-fretboard-fret-note"
      style={{
        background: NOTES_COLORS[noteId - 1],
      }}
      shape="rounded"
      data-note-id={noteId}
      data-note-octave={noteOctave}
      onClick={onClick}
    >
      {getNoteSymbol(noteId, notation)}
    </Button>
  );
};

export { NoteButton };
