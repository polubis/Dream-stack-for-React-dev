import type {
  GuitarNotesTeacherActions,
  GuitarNotesTeacherState,
} from '../../../state-machines/guitar-notes-teacher';

interface GuitarNotesTeacherViewProps {
  state: GuitarNotesTeacherState;
  actions: GuitarNotesTeacherActions;
}

export type { GuitarNotesTeacherViewProps };
