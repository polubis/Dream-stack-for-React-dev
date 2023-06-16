import type { Id, Login, Password, DateStamp } from './general';

interface AccountDto {
  id: Id;
  stamp: DateStamp;
}

type SignInResponse = AccountDto;
interface SignInPayload {
  login: Login;
  password: Password;
}

type SignOutResponse = void;

export type { SignInResponse, AccountDto, SignInPayload, SignOutResponse };
