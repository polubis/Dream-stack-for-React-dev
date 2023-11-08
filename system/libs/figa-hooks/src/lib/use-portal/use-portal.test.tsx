import { renderHook } from '@testing-library/react';
import { usePortal } from './use-portal';
import { isServer } from '@system/utils';

jest.mock('@system/utils');

describe('Portal is created when: ', () => {
  it('does nothing and returns null on the server side', () => {
    (isServer as jest.Mock).mockReturnValue(true);
    const { result } = renderHook(() => usePortal());

    expect(result.current.render(<div>Content</div>)).toBe(null);
  });

  it('moves passed JSX node outside of the main application wrapper', () => {
    (isServer as jest.Mock).mockReturnValue(false);
    const { result } = renderHook(() => usePortal());

    expect(result.current.render(<div>Content</div>)).toMatchSnapshot();
  });
});
