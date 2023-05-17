import NextLink from 'next/link';
import { Navigation, Link } from '@system/figa-ui';

const ImprovisationAssistant = () => {
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
    </>
  );
};

export default ImprovisationAssistant;
