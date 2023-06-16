import type { SignOutResponse } from '@system/blog-api-models';
import { url } from './url';

export const signOut = async (): Promise<SignOutResponse> => {
  await fetch(url('/api/Account/SignOut'), {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
