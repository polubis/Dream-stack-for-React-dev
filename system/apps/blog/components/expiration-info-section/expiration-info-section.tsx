import { Button } from '@system/figa-ui';
import { InfoSection } from '../info-section';
import Link from 'next/link';
import { useLang } from '../../dk';

const ExpirationInfo = () => {
  const lang = useLang();

  return (
    <InfoSection
      padding={[250, 250, 250, 250]}
      title="Your session expired 💤"
      description="Sign in again to explore our application 🔃"
      footer={
        <Link href={`/${lang}/sign-in/`}>
          <Button size={2}>Sign In again</Button>
        </Link>
      }
    />
  );
};

export { ExpirationInfo };
