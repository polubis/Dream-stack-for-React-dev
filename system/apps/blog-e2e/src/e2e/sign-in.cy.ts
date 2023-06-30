import { getter } from '@system/blog-selectors';

describe('Sign in works when: ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const get = getter(cy);

  it('user is able to go through sign in', () => {
    get('app-nav-sign-in-btn').click();

    cy.url().should('include', '/en/sign-in');

    get('sign-in-login-input').type('tom199423');
    get('sign-in-password-input').type('tom199423');

    get('sign-in-confirm-btn').click();
  });
});
