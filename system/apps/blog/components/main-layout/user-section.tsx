import { Box, TopNavItem } from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { UserPopover } from './user-popover';
import { usePathname } from 'next/navigation';

const UserSection = () => {
  const { is } = useAuthStore();
  const pathname = usePathname();
  const lang = useLang();

  if (is === 'idle') {
    return (
      <Box orientation="row" spacing={[150]}>
        <TopNavItem disabled>Sign Up</TopNavItem>
        <TopNavItem disabled>Sign In</TopNavItem>
      </Box>
    );
  }

  if (is === 'authorized') {
    return <UserPopover />;
  }

  return (
    <Box orientation="row" spacing={[150]}>
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
    </Box>
  );
};

export { UserSection };
