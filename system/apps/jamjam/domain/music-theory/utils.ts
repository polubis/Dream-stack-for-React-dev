import type {
  Guitar,
  GuitarConfig,
  GuitarString,
  GuitarStringNumber,
  Note,
  NoteId,
  NoteNotation,
  NoteNotationSymbol,
} from './defs';
import {
  BMOLL_NOTE_NOTATION_SYMBOLS,
  NOTE_IDS,
  NOTE_OCTAVES,
  SHARP_NOTE_NOTATION_SYMBOLS,
} from './consts';

const getNoteSymbol = (
  noteId: NoteId,
  notation: NoteNotation
): NoteNotationSymbol => {
  const id = noteId - 1;

  if (notation === 'sharp') {
    return SHARP_NOTE_NOTATION_SYMBOLS[id];
  }

  return BMOLL_NOTE_NOTATION_SYMBOLS[id];
};

const createGuitar = (config: GuitarConfig): Guitar => {
  const { tuningNotes, fretsCount, hand, tuningName } = config;
  const stringsCount = tuningNotes.length;
  const [C_NOTE_ID] = NOTE_IDS;
  const B_NOTE_ID = NOTE_IDS[NOTE_IDS.length - 1];
  const [FIRST_OCTAVE] = NOTE_OCTAVES;
  const LAST_OCTAVE = NOTE_OCTAVES[NOTE_OCTAVES.length - 1];

  const strings = Array.from({ length: stringsCount }).reduce<GuitarString[]>(
    (stringsAcc, _, stringIdx) => {
      const { id, octave } = tuningNotes[stringIdx];
      let currentId = id;
      let currentOctave = octave;

      const notes = Array.from({ length: fretsCount }).reduce<Note[]>(
        (notesAcc, _) => {
          notesAcc.push({ id: currentId, octave: currentOctave });

          currentId++;

          if (currentId > B_NOTE_ID) {
            currentId = C_NOTE_ID;

            currentOctave++;

            if (currentOctave > LAST_OCTAVE) {
              currentOctave = FIRST_OCTAVE;
            }
          }

          return notesAcc;
        },
        []
      );

      stringsAcc.push({
        notes,
        number: (stringIdx + 1) as GuitarStringNumber,
      });

      return stringsAcc;
    },
    []
  );

  return {
    strings,
    fretsCount,
    tuning: {
      name: tuningName,
      notes: tuningNotes,
    },
    hand,
  };
};

export { getNoteSymbol, createGuitar };
