import { act, waitFor } from '@testing-library/react';
import { reset, useSignInStore } from './sign-in.store';
import { storeFixture } from '../test-utils';
import type { SignInStateKey } from './defs';
import { authorize } from '../auth';
import { getError, signIn } from '@system/blog-api';
import {
  mockErrorResponse,
  mockResponseError,
  mockSignInPayload,
  mockSignInResponse,
} from '@system/blog-api-mocks';

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
    (authorize as jest.Mock).mockImplementation(jest.fn());

    expect(result.current.key).toBe('idle' as SignInStateKey);

    act(() => {
      result.current.signIn(mockSignInPayload());
    });

    expect(result.current.key).toBe('pending' as SignInStateKey);

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
    });

    expect(authorize).toHaveBeenCalledTimes(1);
    expect(result.current.key).toBe('ok' as SignInStateKey);

    restore();
  });

  it('error state transition is handled', async () => {
    const { result, restore } = storeFixture(useSignInStore);

    (signIn as jest.Mock).mockImplementation(() =>
      Promise.reject(mockErrorResponse())
    );

    expect(result.current.key).toBe('idle' as SignInStateKey);

    act(() => {
      result.current.signIn(mockSignInPayload());
    });

    expect(result.current.key).toBe('pending' as SignInStateKey);

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
    });

    expect(authorize).not.toHaveBeenCalled();
    expect(result.current.key).toBe('error' as SignInStateKey);
    expect(result.current.error).toEqual(mockResponseError());

    restore();
  });

  it('allows to reset state to default', () => {
    const { result, restore } = storeFixture(useSignInStore, {
      key: 'pending',
      error: null,
      signIn: jest.fn(),
    });

    expect(result.current.key).toBe('pending' as SignInStateKey);

    act(() => {
      reset();
    });

    expect(result.current.key).toBe('idle' as SignInStateKey);

    restore();
  });
});
