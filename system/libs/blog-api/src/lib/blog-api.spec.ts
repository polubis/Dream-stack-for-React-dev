import { blogApi } from './blog-api';

describe('blogApi', () => {
  it('should work', () => {
    expect(blogApi()).toEqual('blog-api');
  });
});
