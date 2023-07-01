import { Alert, Box, Button, Font, Input } from '@system/figa-ui';
import { useSignInStore } from '../../store/sign-in';
import { useSignOutStore } from '../../store/sign-out';
import { useState } from 'react';
import { get } from '@system/blog-selectors';

const SignInForm = () => {
  const signInStore = useSignInStore();
  const signOutStore = useSignOutStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signInStore.signIn({
      login,
      password,
    });
  };

  return (
    <>
      <Box spacing={[400, 150, 400, 400]} maxWidth="320px" margin="auto">
        <Font variant="h6">Sign in into your account</Font>
        <Input
          value={login}
          autoFocus
          data-i={get('sign-in-login-input')}
          placeholder="Login*"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          value={password}
          type="password"
          data-i={get('sign-in-password-input')}
          placeholder="Password*"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          data-i={get('sign-in-confirm-btn')}
          loading={
            signInStore.key === 'pending' || signOutStore.key === 'pending'
          }
          onClick={handleSignIn}
        >
          Confirm
        </Button>
        {signInStore.key === 'error' && (
          <Alert data-i={get('sign-in-error-alert')} type="error">
            {signInStore.response.message}
          </Alert>
        )}
        {signInStore.key === 'ok' && (
          <Alert data-i={get('sign-in-ok-alert')} type="ok">
            You are logged in!
          </Alert>
        )}
      </Box>
    </>
  );
};

export { SignInForm };
