import { attachParams } from './attach-params';

describe('Allows to attach url parameters when: ', () => {
  const API_URL = 'https://localhost:3000/api';

  it('the base url is merged with params', () => {
    expect(attachParams(API_URL, ['1', 'users'])).toBe(API_URL + '/1/users');
    expect(attachParams(API_URL, [])).toBe(API_URL);
  });
});
