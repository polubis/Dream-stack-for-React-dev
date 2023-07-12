import { act, waitFor } from '@testing-library/react';
import { useSignOutStore } from './sign-out.store';
import type { ErrorState, SignOutStateKey } from './defs';
import { signOut, getError } from '@system/blog-api';
import { unauthorize } from '../auth';
import { reset } from '../sign-in';
import { storeFixture } from '../test-utils';
import { mockResponseError } from '@system/blog-api-mocks';

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
    (unauthorize as jest.Mock).mockImplementation(jest.fn());
    (reset as jest.Mock).mockImplementation(jest.fn());

    expect(result.current.key).toBe('idle' as SignOutStateKey);

    act(() => {
      result.current.signOut();
    });

    expect(result.current.key).toBe('pending' as SignOutStateKey);

    await waitFor(() => {
      expect(signOut).toHaveBeenCalledTimes(1);
    });

    expect(unauthorize).toHaveBeenCalledTimes(1);
    expect(reset).toHaveBeenCalledTimes(1);
    expect(result.current.key).toBe('ok' as SignOutStateKey);

    restore();
  });

  it('error state transition is handled', async () => {
    const { result, restore } = storeFixture(useSignOutStore);

    (signOut as jest.Mock).mockImplementation(() => Promise.reject());
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );

    expect(result.current.key).toBe('idle' as SignOutStateKey);

    act(() => {
      result.current.signOut();
    });

    expect(result.current.key).toBe('pending' as SignOutStateKey);

    await waitFor(() => {
      expect(signOut).toHaveBeenCalledTimes(1);
    });

    expect(unauthorize).not.toHaveBeenCalled();
    expect(reset).not.toHaveBeenCalled();
    expect(result.current.key).toBe('error' as SignOutStateKey);
    expect((result.current as ErrorState).response).toEqual(
      mockResponseError()
    );

    restore();
  });
});
