import {
  mockGetArticlesResponse,
  mockResponse,
  mockSignInResponse,
} from '@system/blog-api-mocks';
import type { FullArticleDto, UserRole } from '@system/blog-api-models';

type ArticleStatusLabel = 'Published' | 'Review' | 'Refine' | 'Draft';
type Endpoint =
  | 'getRecommendedArticles'
  | 'postSignIn'
  | 'getYourArticles'
  | 'postRegister';

const commands = {
  'System sets page as': (url: string) => {
    cy.visit(url);
  },
  'System mocked endpoint': (endpoint: Endpoint) => {
    if (endpoint === 'getRecommendedArticles') {
      cy.intercept('GET', Cypress.env('NEXT_PUBLIC_API_URL') + 'Articles/en*', {
        statusCode: 201,
        body: mockGetArticlesResponse(),
        delay: 1000,
      }).as('getRecommendedArticles' as Endpoint);
    }

    if (endpoint === 'postSignIn') {
      cy.intercept(
        'POST',
        Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
        {
          statusCode: 201,
          body: mockSignInResponse(),
          delay: 1000,
        }
      ).as('postSignIn' as Endpoint);
    }

    if (endpoint === 'getYourArticles') {
      cy.intercept(
        'GET',
        Cypress.env('NEXT_PUBLIC_API_URL') + 'Articles/my/en*',
        {
          statusCode: 201,
          body: mockGetArticlesResponse(),
          delay: 1000,
        }
      ).as('getYourArticles' as Endpoint);
    }

    if (endpoint === 'postRegister') {
      cy.intercept(
        'POST',
        Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/Register',
        {
          statusCode: 204,
          body: mockResponse(null),
          delay: 1000,
        }
      ).as('postRegister');
    }
  },
  'I see articles thumbnails in footer': () => {
    cy.get('*[title="Footer thumbnail"]').should('have.length.greaterThan', 0);
  },
  'I scroll to bottom of page': (duration = 1000) => {
    cy.scrollTo('bottom', { duration });
  },
  'I scroll to top of page': (duration = 1000) => {
    cy.scrollTo('top', { duration });
  },
  'System recieved response from endpoint': (endpoint: Endpoint) => {
    cy.wait(`@${endpoint}`);
  },
  'I click checkbox': (title: string) => {
    cy.get(`.checkbox .font.b2:contains(${title})`).click();
  },
  'I click button': (name: string) => {
    cy.get(`button.button:contains(${name})`).click();
  },
  'I click tab': (name: string) => {
    cy.get(`.tabs .font.b1:contains(${name})`).click();
  },
  'I click icon button': (name: string) => {
    cy.get(`button.button[title="${name}"]`).click();
  },
  'I navigate to admin articles page': () => {
    commands['I scroll to top of page']();
    cy.get(`.nav .popover-trigger button.button`).click();
    commands['I click button']('Admin panel');
    commands['Im on page']('/en/admin');
  },
  'I navigate to your articles page': () => {
    commands['I scroll to top of page']();
    cy.get(`.nav .popover-trigger button.button`).click();
    commands['I click button']('Your articles');
    commands['Im on page']('/en/your-articles');
  },
  'I navigate to sign in page': () => {
    commands['I click button']('Sign In');
  },
  'I change article content': (content: string) => {
    // @TODO How to set codemirror type event?
  },
  'I pick thumbnail': () => {
    cy.get('input[type="file"]').attachFile('../assets/cringe.jpg');
  },
  'I click navbar link': (name: 'Creator') => {
    cy.get(`.nav-bar a[title="${name}"]`).click();
  },
  'I type in input': (placeholder: string, value: string) => {
    cy.get(`.input input[placeholder="${placeholder}"]`).type(value);
  },
  'I type in textarea': (placeholder: string, value: string) => {
    cy.get(`.textarea textarea[placeholder="${placeholder}"]`).type(value);
  },
  'Im on page': (url: string) => {
    cy.url().should('include', url);
  },
  'I see button': (name: string) => {
    cy.get(`button.button:contains(${name})`);
  },
  'I see disabled button': (...names: string[]) => {
    names.forEach((name) => {
      cy.get(`button.button:contains(${name})`).should('be.disabled');
    });
  },
  'I see empty input': (placeholder: string) => {
    cy.get(`.input input[placeholder="${placeholder}"]`).should('be.empty');
  },
  'I see loading button': (...names: string[]) => {
    names.forEach((name) => {
      commands['I see disabled button'](name);
      cy.get(`button.button:contains(${name}) .loader`).should('exist');
    });
  },
  'I see empty article search input': () => {
    commands['I see empty input']('🏸 Type to find article...');
  },
  'I see empty article tags field': () => {
    cy.get(`button.button[title="Articles tags"]`).find('svg').should('exist');
  },
  'I see text': (...values: string[]) => {
    values.forEach((text) => {
      cy.contains(text, { matchCase: true }).should('exist');
    });
  },
  'I go back': () => {
    cy.go('back');
  },
  'I not see text': (...values: string[]) => {
    values.forEach((text) => {
      cy.contains(text, { matchCase: true }).should('not.exist');
    });
  },
  'I sign in as': (role: UserRole) => {
    if (role === 'Admin') {
      commands['I type in input']('Login*', Cypress.env('ADMIN_LOGIN'));
      commands['I type in input']('Password*', Cypress.env('ADMIN_PASSWORD'));
    }

    commands['I click button']('Confirm');
    commands['I see loading button']('Confirm');
    commands['I see text']("You're signed in 💚", "We're redirecting you...");
  },
  'I select status in article status field': (status: ArticleStatusLabel) => {
    cy.get(`.select-expander`).click();
    cy.get(`.select-list-option:contains(${status})`).click();
  },
  'I see articles only with status': (status: ArticleStatusLabel) => {
    cy.get(`.article-tile .badge:contains(${status})`).should(
      'have.length.greaterThan',
      0
    );
  },
  'I click founded article': (title: FullArticleDto['title']) => {
    commands['I type in input']('🏸 Type to find article...', title);
    cy.get(`[data-article-title="${title}"]`).click();
  },
  'Im on article review page': () => {
    cy.url()
      .should('contain', '/en/admin/article-review')
      .and('contain', 'url=')
      .and('contain', 'id=');
  },
  'I see article': () => {
    cy.get(`[title="Author name"]`);
    cy.get(`[title="Article title"]`);
    cy.get(`[title="Article description"]`);
  },
  'I accept article': () => {
    cy.get(`[title="Actions"]`).click();
    commands['I click button']('Accept');
    commands['I click button']('Confirm');
    commands['I see loading button']('Accept', 'Reject', 'Cancel', 'Confirm');
    commands['I see text']('Published');
    commands['I not see text'](
      'Actions to perform',
      'Accept',
      'Reject',
      'Cancel',
      'Confirm',
      'Are you sure that you want to perform this action?'
    );
  },
  'I reject article': () => {
    cy.get(`[title="Actions"]`).click();
    commands['I click button']('Reject');
    commands['I click button']('Confirm');
    commands['I see loading button']('Accept', 'Reject', 'Cancel', 'Confirm');
    commands['I not see text'](
      'Actions to perform',
      'Accept',
      'Reject',
      'Cancel',
      'Confirm',
      'Are you sure that you want to perform this action?'
    );
  },
} as const;

export { commands };
