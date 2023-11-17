import type { FullArticleDto } from '@system/blog-api-models';
import { commands } from './commands';
import { Gherkin } from './gherkin';

const scenarios = {
  'I create send to review article': () => {
    const { Background, GetData, GetBackground } = Gherkin<
      typeof commands,
      Pick<FullArticleDto, 'title' | 'description' | 'content'>
    >(commands);

    const content = '### My dummy content';

    Background({
      title: 'Dummy article to create for e2e tests' + new Date().toISOString(),
      description: 'My dummy article description',
    })
      .Given('System sets page as', '/')
      .When('I click navbar link', 'Creator')
      .Then('Im on page', '/en/articles-creator')
      .And('I see text', 'Try to use our editor')
      .When('I click button', 'Start')
      .Then('I see text', 'Article creator')
      .And('I see disabled button', 'Submit')
      .When(
        'I type in input',
        'The best title is between 80 and 130 characters',
        GetData('title')
      )
      .And('I type in input', 'React, Angular, RxJs, ...etc', 'React')
      .And('I click icon button', 'Confirm article tag')
      .Then('I see empty input', 'React, Angular, RxJs, ...etc')
      .And('I see button', 'React')
      .When(
        'I type in textarea',
        'The best description is between 80 and 130 characters',
        GetData('description')
      )
      .And('I pick thumbnail')
      .And('I click tab', 'Content')
      .And('I change article content', content)
      .And('I click button', 'Submit')
      .Then('I see text', 'Do you want to submit an article for review?')
      .When('I click checkbox', 'Send to review')
      .And('I click button', 'Submit')
      .And('I click button', 'Sure?')
      .Then('Im on page', '/en/sign-in')
      .When('I sign in as', 'Admin')
      .Then('Im on page', '/en/articles-creator')
      .When('I click button', 'Submit')
      .And('I click button', 'Sure?')
      .Then('I see text', 'Article has been created ❤!');

    return GetBackground();
  },
  'I create article': () => {
    const { Background, GetData, GetBackground } = Gherkin<
      typeof commands,
      Pick<FullArticleDto, 'title' | 'description' | 'content'>
    >(commands);

    const content = '### My dummy content';

    Background({
      title: 'Dummy article to create for e2e tests' + new Date().toISOString(),
      description: 'My dummy article description',
    })
      .Given('System sets page as', '/')
      .When('I click navbar link', 'Creator')
      .Then('Im on page', '/en/articles-creator')
      .And('I see text', 'Try to use our editor')
      .When('I click button', 'Start')
      .Then('I see text', 'Article creator')
      .And('I see disabled button', 'Submit')
      .When(
        'I type in input',
        'The best title is between 80 and 130 characters',
        GetData('title')
      )
      .And('I type in input', 'React, Angular, RxJs, ...etc', 'React')
      .And('I click icon button', 'Confirm article tag')
      .Then('I see empty input', 'React, Angular, RxJs, ...etc')
      .And('I see button', 'React')
      .When(
        'I type in textarea',
        'The best description is between 80 and 130 characters',
        GetData('description')
      )
      .And('I pick thumbnail')
      .And('I click tab', 'Content')
      .And('I change article content', content)
      .And('I click button', 'Submit')
      .Then('I see text', 'Do you want to submit an article for review?')
      .When('I click button', 'Submit')
      .And('I click button', 'Sure?')
      .Then('Im on page', '/en/sign-in')
      .When('I sign in as', 'Admin')
      .Then('Im on page', '/en/articles-creator')
      .When('I click button', 'Submit')
      .And('I click button', 'Sure?')
      .Then('I see text', 'Article has been created ❤!');

    return GetBackground();
  },
};

export { scenarios };
