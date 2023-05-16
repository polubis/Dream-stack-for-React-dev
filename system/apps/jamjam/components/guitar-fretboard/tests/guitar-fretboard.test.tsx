import { fireEvent, render, screen } from '@testing-library/react';

import type { GuitarFretboardProps } from '../defs';
import type { Guitar, Note } from '../../../domain';
import { GuitarFretboard } from '../guitar-fretboard';
import { DEFAULT_FRETS_MARKERS } from '../consts';

describe('guitar fretboard works when', () => {
  const guitar: Guitar = {
    fretsCount: 27,
    tuning: [
      { id: 1, octave: 4 },
      { id: 4, octave: 3 },
    ],
    strings: [],
  };

  const guitarFretboardFixture = (
    props: Partial<GuitarFretboardProps> = {}
  ) => {
    const result = render(
      <GuitarFretboard
        notation="sharp"
        onNoteClick={jest.fn()}
        guitar={guitar}
        {...props}
      />
    );

    return result;
  };

  it('[FRAGILE] default markers are used when not specified', () => {
    const { container } = guitarFretboardFixture();

    expect(
      container.querySelectorAll('.guitar-fretboard-fret.marked').length
    ).toBe(DEFAULT_FRETS_MARKERS.length);
  });

  it('[FRAGILE] own markers can be displayed', () => {
    const { container } = guitarFretboardFixture({ fretsMarkers: [3, 5] });

    expect(
      container.querySelectorAll('.guitar-fretboard-fret.marked').length
    ).toBe(2);
  });

  it('[FRAGILE] frets are displayed', () => {
    const { container } = guitarFretboardFixture();

    expect(container.querySelectorAll('.guitar-fretboard-fret').length).toBe(
      guitar.fretsCount
    );
  });

  it('[FRAGILE] strings are displayed', () => {
    const { container } = guitarFretboardFixture();

    expect(container.querySelectorAll('.guitar-fretboard-strings').length).toBe(
      1
    );
  });

  it('click on note is handled', () => {
    const onNoteClickSpy = jest.fn();

    guitarFretboardFixture({
      onNoteClick: onNoteClickSpy,
      guitar: {
        tuning: [],
        fretsCount: 1,
        strings: [
          {
            number: 1,
            notes: [{ id: 1, octave: 1 }],
          },
        ],
      },
    });

    fireEvent.click(screen.getByText('C'));

    expect(onNoteClickSpy).toHaveBeenCalledTimes(1);
    expect(onNoteClickSpy).toHaveBeenCalledWith({
      id: 1,
      octave: 1,
    } as Note);
  });

  it('[FRAGILE] there is a option to attach custom classes', () => {
    const { container } = guitarFretboardFixture({
      className: 'my-class',
    });

    expect(container.querySelectorAll('.my-class').length).toBe(1);
  });
});
