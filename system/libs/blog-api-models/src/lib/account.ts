import type {
  Email,
  Login,
  Password,
  Response,
  SignedInUserDto,
} from './general';

type SignInResponse = Response<SignedInUserDto>;
interface SignInPayload {
  login: Login;
  password: Password;
}

type SignOutResponse = void;

type RegisterResponse = void;
interface RegisterPayload {
  login: Login;
  email: Email;
  password: Password;
  confirmPassword: Password;
}

export type {
  SignInResponse,
  SignInPayload,
  SignOutResponse,
  RegisterResponse,
  RegisterPayload,
};
