import { Box, Button } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { useSignInStore } from '../../store/sign-in';
import { UserPopover } from './user-popover';

const SignInButton = () => {
  const lang = useLang();
  const { is } = useSignInStore();

  if (is === 'busy') {
    return (
      <Button size={2} loading>
        Sign In
      </Button>
    );
  }

  return (
    <Link title="Sign In" href={`/${lang}/sign-in/`}>
      <Button size={2}>Sign In</Button>
    </Link>
  );
};

const RegisterButton = () => {
  const lang = useLang();

  return (
    <Link title="Sign Up" href={`/${lang}/register/`}>
      <Button variant="ghost" motive="tertiary" size={2}>
        Sign Up
      </Button>
    </Link>
  );
};

const UserSection = () => {
  const { is } = useAuthStore();

  if (is === 'idle') {
    return (
      <Box orientation="row" spacing={[150]}>
        <Button size={2} variant="ghost" disabled>
          Sign Up
        </Button>
        <Button size={2} disabled>
          Sign In
        </Button>
      </Box>
    );
  }

  if (is === 'authorized') {
    return <UserPopover />;
  }

  return (
    <Box orientation="row" spacing={[150]}>
      {is === 'unauthorized' && <RegisterButton />}
      <SignInButton />
    </Box>
  );
};

export { UserSection };
