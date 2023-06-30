import { Box, Button, Font, Input } from '@system/figa-ui';
import { useRef } from 'react';
import { get } from '@system/blog-selectors';

const SignInForm = () => {
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <Box spacing={[400, 150, 400]} maxWidth="320px" margin="auto">
      <Font variant="h6">Sign in into your account</Font>
      <Input
        data-i={get('sign-in-login-input')}
        ref={login}
        autoFocus
        placeholder="Login*"
      />
      <Input
        data-i={get('sign-in-password-input')}
        ref={password}
        type="password"
        placeholder="Password*"
      />
      <Button data-i={get('sign-in-confirm-btn')}>Confirm</Button>
    </Box>
  );
};

export { SignInForm };
