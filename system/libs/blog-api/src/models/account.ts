import type { Login, Password } from './general';

type SignInResponse = void;
interface SignInPayload {
  login: Login;
  password: Password;
}

type SignOutResponse = void;

export type { SignInResponse, SignInPayload, SignOutResponse };
