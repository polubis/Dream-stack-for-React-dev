import { Box, Button, Font, Input } from '@system/figa-ui';
import { useRef } from 'react';

const SignInForm = () => {
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <Box spacing={[400, 150, 400]} maxWidth="320px" margin="auto">
      <Font variant="h6">Sign in into your account</Font>
      <Input ref={login} autoFocus placeholder="Login*" />
      <Input ref={password} type="password" placeholder="Password*" />
      <Button>Confirm</Button>
    </Box>
  );
};

export { SignInForm };
