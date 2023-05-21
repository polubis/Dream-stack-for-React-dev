import type {
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

export type {
  Question,
  Questions,
  Answers,
  Answer,
  GuitarNotesTeacherSettings,
  GuitarNotesGameSummary,
  GuitarNotesGameResult,
};
