import type { NoteId, NoteNotation, NoteNotationSymbol } from './defs';
import {
  BMOLL_NOTE_NOTATION_SYMBOLS,
  SHARP_NOTE_NOTATION_SYMBOLS,
} from './consts';

export const getNoteSymbol = (
  noteId: NoteId,
  notation: NoteNotation
): NoteNotationSymbol => {
  const id = noteId - 1;

  if (notation === 'sharp') {
    return SHARP_NOTE_NOTATION_SYMBOLS[id];
  }

  return BMOLL_NOTE_NOTATION_SYMBOLS[id];
};
