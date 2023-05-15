import { render } from '@testing-library/react';

import { GuitarFretboardStrings } from '../guitar-fretboard-strings';

describe('displays guitar fretboard strings when', () => {
  it('[FRAGILE] supported classes and heights are attached', () => {
    const { asFragment } = render(
      <GuitarFretboardStrings
        strings={[
          {
            number: 1,
            notes: [{ id: 1, octave: 2 }],
          },
          {
            number: 2,
            notes: [{ id: 4, octave: 2 }],
          },
          {
            number: 3,
            notes: [{ id: 7, octave: 2 }],
          },
          {
            number: 4,
            notes: [{ id: 11, octave: 2 }],
          },
          {
            number: 5,
            notes: [{ id: 6, octave: 2 }],
          },
          {
            number: 6,
            notes: [{ id: 4, octave: 2 }],
          },
        ]}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
