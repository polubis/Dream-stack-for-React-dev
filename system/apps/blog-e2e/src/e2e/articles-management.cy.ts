import { commands } from './commands';
import { Gherkin } from './gherkin';

describe('Articles management works when: ', () => {
  const { Given } = Gherkin(commands);

  it('admin user may approve article with review status', () => {
    Given('Im signed in', 'Admin')
      .When('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field');
  });
});
