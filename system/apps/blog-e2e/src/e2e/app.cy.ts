import { Gherkin } from './gherkin';
import { commands } from './commands';

describe('Blog works when: ', () => {
  const { Given } = Gherkin(commands);

  it('loads articles in footer when scrolled down', () => {
    Given('I have mocked endpoint', 'getRecommendedArticles')
      .And('I go to page', '/')
      .Then('I see text', 'About us', 'Recommended articles', 'Navigation')
      .When('I scroll to bottom of page')
      .And('I wait for endpoint', 'getRecommendedArticles')
      .Then('I see articles thumbnails in footer');
  });
});
