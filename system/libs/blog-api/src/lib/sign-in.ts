import { pst } from './source';
import type { SignInPayload, SignInResponse } from '@system/blog-api-models';

export const signIn = pst<SignInResponse, SignInPayload>({
  url: '/api/Account/SignIn',
});
