import { commands } from './commands';
import { Gherkin } from './gherkin';
import { scenarios } from './scenarios';

describe('Articles management works when: ', () => {
  const { Given } = Gherkin(commands);

  it('admin may approve article in review status and later deletes it', () => {
    const { title } = scenarios['I create send to review article']();

    Given('Im on page', '/en/articles-creator')
      .When('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Review')
      .Then('I see articles only with status', 'Review')
      .When('I click founded article', title)
      .Then('Im on article review page')
      .And('I see article')
      .When('I accept article')
      .And('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Published')
      .Then('I see articles only with status', 'Published');

    scenarios['I delete article'](title);
  });

  it('admin may reject article in review status', () => {
    const { title } = scenarios['I create send to review article']();

    Given('Im on page', '/en/articles-creator')
      .When('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Review')
      .Then('I see articles only with status', 'Review')
      .When('I click founded article', title)
      .Then('Im on article review page')
      .And('I see article')
      .When('I reject article')
      .And('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Refine')
      .Then('I see articles only with status', 'Refine');

    scenarios['I delete article'](title);
  });
});
