import type { UserRole } from '@system/blog-api-models';

type ArticleStatusLabel = 'Published' | 'Review' | 'Refine' | 'Draft';

const commands = {
  'I go to page': (url: string) => {
    cy.visit(url);
  },
  'I click button': (name: string) => {
    cy.get(`button.button:contains(${name})`).click();
  },
  'I navigate to admin articles page': () => {
    cy.get(`.nav .popover-trigger button.button`).click();
    commands['I click button']('Admin panel');
    commands['Im on page']('/en/admin');
  },
  'I type in input': (placeholder: string, value: string) => {
    cy.get(`.input input[placeholder="${placeholder}"]`).type(value);
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
      cy.get(text).should('exist');
    });
  },
  'I not see text': (...values: string[]) => {
    values.forEach((text) => {
      cy.get(text).should('not.exist');
    });
  },
  'Im signed in': (role: UserRole) => {
    cy.visit('/en/sign-in');

    if (role === 'Admin') {
      commands['I type in input']('Login*', Cypress.env('ADMIN_LOGIN'));
      commands['I type in input']('Password*', Cypress.env('ADMIN_PASSWORD'));
    }

    commands['I click button']('Confirm');
    commands['I see loading button']('Confirm');
    commands['Im on page']('/en/your-articles');
  },
  'I select status in article status field': (
    name: string,
    status: ArticleStatusLabel
  ) => {
    cy.get(`.select-expander:contains(${name})`).click();
    cy.get(`.select-list-option:contains(${status})`).click();
  },
  'I see articles only with status': (status: ArticleStatusLabel) => {
    cy.get(`.article-tile .badge:contains(${status})`).should(
      'have.length.greaterThan',
      0
    );
  },
  'I click go to first found article': () => {
    cy.get(`.button button[title="Read article"]`).first().click();
  },
  'Im on article preview page': () => {
    cy.url().should('match', /^\/en\/preview\?id=.+&url=.+$/);
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
