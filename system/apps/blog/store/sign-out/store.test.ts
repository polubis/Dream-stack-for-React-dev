import { act, waitFor } from '@testing-library/react';
import { useSignOutStore } from './store';
import { signOut, getError } from '@system/blog-api';
import { storeFixture } from '../test-utils';
import { mockResponseError } from '@system/blog-api-mocks';
import { auth_store_actions } from '../auth';
import { sign_in_store_actions } from '../sign-in';
import type { SignOutStore } from './defs';
import { sign_out_store_actions } from './actions';

jest.mock('@system/blog-api');
jest.mock('../auth');
jest.mock('../sign-in');

describe('Allows to sign out user when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('success state transition is handled', async () => {
    const { result, restore } = storeFixture(useSignOutStore);

    (signOut as jest.Mock).mockImplementation(() => Promise.resolve());
    (auth_store_actions.unauthorize as jest.Mock).mockImplementation(jest.fn());
    (sign_in_store_actions.reset as jest.Mock).mockImplementation(jest.fn());

    expect(result.current.is).toBe('idle');

    act(() => {
      sign_out_store_actions.signOut();
    });

    expect(result.current.is).toBe('busy');

    await waitFor(() => {
      expect(signOut).toHaveBeenCalledTimes(1);
    });

    expect(auth_store_actions.unauthorize).toHaveBeenCalledTimes(1);
    expect(sign_in_store_actions.reset).toHaveBeenCalledTimes(1);
    expect(result.current.is).toBe('ok');

    restore();
  });

  it('error state transition is handled', async () => {
    const { result, restore } = storeFixture(useSignOutStore);

    (signOut as jest.Mock).mockImplementation(() => Promise.reject());
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );

    expect(result.current.is).toBe('idle');

    act(() => {
      sign_out_store_actions.signOut();
    });

    expect(result.current.is).toBe('busy');

    await waitFor(() => {
      expect(signOut).toHaveBeenCalledTimes(1);
    });

    expect(auth_store_actions.unauthorize).not.toHaveBeenCalled();
    expect(sign_in_store_actions.reset).not.toHaveBeenCalled();
    expect(result.current.is).toBe('fail');
    expect((result.current as SignOutStore.Fail).error).toEqual(
      mockResponseError()
    );

    restore();
  });
});
