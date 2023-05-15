import { NOTE_IDS } from '../../../domain';
import { NOTES_COLORS, DEFAULT_FRETS_MARKERS } from '../consts';

describe('creates default setup when', () => {
  it('number of colors are equal to number of notes', () => {
    expect(NOTES_COLORS.length).toBe(NOTE_IDS.length);
  });

  it('markers are equal to default guitar markers positions', () => {
    expect(DEFAULT_FRETS_MARKERS).toEqual([3, 5, 7, 9, 12, 15, 17, 19, 21, 24]);
  });
});
