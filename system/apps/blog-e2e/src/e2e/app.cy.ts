import { Gherkin } from './gherkin';
import { commands } from './commands';

describe('Blog works when: ', () => {
  const { Given } = Gherkin(commands);

  it('loads articles in footer when scrolled down', () => {
    Given('System mocked endpoint', 'getRecommendedArticles')
      .And('System sets page as', '/')
      .Then('I see text', 'About us', 'Recommended articles', 'Navigation')
      .When('I scroll to bottom of page')
      .And('System recieved response from endpoint', 'getRecommendedArticles')
      .Then('I see articles thumbnails in footer');
  });
});
