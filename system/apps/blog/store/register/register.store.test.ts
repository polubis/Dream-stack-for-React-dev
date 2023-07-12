import { act, waitFor } from '@testing-library/react';
import { useRegisterStore } from './register.store';
import { storeFixture } from '../test-utils';
import { register, getError } from '@system/blog-api';
import type { RegisterStateKey } from './defs';
import type { RegisterPayload } from '@system/blog-api-models';
import { mockRegisterPayload, mockResponseError } from '@system/blog-api-mocks';

jest.mock('@system/blog-api');

describe('Register feature works when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('initial state is correct', () => {
    const { result, restore } = storeFixture(useRegisterStore);

    const { setField, submit, ...state } = result.current;

    expect(state.key).toBe('idle' as RegisterStateKey);
    expect(state).toMatchSnapshot();

    restore();
  });

  it('handles error', async () => {
    (register as jest.Mock).mockImplementation(() => Promise.reject());
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );

    const payload = mockRegisterPayload();
    const { result, restore } = storeFixture(useRegisterStore);

    expect(result.current.key).toBe('idle' as RegisterStateKey);

    act(() => {
      for (const key in payload) {
        result.current.setField(key as keyof RegisterPayload, payload[key]);
      }

      result.current.submit();
    });

    expect(result.current.key).toBe('pending' as RegisterStateKey);

    await waitFor(() => {
      expect(register).toHaveBeenCalledTimes(1);
    });

    expect(result.current.key).toBe('error' as RegisterStateKey);
    expect(result.current.error).toEqual(mockResponseError());

    restore();
  });

  it('allows to change field value', () => {
    const { result, restore } = storeFixture(useRegisterStore);

    expect(result.current.form.values.confirmPassword).toBe('');

    const value = 'd';

    act(() => {
      result.current.setField('confirmPassword', value);
    });

    expect(result.current.form.values.confirmPassword).toBe(value);

    restore();
  });

  it('skips request call when form is invalid', () => {
    const { result, restore } = storeFixture(useRegisterStore);

    act(() => {
      result.current.submit();
    });

    expect(result.current.form).toMatchSnapshot();

    restore();
  });

  it('allows to submit and validates', async () => {
    (register as jest.Mock).mockImplementation(() => Promise.resolve());

    const { result, restore } = storeFixture(useRegisterStore);
    const payload = mockRegisterPayload();

    act(() => {
      for (const key in payload) {
        result.current.setField(key as keyof RegisterPayload, payload[key]);
      }
    });

    for (const key in payload) {
      expect(result.current.form.values[key]).toBe(payload[key]);
    }

    act(() => {
      result.current.submit();
    });

    expect(result.current.form).toMatchSnapshot();
    expect(result.current.key).toBe('pending' as RegisterStateKey);

    await waitFor(() => {
      expect(result.current.key).toBe('ok' as RegisterStateKey);
    });

    restore();
  });
});
