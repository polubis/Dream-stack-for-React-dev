import { Button } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { useSignInStore } from '../../store/sign-in';
import { useSignOutStore } from '../../store/sign-out';

const SignInButton = () => {
  const lang = useLang();
  const { key } = useSignInStore();

  if (key === 'pending') {
    return <Button>Wait...</Button>;
  }

  return (
    <Link href={`/${lang}/sign-in/`}>
      <Button>Sign In</Button>
    </Link>
  );
};

const SignOutButton = () => {
  const { key, signOut } = useSignOutStore();

  if (key === 'pending') {
    return <Button>Wait...</Button>;
  }

  return <Button onClick={signOut}>Sign Out</Button>;
};

const UserSection = () => {
  const { key } = useAuthStore();

  if (key === 'idle') {
    return <Button>Checking...</Button>;
  }

  if (key === 'authorized') {
    return <SignOutButton />;
  }

  return <SignInButton />;
};

export { UserSection };
