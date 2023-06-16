import type { SignInPayload, SignInResponse } from '@system/blog-api-models';
import { url } from './url';

export const signIn = async (
  payload: SignInPayload
): Promise<SignInResponse> => {
  await fetch(url('/api/Account/SignIn'), {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    id: '0',
    stamp: new Date().toISOString(),
  };
};
