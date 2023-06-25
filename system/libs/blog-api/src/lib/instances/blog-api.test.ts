import { blogAPI } from './blog-api';

describe('API for blog works when: ', () => {
  it('headers are application/json because backend requires them', () => {
    expect(blogAPI.defaults.headers['Content-Type']).toBe('application/json');
  });

  it('with credentials is active because backend wants to inject cookies after sign in', () => {
    expect(blogAPI.defaults.withCredentials).toBeTruthy();
  });

  it('is integrated with status parsing mechanism', () => {
    expect(blogAPI.defaults.validateStatus).toBeTruthy();
    expect(blogAPI.defaults.validateStatus?.name).toBe('isOkStatus');
  });
});
