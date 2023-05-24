import { useRef, useState } from 'react';

import type { Note, NoteNotation } from '../../domain';

import type {
  GuitarNotesTeacherActions,
  GuitarNotesTeacherState,
} from './guitar-notes-teacher.defs';
import {
  Counting,
  Finished,
  Idle,
  Initial,
  Playing,
  Settings,
  Started,
} from './guitar-notes-teacher.actions';

const DEFAULT_INITIAL_STATE = Idle() as GuitarNotesTeacherState;

const logInvalidAction = (actionName: string): void => {
  const message = 'Invalid action detected in ' + actionName;

  if (process.env.NODE_ENV === 'development') {
    throw Error(message);
  } else {
    console.error(message);
  }
};

const useGuitarNotesTeacherFacade = (initialState = DEFAULT_INITIAL_STATE) => {
  const [, setCounter] = useState(0);
  const state = useRef(initialState);

  const update = (newState: GuitarNotesTeacherState): void => {
    state.current = newState;
    setCounter((prev) => prev + 1);
  };

  const answerQuestion = (note?: Note): void => {
    if (state.current.key !== 'started' && state.current.key !== 'playing') {
      logInvalidAction(answerQuestion.name);
      return;
    }

    const newAnswers = [...state.current.answers, note ? note.id : undefined];

    if (newAnswers.length === state.current.questions.length) {
      update(
        Finished(state.current.settings, newAnswers, state.current.questions)
      );
      return;
    }

    update(
      Playing(
        state.current.settings,
        state.current.guitar,
        newAnswers,
        state.current.questions
      )
    );
  };

  const initial = (): void => {
    update(Initial());
  };

  const idle = (): void => {
    update(Idle());
  };

  const settings = (): void => {
    update(Settings('sharp'));
  };

  const counting = (): void => {
    if (state.current.key === 'settings') {
      update(Counting(state.current.settings));
      return;
    }

    logInvalidAction(counting.name);
  };

  const started = (): void => {
    if (state.current.key === 'counting') {
      update(Started(state.current.settings, state.current.guitar));
      return;
    }

    logInvalidAction(started.name);
  };

  const setNotation = (notation: NoteNotation): void => {
    if (state.current.key === 'settings') {
      update(Settings(notation));
      return;
    }

    logInvalidAction(setNotation.name);
  };

  const actions: GuitarNotesTeacherActions = {
    answerQuestion,
    initial,
    idle,
    settings,
    counting,
    started,
    setNotation,
  };

  return { state: state.current, actions };
};

export { useGuitarNotesTeacherFacade };
