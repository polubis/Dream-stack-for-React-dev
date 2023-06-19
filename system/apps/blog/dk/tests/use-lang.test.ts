import { renderHook } from '@testing-library/react';
import { useLang } from '../use-lang';
import type { Lang } from '../../models';
import { getLang } from '../lang';
import { useRouter } from 'next/router';

jest.mock('../lang', () => ({
  getLang: jest.fn(),
}));
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Language is detected when: ', () => {
  it('takes language from next routing system pathname', () => {
    (getLang as jest.Mock).mockReturnValueOnce('en' as Lang);
    (useRouter as jest.Mock).mockReturnValueOnce({
      pathname: '/en/something/',
    });

    const { result } = renderHook(() => useLang());

    expect(result.current).toBe('en' as Lang);
  });
});
