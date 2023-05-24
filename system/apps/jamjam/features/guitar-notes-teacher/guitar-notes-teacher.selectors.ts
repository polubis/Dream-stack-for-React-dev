import { getNoteSymbol } from '../../domain';

import type { PlayingState, StartedState } from './guitar-notes-teacher.defs';

const getCurrentQuestion = <S extends StartedState | PlayingState>(
  state: S
) => {
  const {
    answers: { length },
  } = state;
  const noteId = state.questions.at(state.answers.length);

  if (noteId === undefined) {
    throw Error(
      `Cannot find current question for ${noteId} and answer length ${length}`
    );
  }

  return getNoteSymbol(noteId, state.settings.notation);
};

export { getCurrentQuestion };
