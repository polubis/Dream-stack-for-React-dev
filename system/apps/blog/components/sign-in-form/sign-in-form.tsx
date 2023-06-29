import { Alert, Box, Button, Font, Input } from '@system/figa-ui';
import { useSignInStore } from '../../store/sign-in';
import { useState } from 'react';

const SignInForm = () => {
  const signInStore = useSignInStore();
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
          placeholder="Login*"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          value={password}
          type="password"
          placeholder="Password*"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button loading={signInStore.key === 'pending'} onClick={handleSignIn}>
          Confirm
        </Button>
        {signInStore.key === 'error' && (
          <Alert type="error">{signInStore.response.message}</Alert>
        )}
        {signInStore.key === 'ok' && (
          <Alert type="ok">You are logged in!</Alert>
        )}
      </Box>
    </>
  );
};

export { SignInForm };