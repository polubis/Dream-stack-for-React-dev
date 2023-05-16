import {
  BMOLL_NOTE_NOTATION_SYMBOLS,
  GUITAR_STRINGS_NUMBERS,
  NOTE_IDS,
  NOTE_NOTATIONS,
  NOTE_OCTAVES,
  SHARP_NOTE_NOTATION_SYMBOLS,
} from './consts';

/**
 * There are an infinite number of tones in
 * music - but in modern applied music, 12 are used.
 *
 * A sound is nothing more than a value expressed in
 * Hz - defining the frequency of a wave.
 *
 * In music there are different notations for notes - either
 * with "#" or with "b-moll", so we need to give them unique identifiers.
 */
type NoteId = (typeof NOTE_IDS)[number];

/**
 * Specifies the possible notations supported by the applications.
 */
type NoteNotation = (typeof NOTE_NOTATIONS)[number];

/**
 * Specifies the possible symbols for sharp notation.
 */
type SharpNoteNotationSymbol = (typeof SHARP_NOTE_NOTATION_SYMBOLS)[number];

/**
 * Specifies the possible symbols for bmoll notation.
 */
type BmollNoteNotationSymbol = (typeof BMOLL_NOTE_NOTATION_SYMBOLS)[number];

/**
 * In music we have intervals - the octave is one of them.
 * It is the distance from the note C1, to the note C2,
 * or from the note C2 to C3, ...etc.
 *
 * An octave is otherwise known as 12 half-steps or 6 whole steps.
 */
type NoteOctave = (typeof NOTE_OCTAVES)[number];

/**
 * Each note consists of a pair - an octave and a note identifier.
 */
interface Note {
  id: NoteId;
  octave: NoteOctave;
}

/**
 * The guitar can be left-handed or right-handed.
 * In the case of left-handed, the guitar strings are inverted.
 */
type GuitarHand = 'left' | 'right';

/**
 * In a guitar we usually have 4,6 or 7 strings. However,
 * there are psychopaths that play a different number.
 * We also need support them.
 */
type GuitarStringNumber = (typeof GUITAR_STRINGS_NUMBERS)[number];

/**
 * Guitar tuning refers to the process of adjusting the pitch of
 * each of the guitar strings to achieve the desired musical
 * intervals between them.
 *
 * The standard tuning for a six-string guitar,
 * starting from the thickest string to the thinnest, is usually E2-A2-D3-G3-B3-E4.
 */
interface GuitarTuning {
  name: string;
  notes: Note[];
}

/**
 * An interface that defines the parameters needed to create a guitar object.
 */
interface GuitarConfig {
  hand: GuitarHand;
  stringsCount: GuitarStringNumber;
  fretsCount: number;
  tuning: GuitarTuning[];
}

/**
 * When you press the string - applying it to the guitar
 * neck - the sound comes out. The guitar usually has up to 24 frets.
 * So we can produce 25 or more sounds in total (including the sound of an empty string).
 */
interface GuitarString {
  string: GuitarStringNumber;
  notes: Note[];
}

/**
 * An abstraction to a real instrument - the guitar.
 */
interface Guitar {
  strings: GuitarString[];
  tuning: Note[];
}

export type {
  GuitarHand,
  GuitarStringNumber,
  GuitarConfig,
  GuitarString,
  NoteOctave,
  NoteId,
  Guitar,
  SharpNoteNotationSymbol,
  BmollNoteNotationSymbol,
  NoteNotation,
};
