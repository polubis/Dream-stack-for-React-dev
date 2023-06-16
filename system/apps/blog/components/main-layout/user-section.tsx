import { Button, Font } from '@system/figa-ui';
import { useAuthStore } from '../../store';
import { Link } from '../link';
import { useLang } from '../../utils';

const UserSection = () => {
  const authStore = useAuthStore();
  const lang = useLang()

  if (authStore.key === 'signed-in') {
    return <Button onClick={authStore.signOut}>Sign Out</Button>;
  }

  if (authStore.key === 'signed-out' || authStore.key === 'not-signed-in') {
    return (
      <Link href={`/${lang}/sign-in/`}>
        <Button>Join us</Button>
      </Link>
    );
  }

  return <Font variant="b2">Checking...</Font>;
};

export { UserSection };
