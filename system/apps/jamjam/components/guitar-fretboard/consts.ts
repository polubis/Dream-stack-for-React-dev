import type { GuitarFret } from '../../domain';

const NOTES_COLORS = [
  '#f08989',
  '#cc9d72',
  '#a4cc72',
  '#72cc76',
  '#72ccbc',
  '#72b1cc',
  '#729bcc',
  '#9a72cc',
  '#728bcc',
  '#7f72cc',
  '#c572cc',
  '#cc72a8',
] as const;

const DEFAULT_FRETS_MARKERS: GuitarFret[] = [
  3, 5, 7, 9, 12, 15, 17, 19, 21, 24,
];

export { NOTES_COLORS, DEFAULT_FRETS_MARKERS };
