import type { BmollNoteNotationSymbol, SharpNoteNotationSymbol } from '../defs';
import { getNoteSymbol } from '../utils';

describe('returns note symbol according to used notation', () => {
  it('note contains sharp notation postix', () => {
    expect(getNoteSymbol(2, 'sharp')).toBe('C#' as SharpNoteNotationSymbol);
  });

  it('note contains bmoll notation postfix', () => {
    expect(getNoteSymbol(2, 'bmoll')).toBe('Db' as BmollNoteNotationSymbol);
  });
});
