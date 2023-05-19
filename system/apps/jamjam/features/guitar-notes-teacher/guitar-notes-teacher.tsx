import NextLink from 'next/link';
import {
  Navigation,
  Link,
  Modal,
  ProgressCircle,
  Layout,
  Box,
  Font,
  Logo,
} from '@system/figa-ui';

import { GuitarFretboard } from '../../components';
import { useMachine } from '../../state-machines/guitar-notes-teacher';

import { IntroSection } from './components';

const GuitarNotesTeacher = () => {
  const [state, actions] = useMachine();

  return (
    <Layout
      full
      header={
        <Navigation
          logo={<Logo />}
          links={[
            <Link variant="h6" key={0}>
              <NextLink href="/">Learn guitar notes</NextLink>
            </Link>,
          ]}
          action={
            <Link variant="h6">
              <a
                href="https://greenonsoftware.com/"
                target="_blank"
                rel="noreferrer"
              >
                Check our blog!
              </a>
            </Link>
          }
        />
      }
    >
      {state.key === 'idle' && (
        <IntroSection
          header="Hi, welcome! Mr Van Halen"
          description="Take part in a fascinating sound guessing game. Learn our way to
          learn the fluency of an instrument."
          action="See our game!"
          onConfirm={actions.initial}
        />
      )}

      {state.key === 'initial' && (
        <Modal onClose={actions.idle}>
          <IntroSection
            header="How does it work?"
            description="You will have the opportunity to choose the game mode. After
            saving the settings - a countdown will be started, after which the
            game will start."
            action="Continue"
            onConfirm={actions.settings}
          />
        </Modal>
      )}

      {state.key === 'settings' && (
        <Modal onClose={actions.idle}>
          <IntroSection
            header="Setup your game!"
            description="Move a few sliders and start playing guitarist."
            action="Start!"
            onConfirm={actions.counting}
          />
        </Modal>
      )}

      {state.key === 'counting' && (
        <Modal>
          <Box orientation="center-column" spacing={[150]}>
            <ProgressCircle ms={3000} onEnd={actions.started} />
            <Font variant="b2">
              Prepare yourself! We will start for second...
            </Font>
          </Box>
        </Modal>
      )}

      {(state.key === 'started' || state.key === 'playing') && (
        <Box>
          <GuitarFretboard
            notation="bmoll"
            guitar={state.guitar}
            onNoteClick={actions.answerQuestion}
          />

          <Box orientation="center-column">
            <ProgressCircle
              key={state.answers.length}
              ms={10000}
              onEnd={actions.timeEnd}
            />
          </Box>
        </Box>
      )}
    </Layout>
  );
};

export { GuitarNotesTeacher };
