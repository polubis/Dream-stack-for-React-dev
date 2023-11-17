import { commands } from './commands';
import { Gherkin } from './gherkin';

describe('Articles management works when: ', () => {
  const { Given } = Gherkin(commands);

  it('admin user may approve article in review status', () => {
    Given('Im signed in', 'Admin')
      .When('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Draft', 'Review')
      .Then('I see articles only with status', 'Review')
      .When('I click go to first found article')
      .Then('Im on article preview page')
      .And('I see article')
      .When('I accept article')
      .Then('I see text', 'Published')
      .When('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Draft', 'Published')
      .Then('I see articles only with status', 'Published');
  });
});
