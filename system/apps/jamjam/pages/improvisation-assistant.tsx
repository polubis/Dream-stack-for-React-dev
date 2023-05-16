import NextLink from 'next/link';
import { Navigation, Link } from '@system/figa-ui';

import { GuitarFretboard } from '../components';
import { createGuitar } from '../domain';

const guitar = createGuitar({
  tuningName: 'E_STANDARD',
  tuningNotes: [
    { id: 5, octave: 4 },
    { id: 12, octave: 3 },
    { id: 8, octave: 3 },
    { id: 3, octave: 3 },
    { id: 10, octave: 2 },
    { id: 5, octave: 2 },
  ],
  hand: 'right',
  fretsCount: 25,
});

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
        <GuitarFretboard notation="bmoll" guitar={guitar} />
      </div>
    </>
  );
};

export default ImprovisationAssistant;
