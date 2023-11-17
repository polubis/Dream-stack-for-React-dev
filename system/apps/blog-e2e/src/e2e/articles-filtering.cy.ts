import { commands } from './commands';
import { Gherkin } from './gherkin';

describe('Articles filtering works when: ', () => {
  const { Given } = Gherkin(commands);

  it('not signed in user visits your articles page and session expiration section is displayed', () => {
    Given('System mocked endpoint', 'getRecommendedArticles')
      .And('System sets page as', '/en/your-articles')
      .Then(
        'I see text',
        'Your session expired 💤',
        'Sign in again to explore our application 🔃'
      )
      .When('I click button', 'Sign In again')
      .Then('Im on page', '/en/sign-in');
  });
});
