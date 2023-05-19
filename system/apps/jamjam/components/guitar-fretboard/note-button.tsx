import { Button, type ButtonProps } from '@system/figa-ui';
import c from 'classnames';

import { getNoteSymbol } from '../../domain';

import type { NoteButtonProps } from './defs';
import { NOTES_COLORS } from './consts';

const NoteButton = ({
  noteId,
  noteOctave,
  ...props
}: ButtonProps & NoteButtonProps) => (
  <Button
    {...props}
    size={2}
    className={c('guitar-fretboard-fret-note', props.className)}
    shape="rounded"
    data-note-id={noteId}
    data-note-octave={noteOctave}
  />
);

const ColorfulNoteButton = (props: NoteButtonProps) => (
  <NoteButton
    {...props}
    className="colorful"
    style={{
      background: NOTES_COLORS[props.noteId - 1],
    }}
  >
    {getNoteSymbol(props.noteId, props.notation)}
  </NoteButton>
);

const UnobviousNoteButton = (props: NoteButtonProps) => (
  <NoteButton {...props} className="unobvious" />
);

export { ColorfulNoteButton, UnobviousNoteButton };
