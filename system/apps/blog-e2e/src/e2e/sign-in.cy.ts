import { Gherkin } from './gherkin';
import { commands } from './commands';

describe('Sign in works when: ', () => {
  const { Given } = Gherkin(commands);

  it('user can sign in', () => {
    Given('System mocked endpoint', 'postSignIn')
      .And('System mocked endpoint', 'getRecommendedArticles')
      .And('System mocked endpoint', 'getYourArticles')
      .And('System sets page as', '/')
      .When('I click button', 'Sign In')
      .Then('Im on page', '/en/sign-in')
      .And('I see disabled button', 'Confirm')
      .And('I see text', 'Sign in into your account', 'Confirm')
      .When('I type in input', 'Login*', 'tomcio1994')
      .And('I type in input', 'Password*', 'tomcio1994')
      .And('I click button', 'Confirm')
      .Then('I see loading button', 'Confirm')
      .When('System recieved response from endpoint', 'postSignIn')
      .Then(
        'I see text',
        "You're signed in 💚",
        "We're redirecting you...",
        'Signed in'
      )
      .And('Im on page', '/en/articles')
      .When('I click tab', 'Yours')
      .Then('System recieved response from endpoint', 'getYourArticles')
      .When('I go back')
      .Then(
        'I see text',
        "You're already signed in 💚",
        'Only testers 👨‍👦 are trying to double sign in...'
      );
  });
});
