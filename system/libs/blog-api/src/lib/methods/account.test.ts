import { getPath } from '../core';
import { blogAPI } from '../instances';
import {
  mockAxiosResponse,
  mockRegisterPayload,
  mockSignInPayload,
  mockSignInResponse,
} from '@system/blog-api-mocks';
import { register, signIn, signOut } from './account';

jest.mock('../instances');

describe('Account methods works when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('sign in endpoint is called with payload', async () => {
    const response = mockAxiosResponse(mockSignInResponse())();

    const spy = jest.spyOn(blogAPI, 'post').mockResolvedValueOnce(response);

    const payload = mockSignInPayload();

    const signInResponse = await signIn(payload);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(getPath('Account/SignIn'), payload);
    expect(signInResponse).toEqual(response.data);
  });

  it('sign out method is called with payload', async () => {
    const spy = jest.spyOn(blogAPI, 'post').mockResolvedValueOnce(null);

    await signOut();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(getPath('Account/SignOut'));
  });

  it('register method is called with payload', async () => {
    const spy = jest.spyOn(blogAPI, 'post').mockResolvedValueOnce(null);

    const payload = mockRegisterPayload();

    await register(payload);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(getPath('Account/Register'), payload);
  });
});
