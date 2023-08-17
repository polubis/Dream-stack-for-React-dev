import { Avatar, Box, Button, CloseIcon, Font, Popover } from '@system/figa-ui';
import { useSignOutStore } from '../../store/sign-out';
import { get } from '@system/blog-selectors';
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'next/navigation';
import { AdminsOnly } from '../../core';

const UserPopover = () => {
  const authStore = useAuthStore();
  const router = useRouter();
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
          spacing={[200, 400, 400]}
          padding={[250, 250, 250, 250]}
          variant="outlined"
          minWidth="280px"
          maxWidth="420px"
        >
          <Box orientation="row" between>
            <Font variant="h5" motive="primary">
              Hi, hello!
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

          <Box orientation="row" right spacing={[250, 250]}>
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
                variant="outlined"
                onClick={() => router.push('/en/admin')}
                loading={signOutStore.key === 'pending'}
              >
                Admin panel
              </Button>
            </AdminsOnly>
            <Button
              variant="outlined"
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
