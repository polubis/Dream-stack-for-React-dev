import type { SignInPayload } from '../../models';
import { getPath } from '../core';
import { blogAPI } from '../instances';
import { mockRegisterPayload } from '../test-utils';
import { register, signIn, signOut } from './account';

jest.mock('../instances');

describe('Account methods works when: ', () => {
  it('sign in endpoint is called with payload', async () => {
    const postSpy = jest.fn();

    jest.spyOn(blogAPI, 'post').mockImplementationOnce(postSpy);

    const PAYLOAD: SignInPayload = {
      login: 'login',
      password: 'password',
    };

    await signIn(PAYLOAD);

    expect(postSpy).toHaveBeenCalledTimes(1);
    expect(postSpy).toHaveBeenCalledWith(getPath('Account/SignIn'), PAYLOAD);
  });

  it('sign out method is called with payload', async () => {
    const postSpy = jest.fn();

    jest.spyOn(blogAPI, 'post').mockImplementationOnce(postSpy);

    await signOut();

    expect(postSpy).toHaveBeenCalledTimes(1);
    expect(postSpy).toHaveBeenCalledWith(getPath('Account/SignOut'));
  });

  it('register method is called with payload', async () => {
    const postSpy = jest.fn();

    jest.spyOn(blogAPI, 'post').mockImplementationOnce(postSpy);

    const payload = mockRegisterPayload();

    await register(payload);

    expect(postSpy).toHaveBeenCalledTimes(1);
    expect(postSpy).toHaveBeenCalledWith(getPath('Account/Register'), payload);
  });
});
