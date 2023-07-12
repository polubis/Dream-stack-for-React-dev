import type {
  SignInPayload,
  SignInResponse,
  SignOutResponse,
  RegisterPayload,
  RegisterResponse,
} from '@system/blog-api-models';
import { getPath } from '../core';
import { blogAPI } from '../instances';

const signIn = async (payload: SignInPayload): Promise<SignInResponse> => {
  const { data } = await blogAPI.post<SignInResponse>(
    getPath('Account/SignIn'),
    payload
  );

  return data;
};

const signOut = async (): Promise<SignOutResponse> => {
  await blogAPI.post<SignOutResponse>(getPath('Account/SignOut'));
};

const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  await blogAPI.post<RegisterResponse>(getPath('Account/Register'), payload);
};

export { signIn, signOut, register };
