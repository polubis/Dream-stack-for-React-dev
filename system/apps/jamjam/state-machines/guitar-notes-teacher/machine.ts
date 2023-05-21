import type { Guitar, NoteNotation } from '../../domain';
import { createGuitar, NOTE_IDS } from '../../domain';

import type {
  Answers,
  GuitarNotesGameResult,
  GuitarNotesTeacherSettings,
  Questions,
} from './defs';

const initializeSettings = (
  notation: NoteNotation
): GuitarNotesTeacherSettings => {
  const settings: GuitarNotesTeacherSettings = {
    notation,
    fretsCount: 25,
    hand: 'right',
    tuning: {
      name: 'E_STANDARD',
      notes: [
        { id: 5, octave: 4 },
        { id: 12, octave: 3 },
        { id: 8, octave: 3 },
        { id: 3, octave: 3 },
        { id: 10, octave: 2 },
        { id: 5, octave: 2 },
      ],
    },
  };

  return settings;
};

const initializeGuitar = (settings: GuitarNotesTeacherSettings): Guitar => {
  return createGuitar({
    hand: settings.hand,
    tuningName: settings.tuning.name,
    tuningNotes: settings.tuning.notes,
    fretsCount: settings.fretsCount,
  });
};

const randomize = (from: number, to: number): number =>
  Math.floor(Math.random() * (to - from + 1)) + from;

const randomizeQuestions = (amount = 5): Questions => {
  let currentNoteIds = [...NOTE_IDS];
  const ids: Questions = [];

  for (let i = 0; i < amount; i++) {
    const randomIdx = randomize(0, currentNoteIds.length - 1);
    ids.push(currentNoteIds[randomIdx]);
    currentNoteIds = currentNoteIds.filter((_, idx) => idx !== randomIdx);
  }

  return ids;
};

const createMachine = () => ({
  idle: () => {},
  initial: () => {},
  settings: ({ notation }: { notation: NoteNotation }) => ({
    settings: initializeSettings(notation),
  }),
  counting: ({ settings }: { settings: GuitarNotesTeacherSettings }) => ({
    guitar: initializeGuitar(settings),
    settings,
  }),
  started: (payload: {
    settings: GuitarNotesTeacherSettings;
    guitar: Guitar;
  }) => ({
    ...payload,
    questions: randomizeQuestions(),
    answers: [] as Answers,
  }),
  playing: (payload: {
    settings: GuitarNotesTeacherSettings;
    guitar: Guitar;
    answers: Answers;
    questions: Questions;
  }) => payload,
  finished: ({
    settings,
    questions,
    answers,
  }: {
    settings: GuitarNotesTeacherSettings;
    answers: Answers;
    questions: Questions;
  }) => ({
    settings,
    summary: {
      result: questions.map<GuitarNotesGameResult>((question, idx) => ({
        question,
        answer: answers[idx],
        correct: question === answers[idx],
      })),
    },
  }),
});

export { createMachine };
