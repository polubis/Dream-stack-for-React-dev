import { SignInPayload } from '@system/blog-api-models';
import { AccountModel } from '@system/blog-models';

interface Actions {
  check: () => Promise<void>;
  signIn: (payload: SignInPayload) => Promise<void>;
  signOut: () => void;
}

interface Idle extends Actions {
  key: 'idle';
}

interface Checking extends Actions {
  key: 'checking';
}

interface NotSignedIn extends Actions {
  key: 'not-signed-in';
}

interface SigningIn extends Actions {
  key: 'signing-in';
}

interface SignedIn extends Actions {
  key: 'signed-in';
  account: AccountModel;
}

interface SignInError extends Actions {
  key: 'sign-in-error';
  message: string;
}

interface SigningOut extends Actions {
  key: 'signing-out';
}

interface SignedOut extends Actions {
  key: 'signed-out';
}

interface SignOutError extends Actions {
  key: 'sign-out-error';
}

type AuthStoreState =
  | Idle
  | Checking
  | NotSignedIn
  | SigningIn
  | SignedIn
  | SignInError
  | SigningOut
  | SignedOut
  | SignOutError;

export type { AuthStoreState };
