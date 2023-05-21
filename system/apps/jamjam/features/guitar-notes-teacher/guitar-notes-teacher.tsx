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
  Button,
  type BoxProps,
} from '@system/figa-ui';

import { GuitarFretboard, UnobviousNoteButton } from '../../components';
import {
  getCurrentQuestion,
  useMachine,
} from '../../state-machines/guitar-notes-teacher';

const commonBoxProps: Partial<BoxProps> = {
  spacing: [150, 500],
  padding: [350, 350, 350, 350],
  margin: 'auto',
  maxWidth: '450px',
};

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
                Check our platform!
              </a>
            </Link>
          }
        />
      }
    >
      {state.key === 'idle' && (
        <Box {...commonBoxProps}>
          <Font variant="h6">Hi, welcome! Mr Van Halen</Font>
          <Font variant="b1">
            Take part in a fascinating sound guessing game. Learn our way to
            learn the fluency of an instrument.
          </Font>
          <Button onClick={actions.initial}>See our game!</Button>
        </Box>
      )}

      {state.key === 'initial' && (
        <Modal onClose={actions.idle}>
          <Box {...commonBoxProps}>
            <Font variant="h6">How does it work?</Font>
            <Font variant="b1">
              You will have the opportunity to choose the game mode. After
              saving the settings - a countdown will be started, after which the
              game will start.
            </Font>
            <Button onClick={actions.settings}>Continue</Button>
          </Box>
        </Modal>
      )}

      {state.key === 'settings' && (
        <Modal onClose={actions.idle}>
          <Box {...commonBoxProps}>
            <Font variant="h6">Setup your game!</Font>
            <Font variant="b1">
              Move a few sliders and start playing guitarist.
            </Font>
            <Button onClick={actions.counting}>Start!</Button>
          </Box>
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
            notation="sharp"
            guitar={state.guitar}
            NoteComponent={UnobviousNoteButton}
            onNoteClick={actions.answerQuestion}
          />
          <Box orientation="center-column" spacing={[150]}>
            <Font variant="h6">Find {getCurrentQuestion(state)} note!</Font>
            <ProgressCircle
              key={state.answers.length}
              ms={1111}
              onEnd={() => actions.answerQuestion()}
            />
          </Box>
        </Box>
      )}

      {state.key === 'finished' && (
        <Box spacing={[250, 300]} maxWidth="600px" margin="auto">
          <Font variant="h6">Thanks a lot for participating in the game!</Font>
          <Font variant="b1">
            If you liked the presentation, the code or the way I told the story
            - watch me on LinkedIn for more. Below links to community profiles,
            discord and the platform I am creating with my community.
          </Font>
          <Box spacing={[150, 150]} variant="outlined">
            <Link variant="b1" motive="primary">
              <a
                href="https://www.linkedin.com/in/adrian-po%C5%82ubi%C5%84ski-281ab2172"
                target="_blank"
                rel="noreferrer"
              >
                Adrian Połubiński on LinkedIn
              </a>
            </Link>
            <Link variant="b1" motive="primary">
              <a
                href="https://www.linkedin.com/company/greenon-software/"
                target="_blank"
                rel="noreferrer"
              >
                GreenOn Software LinkedIn
              </a>
            </Link>
            <Link variant="b1" motive="primary">
              <a
                href="https://greenonsoftware.com/"
                target="_blank"
                rel="noreferrer"
              >
                Check our platform!
              </a>
            </Link>
          </Box>
        </Box>
      )}
    </Layout>
  );
};

export { GuitarNotesTeacher };
