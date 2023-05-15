import NextLink from 'next/link';

import { Navigation, Link } from '@system/figa-ui';

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
      <div>Improvisation asistant</div>
    </>
  );
};

export default ImprovisationAssistant;
