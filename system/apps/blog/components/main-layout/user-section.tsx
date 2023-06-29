import { Button } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { useSignInStore } from '../../store/sign-in';
import { useSignOutStore } from '../../store/sign-out';

const signInButtonId = 'sign-in-button'
const signOutButtonId = 'sign-out-button'

const SignInButton = () => {
  const lang = useLang();
  const { key } = useSignInStore();

  if (key === 'pending') {
    return <Button data-i={signInButtonId} loading>Sign In</Button>;
  }

  return (
    <Link href={`/${lang}/sign-in/`}>
      <Button className={signInButtonId} data-i={signInButtonId}>Sign In</Button>
    </Link>
  );
};

const SignOutButton = () => {
  const { key, signOut } = useSignOutStore();

  if (key === 'pending') {
    return <Button data-i={signOutButtonId} loading>Sign Out</Button>;
  }

  return <Button onClick={signOut} data-i={signOutButtonId}>Sign Out</Button>;
};

const UserSection = () => {
  const { key } = useAuthStore();

  if (key === 'idle') {
    return <Button data-i={signInButtonId} disabled>Sign In</Button>;
  }

  if (key === 'authorized') {
    return <SignOutButton />;
  }

  return <SignInButton />;
};

export { UserSection };