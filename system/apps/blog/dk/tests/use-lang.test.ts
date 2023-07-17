import { renderHook } from '@testing-library/react';
import { useLang } from '../use-lang';
import { getLang } from '../lang';
import { useRouter } from 'next/router';
import type { Lang } from '@system/blog-api-models';

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
