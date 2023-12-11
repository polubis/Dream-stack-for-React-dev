import {
  Box,
  Button,
  HalfMoonIcon,
  SunIcon,
  TopNavItem,
  useThemeProvider,
} from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { UserPopover } from './user-popover';
import { usePathname } from 'next/navigation';

const UserSection = () => {
  const { is } = useAuthStore();
  const pathname = usePathname();
  const lang = useLang();
  const theme = useThemeProvider();

  if (is === 'idle') {
    return (
      <Box orientation="row" spacing={[50, 50]}>
        <TopNavItem disabled>Sign Up</TopNavItem>
        <TopNavItem disabled>Sign In</TopNavItem>
        <Button
          disabled
          variant="ghost"
          shape="rounded"
          motive="tertiary"
          size={2}
        >
          <SunIcon />
        </Button>
      </Box>
    );
  }

  if (is === 'authorized') {
    return (
      <Box orientation="row" spacing={[150]}>
        <Button
          variant="ghost"
          size={2}
          shape="rounded"
          motive="tertiary"
          onClick={() =>
            theme.setTheme(theme.key === 'dark' ? 'light' : 'dark')
          }
        >
          {theme.key === 'dark' ? <SunIcon /> : <HalfMoonIcon />}
        </Button>
        <UserPopover />
      </Box>
    );
  }

  return (
    <Box orientation="row" spacing={[50, 50]}>
      <Link title="Sign Up" href={`/${lang}/register/`}>
        <TopNavItem active={pathname === `/${lang}/register`}>
          Sign Up
        </TopNavItem>
      </Link>
      <Link title="Sign In" href={`/${lang}/sign-in/`}>
        <TopNavItem active={pathname === `/${lang}/sign-in`}>
          Sign In
        </TopNavItem>
      </Link>
      <Button
        variant="ghost"
        size={2}
        shape="rounded"
        motive="tertiary"
        onClick={() => theme.setTheme(theme.key === 'dark' ? 'light' : 'dark')}
      >
        {theme.key === 'dark' ? <SunIcon /> : <HalfMoonIcon />}
      </Button>
    </Box>
  );
};

export { UserSection };
