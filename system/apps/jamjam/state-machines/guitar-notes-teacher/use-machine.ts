import { useRef, useState } from 'react';

import type { Note, NoteNotation } from '../../domain';

import type { GuitarNotesTeacherState } from './defs';
import * as M from './machine';

const startedMachine = M.StartMachine();

const logInvalidAction = (actionName: string): void => {
  const message = 'Invalid action detected in ' + actionName;

  if (process.env.NODE_ENV === 'development') {
    throw Error(message);
  } else {
    console.error(message);
  }
};

const useMachine = (initialState = startedMachine) => {
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
        M.Finished(state.current.settings, newAnswers, state.current.questions)
      );
      return;
    }

    update(
      M.Playing(
        state.current.settings,
        state.current.guitar,
        newAnswers,
        state.current.questions
      )
    );
  };

  const initial = (): void => {
    update(M.Initial());
  };

  const idle = (): void => {
    update(M.Idle());
  };

  const settings = (): void => {
    update(M.Settings('sharp'));
  };

  const counting = (): void => {
    if (state.current.key === 'settings') {
      update(M.Counting(state.current.settings));
      return;
    }

    logInvalidAction(counting.name);
  };

  const started = (): void => {
    if (state.current.key === 'counting') {
      update(M.Started(state.current.settings, state.current.guitar));
      return;
    }

    logInvalidAction(started.name);
  };

  const setNotation = (notation: NoteNotation): void => {
    if (state.current.key === 'settings') {
      update(M.Settings(notation));
      return;
    }

    logInvalidAction(setNotation.name);
  };

  const actions = {
    answerQuestion,
    initial,
    idle,
    settings,
    counting,
    started,
    setNotation,
  };

  return [state.current, actions] as const;
};

export { useMachine };
