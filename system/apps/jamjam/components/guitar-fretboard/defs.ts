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

type NoteButtonProps  = {
  noteOctave: NoteOctave;
  noteId: NoteId;
  notation: NoteNotation;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

type GuitarFretboardProps  = {
  className?: string;
  guitar: Guitar;
  fretsMarkers?: GuitarFret[];
  notation: NoteNotation;
  NoteComponent?: (props: NoteButtonProps) => ReactElement;
  onNoteClick?: (note: Note) => void;
}

type GuitarFretboardStringsProps  = {
  strings: GuitarString[];
}

export type {
  GuitarFretboardProps,
  NoteButtonProps,
  GuitarFretboardStringsProps,
};
