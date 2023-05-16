//                C, C#, D, D#, E, F, F#, G, G#, A, A#, B
const NOTE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

const NOTE_NOTATIONS = ['sharp', 'bmoll'] as const;

const SHARP_NOTE_NOTATION_SYMBOLS = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
] as const;

const BMOLL_NOTE_NOTATION_SYMBOLS = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
] as const;

const NOTE_OCTAVES = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;

const GUITAR_STRINGS_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

// 0 means empty fret/string.
const GUITAR_FRETS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27,
] as const;

export {
  NOTE_IDS,
  NOTE_OCTAVES,
  GUITAR_STRINGS_NUMBERS,
  GUITAR_FRETS,
  SHARP_NOTE_NOTATION_SYMBOLS,
  BMOLL_NOTE_NOTATION_SYMBOLS,
  NOTE_NOTATIONS,
};
