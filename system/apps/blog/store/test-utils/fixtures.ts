import { renderHook, act } from '@testing-library/react';
import type { StoreApi, UseBoundStore } from 'zustand';

const storeFixture = <T>(useStore: UseBoundStore<StoreApi<T>>) => {
  const initialState = useStore.getState();

  const restore = (): void => {
    act(() => {
      useStore.setState(initialState);
    });
  };

  const { result } = renderHook(() => useStore());

  return {
    restore,
    result,
  };
};

export { storeFixture };
