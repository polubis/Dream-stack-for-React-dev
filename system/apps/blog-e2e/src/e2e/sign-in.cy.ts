import { getter } from '@system/blog-selectors';
import {
  mockSignInResponse,
  mockResponse,
  mockErrorResponse,
} from '@system/blog-api-mocks';

describe('Sign in works when: ', () => {
  const get = getter(cy);

  it('after sign in, user is able to sign out', () => {
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignOut',
      {
        statusCode: 201,
        body: mockResponse(null),
        delay: 1000,
      }
    ).as('signOut');
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      {
        statusCode: 201,
        body: mockSignInResponse(),
        delay: 1000,
      }
    ).as('signIn');

    cy.visit('/');

    get('app-nav-sign-in-btn').should('be.disabled');
    get('app-nav-sign-in-btn').should('not.be.disabled').click();

    cy.url().should('include', '/en/sign-in');

    get('sign-in-login-input').type('tom199423');
    get('sign-in-password-input').type('tom199423');

    get('sign-in-confirm-btn').should('not.be.disabled').click();
    get('app-nav-sign-in-btn').should('be.disabled');
    get('sign-in-confirm-btn').should('be.disabled');

    cy.wait(['@signIn']);

    get('sign-in-ok-alert');

    get('sign-in-confirm-btn').should('not.be.disabled');
    get('app-nav-user-avatar-btn').click();
    get('app-nav-sign-out-btn').should('not.be.disabled').should('be.visible');
    get('app-nav-user-email').contains('piotr@wp.pl');
    get('app-nav-user-username').contains('Piotr');
    get('app-nav-user-roles').contains('Admin');
    get('app-nav-sign-out-btn').click();
    get('app-nav-sign-out-btn').should('be.disabled');
    get('sign-in-confirm-btn').should('be.disabled');

    cy.wait(['@signOut']);

    get('app-nav-sign-in-btn').should('not.be.disabled');
    get('sign-in-confirm-btn').should('not.be.disabled');
  });

  it('after sign in, the user sees the message', () => {
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      {
        statusCode: 201,
        body: mockSignInResponse(),
        delay: 1000,
      }
    ).as('signIn');

    cy.visit('/');

    get('app-nav-sign-in-btn').should('be.disabled');
    get('app-nav-sign-in-btn').should('not.be.disabled').click();

    cy.url().should('include', '/en/sign-in');

    get('sign-in-login-input').type('tom199423');
    get('sign-in-password-input').type('tom199423');

    get('sign-in-confirm-btn').should('not.be.disabled').click();
    get('app-nav-sign-in-btn').should('be.disabled');
    get('sign-in-confirm-btn').should('be.disabled');

    cy.wait(['@signIn']);

    get('app-nav-user-avatar-btn').should('not.be.disabled');
    get('sign-in-ok-alert');
  });

  it('user cannot sign in the interface display error message', () => {
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      {
        statusCode: 400,
        body: mockErrorResponse(),
        delay: 1000,
      }
    ).as('signIn');

    cy.visit('/');

    get('app-nav-sign-in-btn').should('be.disabled');
    get('app-nav-sign-in-btn').should('not.be.disabled').click();

    cy.url().should('include', '/en/sign-in');

    get('sign-in-login-input').type('tom199423');
    get('sign-in-password-input').type('tom199423');

    get('sign-in-confirm-btn').should('not.be.disabled').click();
    get('app-nav-sign-in-btn').should('be.disabled');
    get('sign-in-confirm-btn').should('be.disabled');

    cy.wait(['@signIn']);

    get('app-nav-sign-in-btn').should('not.be.disabled');
    get('sign-in-confirm-btn').should('not.be.disabled');
    get('sign-in-error-alert');
  });
});
