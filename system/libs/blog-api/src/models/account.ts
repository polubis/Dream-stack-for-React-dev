import type { Login, Password } from './general';

type SignInResponse = void;
interface SignInPayload {
  login: Login;
  password: Password;
}

type SignOutResponse = void;

type RegisterResponse = void;
interface RegisterPayload {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type {
  SignInResponse,
  SignInPayload,
  SignOutResponse,
  RegisterResponse,
  RegisterPayload,
};
