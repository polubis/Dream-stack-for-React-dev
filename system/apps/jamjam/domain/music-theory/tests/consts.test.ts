import {
  BMOLL_NOTE_NOTATION_SYMBOLS,
  GUITAR_FRETS,
  GUITAR_STRINGS_NUMBERS,
  NOTE_IDS,
  NOTE_NOTATIONS,
  NOTE_OCTAVES,
  SHARP_NOTE_NOTATION_SYMBOLS,
} from '../consts';

describe('Initial configuration refers to reality when', () => {
  it('there is a sharp and bmoll notation', () => {
    expect(NOTE_NOTATIONS).toEqual(['sharp', 'bmoll']);
  });

  it('we only use notes from standard music', () => {
    expect(NOTE_IDS).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('sharp notation have symbols from music theory', () => {
    expect(SHARP_NOTE_NOTATION_SYMBOLS).toEqual([
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
    ]);
  });

  it('bmoll notation have symbols from music theory', () => {
    expect(BMOLL_NOTE_NOTATION_SYMBOLS).toEqual([
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
    ]);
  });

  it('there are only nine supported octaves (0 is counted in)', () => {
    expect(NOTE_OCTAVES).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('guitar can have only from 1 to 10 strings', () => {
    expect(GUITAR_STRINGS_NUMBERS).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('there are 27 guitar frets supported and also there is a empty string', () => {
    expect(GUITAR_FRETS).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27,
    ]);
  });
});
