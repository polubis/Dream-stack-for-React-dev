import { getNoteSymbol } from '../../domain';

import type { Answers, GuitarNotesTeacherSettings, Questions } from './defs';

const getCurrentQuestion = (state: {
  questions: Questions;
  answers: Answers;
  settings: GuitarNotesTeacherSettings;
}) => {
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
