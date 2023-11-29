import { act, waitFor } from '@testing-library/react';
import { useRegisterStore } from './store';
import { storeFixture } from '../test-utils';
import { register, getError } from '@system/blog-api';
import { mockRegisterPayload, mockResponseError } from '@system/blog-api-mocks';
import type { RegisterStore } from './defs';
import { register_store_actions } from './actions';

jest.mock('@system/blog-api');

describe('Register feature works when: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('initial state is correct', () => {
    const { result, restore } = storeFixture(useRegisterStore);

    expect(result.current.is).toBe('idle');
    expect(result.current).toMatchSnapshot();

    restore();
  });

  it('handles error', async () => {
    (register as jest.Mock).mockImplementation(() => Promise.reject());
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );

    const payload = mockRegisterPayload();
    const { result, restore } = storeFixture(useRegisterStore);

    expect(result.current.is).toBe('idle');

    act(() => {
      for (const key in payload) {
        register_store_actions.setField(
          key as keyof RegisterStore.FormData,
          payload[key]
        );
      }

      register_store_actions.submit();
    });

    expect(result.current.is).toBe('busy');

    await waitFor(() => {
      expect(register).toHaveBeenCalledTimes(1);
    });

    expect(result.current.is).toBe('fail');
    expect(result.current.error).toEqual(mockResponseError());

    restore();
  });

  it('allows to change field value', () => {
    const { result, restore } = storeFixture(useRegisterStore);

    expect(result.current.form.values.confirmPassword).toBe('');

    const value = 'd';

    act(() => {
      register_store_actions.setField('confirmPassword', value);
    });

    expect(result.current.form.values.confirmPassword).toBe(value);

    restore();
  });

  it('skips request call when form is invalid', () => {
    const { result, restore } = storeFixture(useRegisterStore);

    act(() => {
      register_store_actions.submit();
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
        register_store_actions.setField(
          key as keyof RegisterStore.FormData,
          payload[key]
        );
      }
    });

    for (const key in payload) {
      expect(result.current.form.values[key]).toBe(payload[key]);
    }

    act(() => {
      register_store_actions.submit();
    });

    expect(result.current.form).toMatchSnapshot();
    expect(result.current.is).toBe('busy');

    await waitFor(() => {
      expect(result.current.is).toBe('ok');
    });

    restore();
  });
});
