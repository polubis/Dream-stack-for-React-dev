import { act, waitFor } from '@testing-library/react';
import { useSignInStore } from './store';
import { storeFixture } from '../test-utils';
import { getPath, serverFixture } from '@system/blog-api';
import {
  mockErrorResponse,
  mockSignInPayload,
  mockSignInResponse,
} from '@system/blog-api-mocks';
import { useAuthStore } from '../auth';
import { sign_in_store_actions } from './actions';

describe('Allows to sign in user when: ', () => {
  const mock = serverFixture({ beforeAll, afterAll, afterEach });

  it('success transcation is handled', async () => {
    const payload = mockSignInPayload();
    const signInStore = storeFixture(useSignInStore);
    const authStore = storeFixture(useAuthStore);

    mock('post', getPath('Account/SignIn'), (_, res, ctx) =>
      res(ctx.status(205), ctx.json(mockSignInResponse()))
    );

    expect(signInStore.result.current.is).toBe('idle');

    act(() => {
      sign_in_store_actions.setField('login', payload.login);
      sign_in_store_actions.setField('password', payload.password);
      sign_in_store_actions.submit();
    });

    expect(signInStore.result.current.is).toBe('busy');

    await waitFor(() => {
      expect(signInStore.result.current.is).toBe('ok');
      expect(authStore.result.current.is).toBe('authorized');
    });

    signInStore.restore();
    authStore.restore();
  });

  it('error transcation is handled', async () => {
    const payload = mockSignInPayload();
    const signInStore = storeFixture(useSignInStore);
    const authStore = storeFixture(useAuthStore);

    mock('post', getPath('Account/SignIn'), (_, res, ctx) =>
      res(ctx.status(404), ctx.json(mockErrorResponse()))
    );

    expect(signInStore.result.current.is).toBe('idle');

    act(() => {
      sign_in_store_actions.setField('login', payload.login);
      sign_in_store_actions.setField('password', payload.password);
      sign_in_store_actions.submit();
    });

    expect(signInStore.result.current.is).toBe('busy');

    await waitFor(() => {
      expect(signInStore.result.current.is).toBe('fail');
      expect(authStore.result.current.is).toBe('idle');
    });

    signInStore.restore();
    authStore.restore();
  });
});
