import type { FullArticleDto } from '@system/blog-api-models';
import { commands } from './commands';
import { Gherkin } from './gherkin';

const scenarios = {
  'I create send to review article': () => {
    const { Background, GetData, GetBackground } = Gherkin<
      typeof commands,
      Pick<FullArticleDto, 'title' | 'description' | 'content'>
    >(commands);

    Background({
      title: 'Dummy article to create for e2e tests' + new Date().toISOString(),
      description: 'My dummy article description',
      content: '### My dummy content',
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
      .And('I change article content', GetData('content'))
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

    Background({
      title: 'Dummy article to create for e2e tests' + new Date().toISOString(),
      description: 'My dummy article description',
      content: '### My dummy content',
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
      .And('I change article content', GetData('content'))
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
  'I delete article': (title: FullArticleDto['title']) => {
    const { When } = Gherkin(commands);

    When('I click founded article', title)
      .Then('Im on article review page')
      .When('I click icon button', 'Delete article')
      .Then('I see text', 'Are you sure you want to delete the article?')
      .When('I type in input', 'Type article title to confirm...', title)
      .And('I click button', 'Delete')
      .And('I click button', 'Sure?')
      .Then('I see disabled button', 'Cancel')
      .And('I see loading button', 'Sure?')
      .And('Im on page', '/en/your-articles');
  },
};

export { scenarios };
