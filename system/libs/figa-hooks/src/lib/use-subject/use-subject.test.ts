import { act, renderHook, waitFor } from '@testing-library/react';
import { useSubject } from './use-subject';

describe('Subject can be used when: ', () => {
  it('listen for actions', async () => {
    const spy = jest.fn();
    const { result } = renderHook(() =>
      useSubject<string>({ cb: spy, delay: 150 })
    );

    act(() => {
      result.current.emit('text');
    });

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('text');
    });
  });
});
