import { Button } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { useSignInStore } from '../../store/sign-in';
import { useSignOutStore } from '../../store/sign-out';
import { get } from '@system/blog-selectors';

const SignInButton = () => {
  const lang = useLang();
  const { key } = useSignInStore();

  if (key === 'pending') {
    return (
      <Button data-i={get('app-nav-sign-in-btn')} loading>
        Sign In
      </Button>
    );
  }

  return (
    <Link href={`/${lang}/sign-in/`}>
      <Button data-i={get('app-nav-sign-in-btn')}>Sign In</Button>
    </Link>
  );
};

const SignOutButton = () => {
  const { key, signOut } = useSignOutStore();

  if (key === 'pending') {
    return (
      <Button data-i={get('app-nav-sign-out-btn')} loading>
        Sign Out
      </Button>
    );
  }

  return (
    <Button onClick={signOut} data-i={get('app-nav-sign-out-btn')}>
      Sign Out
    </Button>
  );
};

const UserSection = () => {
  const { key } = useAuthStore();

  if (key === 'idle') {
    return (
      <Button data-i={get('app-nav-sign-in-btn')} disabled>
        Sign In
      </Button>
    );
  }

  if (key === 'authorized') {
    return <SignOutButton />;
  }

  return <SignInButton />;
};

export { UserSection };
