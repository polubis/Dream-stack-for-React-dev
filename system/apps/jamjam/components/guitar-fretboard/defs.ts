import type { MouseEventHandler } from 'react';

import type {
  Guitar,
  GuitarFret,
  GuitarString,
  Note,
  NoteId,
  NoteNotation,
  NoteOctave,
} from '../../domain';

interface GuitarFretboardProps {
  className?: string;
  guitar: Guitar;
  fretsMarkers?: GuitarFret[];
  notation: NoteNotation;
  onNoteClick?: (note: Note) => void;
}

interface GuitarFretboardStringsProps {
  strings: GuitarString[];
}

interface NoteButtonProps {
  noteOctave: NoteOctave;
  noteId: NoteId;
  notation: NoteNotation;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export type {
  GuitarFretboardProps,
  NoteButtonProps,
  GuitarFretboardStringsProps,
};
