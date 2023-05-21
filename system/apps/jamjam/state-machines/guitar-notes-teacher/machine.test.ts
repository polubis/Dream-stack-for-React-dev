import type { GuitarNotesTeacherSettings, Questions } from './defs';
import * as M from './machine';

describe('Teaches the notes on the guitar when ', () => {
  const SETTINGS: GuitarNotesTeacherSettings = {
    notation: 'sharp',
    fretsCount: 25,
    hand: 'right',
    tuning: {
      name: 'E_STANDARD',
      notes: [
        { id: 5, octave: 4 },
        { id: 12, octave: 3 },
        { id: 8, octave: 3 },
        { id: 3, octave: 3 },
        { id: 10, octave: 2 },
        { id: 5, octave: 2 },
      ],
    },
  };

  it('uses most popular guitar setup for initial settings', () => {
    expect(M.Settings('sharp').settings).toEqual(SETTINGS);
  });

  it('consumes settings to create guitar', () => {
    const { settings } = M.Settings('sharp');
    const { guitar } = M.Counting(settings);

    expect(guitar.fretsCount).toEqual(settings.fretsCount);
    expect(guitar.hand).toEqual(settings.hand);
    expect(guitar.tuning).toEqual(settings.tuning);
  });

  it('randomizes questions', () => {
    const EXPECTED_LENGTH = 5;

    const { settings } = M.Settings('sharp');
    const { guitar } = M.Counting(settings);
    const { questions } = M.Started(settings, guitar);

    expect(questions.length).toBe(EXPECTED_LENGTH);
    expect(questions.every((question) => typeof question === 'number'));
    expect(
      questions.reduce<Questions>((acc, question) => {
        if (!acc.includes(question)) {
          acc.push(question);
        }
        return acc;
      }, []).length
    ).toBe(EXPECTED_LENGTH);
  });
});
