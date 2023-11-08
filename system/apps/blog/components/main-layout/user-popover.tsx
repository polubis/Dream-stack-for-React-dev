import {
  Avatar,
  Box,
  Button,
  CloseIcon,
  Font,
  Popover,
  Link as FigaUILink,
  tokens,
} from '@system/figa-ui';
import { useSignOutStore } from '../../store/sign-out';
import { get } from '@system/blog-selectors';
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'next/navigation';
import { AdminsOnly } from '../../core';
import { Link } from '../link';
import { useLang } from '../../dk';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto minmax(120px, 1fr);
  gap: ${tokens.spacing[200]};
  align-items: center;
`;

const UserPopover = () => {
  const authStore = useAuthStore();
  const router = useRouter();
  const lang = useLang();
  const signOutStore = useSignOutStore();

  return (
    <Popover
      trigger={({ toggle }) => (
        <Button shape="rounded" data-i={get('app-nav-user-avatar-btn')}>
          <Avatar
            alt="My alt text"
            src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
            onClick={toggle}
          />
        </Button>
      )}
    >
      {({ close }) => (
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

          <UserInfoContainer>
            <Avatar
              size="big"
              alt="My alt text"
              src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
            />
            <Box spacing={[50]}>
              <Font variant="h6" trim data-i={get('app-nav-user-username')}>
                {authStore.user.username}
              </Font>
              <Font variant="b1" trim data-i={get('app-nav-user-email')}>
                {authStore.user.email}
              </Font>
            </Box>
          </UserInfoContainer>

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
      )}
    </Popover>
  );
};

export { UserPopover };
