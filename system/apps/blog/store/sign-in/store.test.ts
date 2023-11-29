import { act, waitFor } from '@testing-library/react';
import { useSignInStore } from './store';
import { storeFixture } from '../test-utils';
import { getError, signIn } from '@system/blog-api';
import {
  mockErrorResponse,
  mockResponseError,
  mockSignInPayload,
  mockSignInResponse,
} from '@system/blog-api-mocks';
import { auth_store_actions } from '../auth';
import { sign_in_store_actions } from './actions';

jest.mock('@system/blog-api');
jest.mock('../auth');

describe('Allows to sign in user when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );
  });

  it('success state transition is handled', async () => {
    const { result, restore } = storeFixture(useSignInStore);

    (signIn as jest.Mock).mockImplementation(() =>
      Promise.resolve(mockSignInResponse())
    );
    (auth_store_actions.authorize as jest.Mock).mockImplementation(jest.fn());

    expect(result.current.is).toBe('idle');

    act(() => {
      sign_in_store_actions.signIn(mockSignInPayload());
    });

    expect(result.current.is).toBe('busy');

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
    });

    expect(auth_store_actions.authorize).toHaveBeenCalledTimes(1);
    expect(result.current.is).toBe('ok');

    restore();
  });

  it('error state transition is handled', async () => {
    const { result, restore } = storeFixture(useSignInStore);

    (signIn as jest.Mock).mockImplementation(() =>
      Promise.reject(mockErrorResponse())
    );

    expect(result.current.is).toBe('idle');

    act(() => {
      sign_in_store_actions.signIn(mockSignInPayload());
    });

    expect(result.current.is).toBe('busy');

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
    });

    expect(auth_store_actions.authorize).not.toHaveBeenCalled();
    expect(result.current.is).toBe('fail');
    expect(result.current.error).toEqual(mockResponseError());

    restore();
  });

  it('allows to reset state to default', () => {
    const { result, restore } = storeFixture(useSignInStore, {
      is: 'busy',
      error: null,
    });

    expect(result.current.is).toBe('busy');

    act(() => {
      sign_in_store_actions.reset();
    });

    expect(result.current.is).toBe('idle');

    restore();
  });
});
