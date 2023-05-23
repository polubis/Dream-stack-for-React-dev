import { useMachine } from '../../state-machines/guitar-notes-teacher';

import { GuitarNotesTeacherView } from './views';

const GuitarNotesTeacher = () => {
  const machine = useMachine();

  return <GuitarNotesTeacherView {...machine} />;
};

export { GuitarNotesTeacher };
