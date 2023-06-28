import type { Lang } from '../../models';
import { getLang } from '../lang';

describe('Supported language is determined when: ', () => {
  it('returns default english language if not detected in pathname', () => {
    expect(getLang('/')).toBe('en' as Lang);
  });

  it('takes language from pathname', () => {
    expect(getLang('/pl/articles/')).toBe('pl' as Lang);
  });
});
