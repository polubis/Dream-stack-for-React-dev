import type {
  SignInPayload,
  SignInResponse,
  SignOutResponse,
} from '../../models';
import { getPath } from '../core';
import { blogAPI } from '../instances';

const signIn = async (payload: SignInPayload): Promise<SignInResponse> => {
  await blogAPI.post<SignInResponse>(getPath('Account/SignIn'), payload);
};

const signOut = async (): Promise<SignOutResponse> => {
  await blogAPI.post<SignOutResponse>(getPath('Account/SignOut'));
};

export { signIn, signOut };
