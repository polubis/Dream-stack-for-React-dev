import {
  Box,
  Button,
  HalfMoonIcon,
  SunIcon,
  useThemeProvider,
} from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { useSignInStore } from '../../store/sign-in';
import { get } from '@system/blog-selectors';
import { UserPopover } from './user-popover';

const ThemeSwitcher = ({ disabled }: { disabled?: boolean }) => {
  const theme = useThemeProvider();

  return (
    <Button
      size={2}
      shape="rounded"
      disabled={disabled}
      onClick={() => theme.setTheme(theme.key === 'dark' ? 'light' : 'dark')}
    >
      {theme.key === 'dark' ? <SunIcon /> : <HalfMoonIcon />}
    </Button>
  );
};

const SignInButton = () => {
  const lang = useLang();
  const { key } = useSignInStore();

  if (key === 'pending') {
    return (
      <Button size={2} data-i={get('app-nav-sign-in-btn')} loading>
        Sign In
      </Button>
    );
  }

  return (
    <Link title="Sign In" href={`/${lang}/sign-in/`}>
      <Button size={2} data-i={get('app-nav-sign-in-btn')}>
        Sign In
      </Button>
    </Link>
  );
};

const RegisterButton = () => {
  const lang = useLang();

  return (
    <Link title="Register" href={`/${lang}/register/`}>
      <Button size={2} data-i={get('app-nav-register-btn')}>
        Register
      </Button>
    </Link>
  );
};

const UserSection = () => {
  const { key } = useAuthStore();

  if (key === 'idle') {
    return (
      <Box orientation="row" spacing={[150, 150]}>
        <ThemeSwitcher disabled />
        <Button size={2} data-i={get('app-nav-register-btn')} disabled>
          Register
        </Button>
        <Button size={2} data-i={get('app-nav-sign-in-btn')} disabled>
          Sign In
        </Button>
      </Box>
    );
  }

  if (key === 'authorized') {
    return <UserPopover />;
  }

  return (
    <Box orientation="row" spacing={[150, 150]}>
      <ThemeSwitcher />
      {key === 'unauthorized' && <RegisterButton />}
      <SignInButton />
    </Box>
  );
};

export { UserSection };
