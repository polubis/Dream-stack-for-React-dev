import { useRef, useState } from 'react';

import type { Note } from '../../domain';

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

  const answerQuestion = (note: Note): void => {
    if (state.current.key === 'started' || state.current.key === 'playing') {
      update(
        M.Playing(
          state.current.guitar,
          [...state.current.answers, note.id],
          state.current.questions
        )
      );
      return;
    }

    logInvalidAction(answerQuestion.name);
  };

  const timeEnd = (): void => {
    if (state.current.key === 'started' || state.current.key === 'playing') {
      update(
        M.Playing(
          state.current.guitar,
          [...state.current.answers, undefined],
          state.current.questions
        )
      );
      return;
    }

    logInvalidAction(timeEnd.name);
  };

  const initial = (): void => {
    update(M.Initial());
  };

  const idle = (): void => {
    update(M.Idle());
  };

  const settings = (): void => {
    update(M.Settings());
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
      update(M.Started(state.current.guitar));
      return;
    }

    logInvalidAction(started.name);
  };

  const actions = {
    answerQuestion,
    timeEnd,
    initial,
    idle,
    settings,
    counting,
    started,
  };

  return [state.current, actions] as const;
};

export { useMachine };
