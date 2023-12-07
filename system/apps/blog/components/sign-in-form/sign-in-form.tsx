import {
  Alert,
  Box,
  Button,
  Font,
  Input,
  ProgressCircle,
  useAlert,
} from '@system/figa-ui';
import { sign_in_store_actions, useSignInStore } from '../../store/sign-in';
import { useState, useRef, useEffect } from 'react';
import { useMoveToRedirect } from '../../dk';
import { NotSignedInOnly, SignedInOnly } from '../../core';
import { InfoSection } from '../info-section';

const SignInForm = () => {
  const signInStore = useSignInStore();
  const { redirect } = useMoveToRedirect('/articles');
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [justSignedIn, setJustSignedIn] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    return () => {
      timeout.current && clearInterval(timeout.current);
    };
  }, []);

  useEffect(() => {
    if (signInStore.is === 'ok') {
      alert.show({ children: 'Signed in', type: 'ok' });
      setJustSignedIn(true);
      timeout.current = setTimeout(() => {
        redirect();
        sign_in_store_actions.reset();
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInStore.is]);

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
            value={signInStore.form.values.login}
            autoFocus
            placeholder="Login*"
            onChange={(e) =>
              sign_in_store_actions.setField('login', e.target.value)
            }
          />
          <Input
            value={signInStore.form.values.password}
            type="password"
            placeholder="Password*"
            onChange={(e) =>
              sign_in_store_actions.setField('password', e.target.value)
            }
          />
          <Button
            loading={signInStore.is === 'busy'}
            disabled={signInStore.form.invalid}
            onClick={sign_in_store_actions.submit}
          >
            Confirm
          </Button>
          {signInStore.is === 'fail' && (
            <Alert type="error">{signInStore.error.message}</Alert>
          )}
        </Box>
      </NotSignedInOnly>
    </>
  );
};

export { SignInForm };
