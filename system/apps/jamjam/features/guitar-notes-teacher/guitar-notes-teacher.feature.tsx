import { useGuitarNotesTeacherFacade } from './use-guitar-notes-teacher.facade';
import { GuitarNotesTeacherView } from './guitar-notes-teacher.view';

const GuitarNotesTeacherFeature = () => {
  const machine = useGuitarNotesTeacherFacade();

  return <GuitarNotesTeacherView {...machine} />;
};

export { GuitarNotesTeacherFeature };
