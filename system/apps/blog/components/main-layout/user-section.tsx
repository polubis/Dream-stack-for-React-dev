import { Button } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { useSignInStore } from '../../store/sign-in';
import { get } from '@system/blog-selectors';
import { UserPopover } from './user-popover';

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
    return <UserPopover />;
  }

  return <SignInButton />;
};

export { UserSection };
