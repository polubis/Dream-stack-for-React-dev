import NextLink from 'next/link';
import {
  Navigation,
  Link,
  Modal,
  Font,
  Button,
  ProgressCircle,
} from '@system/figa-ui';

import { GuitarFretboard } from '../components';
import { useMachine } from '../state-machines/guitar-notes-teacher';

const GuitarNotesTeacher = () => {
  const [state, actions] = useMachine();

  return (
    <>
      <Navigation
        logo={<div>here will be logo</div>}
        links={[
          <Link variant="h6" key={0}>
            <NextLink href="/improvisation-assistant">Improvisation</NextLink>
          </Link>,
          <Link variant="h6" key={1}>
            <NextLink href="/guitar-notes-teacher">Learn guitar notes</NextLink>
          </Link>,
        ]}
        action={<div>Some action</div>}
      />

      {state.key !== 'playing' && state.key !== 'started' && (
        <>
          <Font variant="h6">Hi, welcome! Mr Van Halen</Font>
          <Font variant="b1">
            Take part in a fascinating sound guessing game. Learn our way to
            learn the fluency of an instrument.
          </Font>
          <Button onClick={actions.initial}>See our game!</Button>
        </>
      )}

      {state.key === 'initial' && (
        <Modal onClose={actions.idle}>
          <Font variant="h6">How does it work?</Font>
          <Font variant="b1">
            You will have the opportunity to choose the game mode. After saving
            the settings - a countdown will be started, after which the game
            will start.
          </Font>
          <Button onClick={actions.settings}>Continue</Button>
        </Modal>
      )}

      {state.key === 'settings' && (
        <Modal onClose={actions.idle}>
          <Font variant="h6">Setup your game!</Font>
          <Font variant="b1">
            Move a few sliders and start playing guitarist
          </Font>
          <Button onClick={actions.counting}>Start!</Button>
        </Modal>
      )}

      {state.key === 'counting' && (
        <Modal>
          <ProgressCircle ms={1000} onEnd={actions.started} />
        </Modal>
      )}

      {(state.key === 'started' || state.key === 'playing') && (
        <>
          <Font variant="h5">{state.questions.join(',')}</Font>

          <Font variant="h5">{state.answers.join(',')}</Font>

          <ProgressCircle
            key={state.answers.length}
            ms={10000}
            onEnd={actions.timeEnd}
          />

          <GuitarFretboard
            notation="bmoll"
            guitar={state.guitar}
            onNoteClick={actions.answerQuestion}
          />
        </>
      )}
    </>
  );
};

export default GuitarNotesTeacher;
