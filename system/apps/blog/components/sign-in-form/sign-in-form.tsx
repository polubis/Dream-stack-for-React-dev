import { Box, Button, Font, Input } from '@system/figa-ui';
import { useAuthStore } from '../../store';
import { useRef } from 'react';

const SignInForm = () => {
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const authStore = useAuthStore();

  const submit = () => {
    authStore.signIn({
      login: login.current.value,
      password: password.current.value,
    });
  };

  return (
    <Box spacing={[400, 150, 400]} maxWidth="280px">
      <Font variant="h6">Sign in into your account</Font>
      <Input ref={login} autoFocus placeholder="Login*" />
      <Input ref={password} type="password" placeholder="Password*" />
      <Button onClick={submit} disabled={authStore.key === 'checking'}>
        Confirm
      </Button>
    </Box>
  );
};

export { SignInForm };
