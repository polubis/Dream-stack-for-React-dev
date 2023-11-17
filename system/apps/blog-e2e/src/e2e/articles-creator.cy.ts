import { scenarios } from './scenarios';

describe('Articles maintenance works when: ', () => {
  it('article creation works for not authorized user with sign in redirection', () => {
    scenarios['I create article']();
  });
});
