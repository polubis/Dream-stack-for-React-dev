import type { SignOutResponse, SignInPayload, SignInResponse } from '../models';
import { pst } from './instance';

export const signOut = async (): Promise<SignOutResponse> => {
  const { data } = await pst<SignOutResponse>('Account/SignOut');

  return data;
};

export const signIn = async (
  payload: SignInPayload
): Promise<SignInResponse> => {
  await pst<SignInResponse>('Account/SignIn', payload);
};
