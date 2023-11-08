import {
  Avatar,
  Box,
  Button,
  CloseIcon,
  Font,
  Popover,
  Link as FigaUILink,
} from '@system/figa-ui';
import { useSignOutStore } from '../../store/sign-out';
import { get } from '@system/blog-selectors';
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'next/navigation';
import { AdminsOnly } from '../../core';
import { Link } from '../link';
import { useLang } from '../../dk';

const Content = () => {
  const { close } = Popover.use();
  const authStore = useAuthStore();
  const router = useRouter();
  const lang = useLang();
  const signOutStore = useSignOutStore();

  return (
    <Popover.Content>
      <Box
        spacing={[200, 400, 400, 100, 400]}
        padding={[250, 250, 250, 250]}
        variant="outlined"
        minWidth="280px"
        maxWidth="420px"
      >
        <Box orientation="row" between>
          <Font variant="h5" motive="primary">
            Hi, {authStore.user.username}!
          </Font>
          <Button size={1} shape="rounded" onClick={close}>
            <CloseIcon />
          </Button>
        </Box>

        <Box orientation="row" spacing={[200]}>
          <Avatar
            size="big"
            alt="My alt text"
            src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
          />
          <Box spacing={[50]}>
            <Font variant="h6" data-i={get('app-nav-user-username')}>
              {authStore.user.username}
            </Font>
            <Font variant="b1" data-i={get('app-nav-user-email')}>
              {authStore.user.email}
            </Font>
          </Box>
        </Box>

        <Box spacing={[100, 100]}>
          <Font variant="b3">Navigation</Font>
          <FigaUILink variant="b1">
            <Link href={`/${lang}/your-articles`}>Profile</Link>
          </FigaUILink>
          <FigaUILink variant="b1">
            <Link href={`/${lang}/your-articles`}>Your articles</Link>
          </FigaUILink>
        </Box>

        <Font variant="b3">Information / statistics</Font>

        <Box orientation="row" spacing={[250, 250]}>
          <Box spacing={[50]}>
            <Font variant="b2">12</Font>
            <Font variant="b1" motive="primary">
              Articles
            </Font>
          </Box>
          <Box spacing={[50]}>
            <Font variant="b2" data-i={get('app-nav-user-roles')}>
              {authStore.user.roles.join(', ')}
            </Font>
            <Font variant="b1" motive="primary">
              Roles
            </Font>
          </Box>
          <Box spacing={[50]}>
            <Font variant="b2">12</Font>
            <Font variant="b1" motive="primary">
              Reviews
            </Font>
          </Box>
        </Box>

        <Box right spacing={[200]} orientation="row">
          <AdminsOnly>
            <Button
              size={2}
              variant="outlined"
              onClick={() => router.push('/en/admin')}
              loading={signOutStore.key === 'pending'}
            >
              Admin panel
            </Button>
          </AdminsOnly>
          <Button
            variant="outlined"
            size={2}
            onClick={signOutStore.signOut}
            data-i={get('app-nav-sign-out-btn')}
            loading={signOutStore.key === 'pending'}
          >
            Sign Out
          </Button>
        </Box>
      </Box>
    </Popover.Content>
  );
};

const Trigger = () => {
  const { toggle } = Popover.use();

  return (
    <Popover.Trigger>
      <Button shape="rounded" data-i={get('app-nav-user-avatar-btn')}>
        <Avatar
          alt="My alt text"
          src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
          onClick={toggle}
        />
      </Button>
    </Popover.Trigger>
  );
};

const UserPopover = () => {
  return (
    <Popover>
      <Trigger />
      <Content />
    </Popover>
  );
};

export { UserPopover };
