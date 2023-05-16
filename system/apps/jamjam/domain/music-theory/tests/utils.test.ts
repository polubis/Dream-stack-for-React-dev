import type {
  BmollNoteNotationSymbol,
  GuitarHand,
  GuitarTuning,
  Note,
  SharpNoteNotationSymbol,
} from '../defs';
import { createGuitar, getNoteSymbol } from '../utils';

describe('returns note symbol according to used notation', () => {
  it('note contains sharp notation postix', () => {
    expect(getNoteSymbol(2, 'sharp')).toBe('C#' as SharpNoteNotationSymbol);
  });

  it('note contains bmoll notation postfix', () => {
    expect(getNoteSymbol(2, 'bmoll')).toBe('Db' as BmollNoteNotationSymbol);
  });
});

describe('creates guitar instrument when', () => {
  it('tuning is created', () => {
    const guitar = createGuitar({
      tuningNotes: [{ id: 12, octave: 3 }],
      tuningName: 'custom',
      hand: 'right',
      fretsCount: 2,
    });

    expect(guitar.tuning).toEqual({
      name: 'custom',
      notes: [{ id: 12, octave: 3 }],
    } as GuitarTuning);
  });

  it('when hand is assigned', () => {
    const guitar = createGuitar({
      tuningNotes: [{ id: 12, octave: 3 }],
      tuningName: 'custom',
      hand: 'right',
      fretsCount: 2,
    });

    expect(guitar.hand).toBe('right' as GuitarHand);
  });

  it('generates next octave B4 when passes B3 note', () => {
    const guitar = createGuitar({
      tuningNotes: [{ id: 12, octave: 3 }],
      tuningName: 'custom',
      hand: 'right',
      fretsCount: 2,
    });
    const [firstString] = guitar.strings;

    expect(firstString.notes).toEqual([
      { id: 12, octave: 3 },
      { id: 1, octave: 4 },
    ] as Note[]);
  });

  it('generates 3 notes from tuning E4 note', () => {
    const guitar = createGuitar({
      tuningNotes: [{ id: 5, octave: 4 }],
      tuningName: 'custom',
      hand: 'right',
      fretsCount: 3,
    });
    const [firstString] = guitar.strings;

    expect(firstString.notes).toEqual([
      { id: 5, octave: 4 },
      { id: 6, octave: 4 },
      { id: 7, octave: 4 },
    ] as Note[]);
  });
});
