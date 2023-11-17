import {
  Alert,
  Box,
  Button,
  Font,
  Input,
  ProgressCircle,
} from '@system/figa-ui';
import { useSignInStore } from '../../store/sign-in';
import { useSignOutStore } from '../../store/sign-out';
import { useState, useRef, useEffect } from 'react';
import { useMoveToRedirect } from '../../dk';
import { NotSignedInOnly, SignedInOnly } from '../../core';
import { InfoSection } from '../info-section';

const SignInForm = () => {
  const signInStore = useSignInStore();
  const signOutStore = useSignOutStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { redirect } = useMoveToRedirect('/your-articles');
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [justSignedIn, setJustSignedIn] = useState(false);

  const handleSignIn = async () => {
    await signInStore.signIn({
      login,
      password,
    });

    setJustSignedIn(true);
    timeout.current = setTimeout(redirect, 1000);
  };

  useEffect(() => {
    return () => {
      timeout.current && clearInterval(timeout.current);
    };
  }, []);

  return (
    <>
      <SignedInOnly>
        {justSignedIn ? (
          <Box margin="auto" center>
            <InfoSection
              title="You're signed in 💚"
              description="We're redirecting you..."
            />
            <ProgressCircle />
          </Box>
        ) : (
          <InfoSection
            title="You're already signed in 💚"
            description="Only testers 👨‍👦 are trying to double sign in..."
          />
        )}
      </SignedInOnly>

      <NotSignedInOnly>
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
          <Button
            loading={
              signInStore.key === 'pending' || signOutStore.key === 'pending'
            }
            onClick={handleSignIn}
          >
            Confirm
          </Button>
          {signInStore.key === 'error' && (
            <Alert type="error">{signInStore.error.message}</Alert>
          )}
        </Box>
      </NotSignedInOnly>
    </>
  );
};

export { SignInForm };
