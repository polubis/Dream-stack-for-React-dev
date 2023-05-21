import type { Note, NoteNotation } from '../../domain';

import { createMachine } from './machine';
import { useM } from './sm';

const logInvalidAction = (actionName: string): void => {
  const message = 'Invalid action detected in ' + actionName;

  if (process.env.NODE_ENV === 'development') {
    throw Error(message);
  } else {
    console.error(message);
  }
};

const useMachine = (initialState = createMachine()) => {
  const [state, set] = useM(initialState);

  const answerQuestion = (note?: Note): void => {
    if (state.key !== 'started' && state.key !== 'playing') {
      logInvalidAction(answerQuestion.name);
      return;
    }

    const newAnswers = [...state.answers, note ? note.id : undefined];

    if (newAnswers.length === state.questions.length) {
      set.finished({
        ...state,
        answers: newAnswers,
      });
      return;
    }

    set.playing({
      ...state,
      answers: newAnswers,
    });
  };

  const settings = (): void => {
    set.settings({ notation: 'sharp' });
  };

  const counting = (): void => {
    if (state.key === 'settings') {
      set.counting(state);
      return;
    }

    logInvalidAction(counting.name);
  };

  const started = (): void => {
    if (state.key === 'counting') {
      set.started({ guitar: state.guitar, settings: state.settings });
      return;
    }

    logInvalidAction(started.name);
  };

  const setNotation = (notation: NoteNotation): void => {
    if (state.key === 'settings') {
      set.settings({ notation });
      return;
    }

    logInvalidAction(setNotation.name);
  };

  const actions = {
    answerQuestion,
    initial: set.initial,
    idle: set.idle,
    settings,
    counting,
    started,
    setNotation,
  };

  return [state, actions] as const;
};

export { useMachine };
