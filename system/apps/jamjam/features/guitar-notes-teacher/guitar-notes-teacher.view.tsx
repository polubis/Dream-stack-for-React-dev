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
  Select,
} from '@system/figa-ui';

import { GuitarFretboard, UnobviousNoteButton } from '../../components';
import { getNoteSymbol, type NoteNotation } from '../../domain';

import { getCurrentQuestion } from './guitar-notes-teacher.selectors';
import {
  AdriansLink,
  DreamStackRepoLink,
  PlatformBoardLink,
  PlatformLink,
  PlatformLinkedInLink,
  PlatformRepoLink,
} from './components';
import type { GuitarNotesTeacherViewProps } from './guitar-notes-teacher.defs';

const commonBoxProps: Partial<BoxProps> = {
  spacing: [150, 500],
  padding: [350, 350, 350, 350],
  margin: 'auto',
  maxWidth: '450px',
};

const GuitarNotesTeacherView = ({
  state,
  actions,
}: GuitarNotesTeacherViewProps) => {
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
          action={<PlatformLink variant="h6">Check our platform</PlatformLink>}
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
          <Box {...commonBoxProps} spacing={[150, 500, 700]}>
            <Font variant="h6">Setup your game!</Font>
            <Font variant="b1">
              Move a few sliders and start playing guitarist.
            </Font>
            <Select<NoteNotation>
              value={state.settings.notation}
              onChange={actions.setNotation}
              options={[
                {
                  key: 'bmoll',
                  child: <>Bmoll (Db, Gb, ...etc)</>,
                },
                {
                  key: 'sharp',
                  child: <>Sharp (C#, D#, ...etc)</>,
                },
              ]}
            />
            <Button onClick={actions.counting}>Start!</Button>
          </Box>
        </Modal>
      )}

      {state.key === 'counting' && (
        <Modal>
          <Box center spacing={[150]} padding={[350, 250, 350, 250]}>
            <ProgressCircle ms={3000} onEnd={actions.started} />
            <Font variant="b2">
              Prepare yourself! We will start for second...
            </Font>
          </Box>
        </Modal>
      )}

      {(state.key === 'started' || state.key === 'playing') && (
        <Box padding={[350, 250, 350, 250]}>
          <GuitarFretboard
            notation={state.settings.notation}
            guitar={state.guitar}
            NoteComponent={UnobviousNoteButton}
            onNoteClick={actions.answerQuestion}
          />
          <Box center spacing={[150]} padding={[350, 250, 350, 250]}>
            <Font variant="h6">Find {getCurrentQuestion(state)} note!</Font>
            <ProgressCircle
              key={state.answers.length}
              ms={10000}
              onEnd={() => actions.answerQuestion()}
            />
          </Box>
        </Box>
      )}

      {state.key === 'finished' && (
        <Box
          spacing={[250, 100, 100, 300, 100, 300, 300, 100, 300]}
          padding={[350, 250, 350, 250]}
          maxWidth="600px"
          margin="auto"
        >
          <Font variant="h6">Thanks a lot for participating in the game!</Font>
          <Font variant="b1">
            Your questions:{' '}
            {state.summary.result
              .map(({ question }) =>
                getNoteSymbol(question, state.settings.notation)
              )
              .join(' ')}
          </Font>
          <Font variant="b1">
            Your answers:{' '}
            {state.summary.result
              .map(({ answer }) =>
                answer ? getNoteSymbol(answer, state.settings.notation) : 'None'
              )
              .join(' ')}
          </Font>
          <Font variant="b1">
            Your score:{' '}
            {state.summary.result
              .map((result) => (result.correct ? '✅' : '❌'))
              .join(' ')}
          </Font>
          <Font variant="b1">
            If you liked the presentation, the code or the way I told the story
            - watch me on LinkedIn for more.
          </Font>
          <Font variant="b1">
            Below links to community profiles, discord and the platform I am
            creating with my community.
          </Font>
          <Box
            spacing={[150, 150, 150, 150]}
            padding={[350, 250, 350, 250]}
            variant="outlined"
          >
            <AdriansLink variant="b1" motive="primary">
              Adrian Połubiński on LinkedIn
            </AdriansLink>
            <PlatformLinkedInLink variant="b1" motive="primary">
              GreenOn Software LinkedIn
            </PlatformLinkedInLink>
            <PlatformLink variant="b1" motive="primary">
              Check our platform
            </PlatformLink>
            <DreamStackRepoLink variant="b1" motive="primary">
              Our repository with this code
            </DreamStackRepoLink>
            <PlatformRepoLink variant="b1" motive="primary">
              Our platform repository
            </PlatformRepoLink>
          </Box>
          <Font variant="b1">
            Dont be afraid to join us. We learn together by doing projects
            together. We provide designs, written requirements, help in looking
            for the first job, event, materials, the opportunity to work on the
            project and add it to the portfolio, and all this for free.
          </Font>
          <PlatformBoardLink variant="b1" motive="primary">
            Our board
          </PlatformBoardLink>
          <Button onClick={actions.settings}>Play again!</Button>
        </Box>
      )}
    </Layout>
  );
};

export { GuitarNotesTeacherView };
