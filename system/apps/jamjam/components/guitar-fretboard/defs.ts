import type { MouseEventHandler, ReactElement } from 'react';

import type {
  Guitar,
  GuitarFret,
  GuitarString,
  Note,
  NoteId,
  NoteNotation,
  NoteOctave,
} from '../../domain';

interface NoteButtonProps {
  noteOctave: NoteOctave;
  noteId: NoteId;
  notation: NoteNotation;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface GuitarFretboardProps {
  className?: string;
  guitar: Guitar;
  fretsMarkers?: GuitarFret[];
  notation: NoteNotation;
  NoteComponent?: (props: NoteButtonProps) => ReactElement;
  onNoteClick?: (note: Note) => void;
}

interface GuitarFretboardStringsProps {
  strings: GuitarString[];
}

export type {
  GuitarFretboardProps,
  NoteButtonProps,
  GuitarFretboardStringsProps,
};
