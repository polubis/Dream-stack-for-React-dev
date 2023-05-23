import { render } from '@testing-library/react';

import type { GuitarNotesTeacherViewProps } from '../defs';
import { GuitarNotesTeacherView } from '../guitar-notes-teacher-view';
import {
  Counting,
  Finished,
  Idle,
  Initial,
  Playing,
  Settings,
} from '../../../../state-machines/guitar-notes-teacher';

describe('Guitar notes teacher works when', () => {
  const guitarNotesTeacherViewFixture = (
    props: Partial<GuitarNotesTeacherViewProps> = {}
  ) => {
    const actionsSub = {} as GuitarNotesTeacherViewProps['actions'];

    const { asFragment } = render(
      <GuitarNotesTeacherView state={Idle()} actions={actionsSub} {...props} />
    );

    expect(asFragment()).toMatchSnapshot();
  };

  it('displays first screen after loading page', () => {
    guitarNotesTeacherViewFixture();
  });

  it('displays next screen after first interaction', () => {
    guitarNotesTeacherViewFixture({ state: Initial() });
  });

  it('displays settings panel', () => {
    guitarNotesTeacherViewFixture({ state: Settings('sharp') });
  });

  it('displays counting panel', () => {
    guitarNotesTeacherViewFixture({
      state: Counting(Settings('sharp').settings),
    });
  });

  it('displays guitar notes trainer fretboard when user just started', () => {
    const { guitar, settings } = Counting(Settings('sharp').settings);

    guitarNotesTeacherViewFixture({
      state: {
        key: 'started',
        questions: [1, 2, 3, 4, 5],
        answers: [],
        guitar,
        settings,
      },
    });
  });

  it('displays guitar notes trainer fretboard when user is playing', () => {
    const { guitar, settings } = Counting(Settings('sharp').settings);
    guitarNotesTeacherViewFixture({
      state: Playing(settings, guitar, [1], [1, 2, 3, 4, 5]),
    });
  });

  it('displays summary', () => {
    const { settings } = Counting(Settings('sharp').settings);
    guitarNotesTeacherViewFixture({
      state: Finished(settings, [1, 1, 4, 3, 5], [1, 2, 3, 4, 5]),
    });
  });
});
