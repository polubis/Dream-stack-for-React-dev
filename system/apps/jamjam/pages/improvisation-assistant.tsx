import NextLink from 'next/link';

import { Navigation, Link } from '@system/figa-ui';

import { GuitarFretboard } from '../components';

const ImprovisationAssistant = () => {
  return (
    <>
      <Navigation
        logo={<div>here will be logo</div>}
        links={[
          <Link variant="h6" key={0}>
            <NextLink key={0} href="/improvisation-assistant">
              Improvisation
            </NextLink>
          </Link>,
        ]}
        action={<div>Some action</div>}
      />
      <div
        style={{
          padding: '24px',
        }}
      >
        <GuitarFretboard
          notation="bmoll"
          guitar={{
            fretsCount: 24,
            tuning: [
              {
                id: 1,
                octave: 3,
              },
              {
                id: 1,
                octave: 3,
              },
              {
                id: 1,
                octave: 3,
              },
              {
                id: 1,
                octave: 3,
              },
              {
                id: 1,
                octave: 3,
              },
              {
                id: 1,
                octave: 3,
              },
            ],
            strings: [
              {
                notes: [
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                ],
                number: 1,
              },
              {
                notes: [
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                ],
                number: 1,
              },
              {
                notes: [
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                  { id: 1, octave: 1 },
                  { id: 2, octave: 1 },
                  { id: 3, octave: 1 },
                  { id: 4, octave: 1 },
                  { id: 5, octave: 1 },
                  { id: 6, octave: 1 },
                ],
                number: 1,
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default ImprovisationAssistant;
