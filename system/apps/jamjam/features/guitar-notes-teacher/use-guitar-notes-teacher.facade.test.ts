import { act, renderHook } from '@testing-library/react';

import { useGuitarNotesTeacherFacade } from './use-guitar-notes-teacher.facade';
import type {
  Answers,
  GuitarNotesTeacherStateKey,
  StartedState,
} from './guitar-notes-teacher.defs';
import {
  Counting,
  Playing,
  Settings,
  Started,
} from './guitar-notes-teacher.actions';

describe('Guitar notes teacher works when', () => {
  it('initial state is assigned and there is an option to start interaction', () => {
    const { result } = renderHook(() => useGuitarNotesTeacherFacade());

    const { state, actions } = result.current;

    expect(state.key).toBe('idle' as GuitarNotesTeacherStateKey);
    expect(Object.keys(actions).length).toBeGreaterThan(0);
  });

  describe('allows to answer question when user', () => {
    it('just started', () => {
      const { settings } = Settings('sharp');
      const { guitar } = Counting(settings);
      const { result } = renderHook(() =>
        useGuitarNotesTeacherFacade(Started(settings, guitar))
      );

      const { actions } = result.current;

      act(() => {
        actions.answerQuestion({ id: 1, octave: 1 });
      });

      const { state } = result.current;

      expect(state.key).toBe('playing' as GuitarNotesTeacherStateKey);
      expect((state as StartedState).answers).toEqual([1] as Answers);
    });

    it('is already playing', () => {
      const { settings } = Settings('sharp');
      const { questions, answers, guitar } = Started(
        settings,
        Counting(settings).guitar
      );

      const { result } = renderHook(() =>
        useGuitarNotesTeacherFacade(
          Playing(settings, guitar, answers, questions)
        )
      );

      const { actions } = result.current;

      act(() => {
        actions.answerQuestion({ id: 1, octave: 1 });
      });

      const { state } = result.current;

      expect(state.key).toBe('playing' as GuitarNotesTeacherStateKey);
      expect((state as StartedState).answers).toEqual([1] as Answers);
    });
  });

  describe('sets empty answer when user', () => {
    it('forgot to answer during playing', () => {
      const { settings } = Settings('bmoll');
      const { questions, answers, guitar } = Started(
        settings,
        Counting(settings).guitar
      );

      const { result } = renderHook(() =>
        useGuitarNotesTeacherFacade(
          Playing(settings, guitar, answers, questions)
        )
      );

      const { actions } = result.current;

      act(() => {
        actions.answerQuestion();
      });

      const { state } = result.current;

      expect(state.key).toBe('playing' as GuitarNotesTeacherStateKey);
      expect((state as StartedState).answers).toEqual([undefined] as Answers);
    });
  });
});
