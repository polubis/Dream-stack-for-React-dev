import { Box, Button } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { useSignInStore } from '../../store/sign-in';
import { get } from '@system/blog-selectors';
import { UserPopover } from './user-popover';

const SignInButton = () => {
  const lang = useLang();
  const { key } = useSignInStore();

  console.log(key);

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

const RegisterButton = () => {
  const lang = useLang();
  return (
    <Link href={`/${lang}/register/`}>
      <Button data-i={get('app-nav-register-btn')}>Register</Button>
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

  return (
    <Box orientation="row" spacing={[250]}>
      {key === 'unauthorized' && <RegisterButton />}
      <SignInButton />
    </Box>
  );
};

export { UserSection };
