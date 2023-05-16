import { useMemo, useCallback } from 'react';
import styled from 'styled-components';
import c from 'classnames';
import { center, column, size, tokens } from '@system/figa-ui';

import type { Note, NoteId, NoteOctave } from '../../domain';

import type { GuitarFretboardProps, NoteButtonProps } from './defs';
import { NoteButton } from './note-button';
import { DEFAULT_FRETS_MARKERS } from './consts';
import { GuitarFretboardStrings } from './guitar-fretboard-strings';

const Container = styled.div`
  overflow-y: auto;

  .guitar-fretboard-frets {
    display: flex;
    width: max-content;
    position: relative;
    margin: 0 auto;

    .guitar-fretboard-strings {
      ${column()}
      ${size('100%')}
      padding: ${tokens.spacing[200]} 0;
      position: absolute;

      .guitar-fretboard-string-wrapper {
        ${center()}
        ${size(tokens.spacing[500], '100%')}

        &:not(:last-of-type) {
          margin-bottom: ${tokens.spacing[150]};
        }

        .guitar-fretboard-string {
          flex-shrink: 0;
          width: 100%;
          background: ${tokens.gray[200]};
        }
      }
    }

    .guitar-fretboard-fret {
      ${column()}
      align-items: center;
      padding: ${tokens.spacing[200]};
      background: ${tokens.blue[600]};
      border-left: ${tokens.spacing[25]} solid ${tokens.dark[100]};
      border-right: ${tokens.spacing[25]} solid ${tokens.dark[100]};

      &.marked {
        background: ${tokens.dark[50]};
      }

      &:first-of-type {
        border-left: none;
        background: none;
        border-right: ${tokens.spacing[50]} solid ${tokens.gray[200]};
      }

      &:nth-of-type(2) {
        border-left: none;
      }

      &:last-of-type {
        border-right: none;
      }

      .guitar-fretboard-fret-note {
        z-index: ${tokens.z[50]};
        border: ${tokens.spacing[25]} solid ${tokens.dark[100]};

        &:not(:last-of-type) {
          margin-bottom: ${tokens.spacing[150]};
        }

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`;

const GuitarFretboard = ({
  className,
  guitar,
  fretsMarkers = DEFAULT_FRETS_MARKERS,
  notation,
  onNoteClick,
}: GuitarFretboardProps) => {
  const handleNoteClick: NoteButtonProps['onClick'] = useCallback((e) => {
    const { noteId, noteOctave } = e.currentTarget.dataset;

    if (noteId === undefined || noteOctave === undefined) return;

    onNoteClick &&
      onNoteClick({
        id: +noteId as NoteId,
        octave: +noteOctave as NoteOctave,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { fretsCount, strings } = guitar;

  const frets = useMemo(() => {
    return Array.from({ length: fretsCount }).reduce<Note[][]>(
      (acc, _, idx): Note[][] => [
        ...acc,
        strings.map((string) => string.notes[idx]),
      ],
      []
    );
  }, [fretsCount, strings]);

  const markers = useMemo(() => {
    return fretsMarkers.reduce<Record<number, boolean>>((acc, marker) => {
      acc[marker] = true;
      return acc;
    }, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className={c('guitar-fretboard', className)}>
      <div className="guitar-fretboard-frets">
        {frets.map((notes, fretIdx) => {
          const shouldBeMarked = !!markers[fretIdx];

          return (
            <div
              key={fretIdx}
              className={c('guitar-fretboard-fret', {
                marked: shouldBeMarked,
              })}
            >
              {notes.map((note) => (
                <NoteButton
                  key={note.id}
                  noteId={note.id}
                  noteOctave={note.octave}
                  notation={notation}
                  onClick={handleNoteClick}
                />
              ))}
            </div>
          );
        })}

        <GuitarFretboardStrings strings={strings} />
      </div>
    </Container>
  );
};

export { GuitarFretboard };
