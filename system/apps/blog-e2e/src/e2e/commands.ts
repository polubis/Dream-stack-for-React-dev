import type { ArticleStatus, UserRole } from '@system/blog-api-models';

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
  'I see disabled button': (name: string) => {
    cy.get(`button.button:contains(${name})`).should('be.disabled');
  },
  'I see empty input': (placeholder: string) => {
    cy.get(`.input input[placeholder="${placeholder}"]`).should('be.empty');
  },
  'I see loading button': (name: string) => {
    commands['I see disabled button'](name);
    cy.get(`button.button:contains(${name}) .loader`).should('exist');
  },
  'I see empty article search input': () => {
    commands['I see empty input']('🏸 Type to find article...');
  },
  'I see empty article tags field': () => {
    cy.get(`button.button[title="Articles tags"]`).find('svg').should('exist');
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
    status: 'Published' | 'Review' | 'Refine' | 'Draft'
  ) => {
    cy.get(`.select-expander:contains(${name})`).click();
    cy.get(`.select-list-option:contains(${status})`).click();
  },
} as const;

export { commands };
