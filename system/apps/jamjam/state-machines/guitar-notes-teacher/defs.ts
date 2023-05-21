import type {
  Guitar,
  GuitarFret,
  GuitarHand,
  GuitarTuning,
  NoteId,
  NoteNotation,
} from '../../domain';

/**
 * Settings that will be used to prepare the game
 * of guessing sounds on the guitar.
 */
interface GuitarNotesTeacherSettings {
  fretsCount: GuitarFret;
  tuning: GuitarTuning;
  hand: GuitarHand;
  notation: NoteNotation;
}

interface IdleState {
  key: 'idle';
}

interface InitialState {
  key: 'initial';
}

interface SettingsState {
  key: 'settings';
  settings: GuitarNotesTeacherSettings;
}

interface CountingState {
  key: 'counting';
  guitar: Guitar;
  settings: GuitarNotesTeacherSettings;
}

type Answer = NoteId | undefined;
type Answers = Answer[];
type Question = NoteId;
type Questions = Question[];

interface GuitarNotesGameResult {
  answer: Answer;
  question: Question;
  correct: boolean;
}

interface GuitarNotesGameSummary {
  result: GuitarNotesGameResult[];
}

interface StartedState {
  key: 'started';
  answers: [];
  questions: Questions;
  guitar: Guitar;
  settings: GuitarNotesTeacherSettings;
}

interface PlayingState {
  key: 'playing';
  answers: Answers;
  questions: Questions;
  guitar: Guitar;
  settings: GuitarNotesTeacherSettings;
}

interface FinishedState {
  key: 'finished';
  summary: GuitarNotesGameSummary;
  settings: GuitarNotesTeacherSettings;
}

type GuitarNotesTeacherState =
  | IdleState
  | InitialState
  | SettingsState
  | CountingState
  | StartedState
  | PlayingState
  | FinishedState;

type GuitarNotesTeacherStateKey = GuitarNotesTeacherState['key'];

export type {
  IdleState,
  InitialState,
  SettingsState,
  CountingState,
  PlayingState,
  StartedState,
  FinishedState,
  Question,
  Questions,
  Answers,
  Answer,
  GuitarNotesTeacherSettings,
  GuitarNotesTeacherState,
  GuitarNotesTeacherStateKey,
  GuitarNotesGameSummary,
  GuitarNotesGameResult,
};
