import { Gherkin } from './gherkin';
import { commands } from './commands';

describe('Register works when: ', () => {
  const { Given } = Gherkin(commands);

  it('user is able to create an account and success alert is displayed', () => {
    Given('System mocked endpoint', 'postRegister')
      .And('System sets page as', '/')
      .When('I click button', 'Sign Up')
      .Then('Im on page', '/en/register')
      .When('I type in input', 'Login*', 'tomcio1994')
      .And('I type in input', 'Email*', 'tomcio1994@wp.pl')
      .And('I type in input', 'Password*', 'tomcio1994')
      .And('I type in input', 'Repeat your password*', 'tomcio1994')
      .And('I click button', 'Confirm')
      .Then('I see loading button', 'Confirm')
      .When('System recieved response from endpoint', 'postRegister')
      .Then('I see text', 'You are logged in!');
  });
});
