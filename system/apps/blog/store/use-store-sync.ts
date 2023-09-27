import { isClient } from '@system/utils';
import { useMemo, useRef } from 'react';
import { create, type StoreApi, type UseBoundStore } from 'zustand';

const useStoreSync = <T>(
  useStore: UseBoundStore<StoreApi<T>>,
  state: T
): UseBoundStore<StoreApi<T>> => {
  const unsynced = useRef(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useServerStore = useMemo(() => create<T>(() => state), []);

  if (unsynced.current) {
    useStore.setState(state);
    unsynced.current = false;
  }

  return isClient() ? useStore : useServerStore;
};

export { useStoreSync };
