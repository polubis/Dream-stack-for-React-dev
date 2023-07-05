import { Avatar, Box, Button, CloseIcon, Font, Popover } from '@system/figa-ui';
import { useSignOutStore } from '../../store/sign-out';
import { get } from '@system/blog-selectors';

const UserPopover = () => {
  const { key, signOut } = useSignOutStore();

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
        >
          <Box orientation="row" between>
            <Font variant="h5" motive="primary">
              Hi Piotr!
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
              <Font variant="h6">Piotr Kowalski</Font>
              <Font variant="b1">piotr@wp.pl</Font>
            </Box>
          </Box>

          <Box orientation="row" right spacing={[200, 200, 200]}>
            <Box spacing={[50]}>
              <Font variant="b2">12</Font>
              <Font variant="b1" motive="primary">
                articles
              </Font>
            </Box>
            <Box spacing={[50]}>
              <Font variant="b2">Admin</Font>
              <Font variant="b1" motive="primary">
                role
              </Font>
            </Box>
            <Box spacing={[50]}>
              <Font variant="b2">12</Font>
              <Font variant="b1" motive="primary">
                reviews
              </Font>
            </Box>
          </Box>

          <Box right>
            <Button
              variant="outlined"
              onClick={signOut}
              data-i={get('app-nav-sign-out-btn')}
              loading={key === 'pending'}
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
