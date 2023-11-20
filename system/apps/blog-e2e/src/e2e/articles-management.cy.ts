import { commands } from './commands';
import { Gherkin } from './gherkin';
import { scenarios } from './scenarios';

describe('Articles management works when: ', () => {
  const { Background } = Gherkin(commands);

  it('admin may approve article in review status', () => {
    const data = scenarios['I create send to review article']();
    const { title } = data;

    Background(data)
      .Given('Im on page', '/en/articles-creator')
      .When('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Draft', 'Review')
      .Then('I see articles only with status', 'Review')
      .When('I click founded article', title)
      .Then('Im on article review page')
      .And('I see article')
      .When('I accept article')
      .And('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Draft', 'Published')
      .Then('I see articles only with status', 'Published');
  });

  it('admin may reject article in review status', () => {
    const data = scenarios['I create send to review article']();
    const { title } = data;

    Background(data)
      .Given('Im on page', '/en/articles-creator')
      .When('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Draft', 'Review')
      .Then('I see articles only with status', 'Review')
      .When('I click founded article', title)
      .Then('Im on article review page')
      .And('I see article')
      .When('I reject article')
      .And('I navigate to admin articles page')
      .Then('I see empty article search input')
      .And('I see empty article tags field')
      .When('I select status in article status field', 'Draft', 'Refine')
      .Then('I see articles only with status', 'Refine');
  });
});
