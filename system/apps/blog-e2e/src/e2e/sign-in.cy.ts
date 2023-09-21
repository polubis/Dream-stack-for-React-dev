import {
  mockSignInResponse,
  mockResponse,
  mockErrorResponse,
} from '@system/blog-api-mocks';
import {
  components_selectors,
  app_nav_selectors,
  sign_in_feature_selectors,
} from '../support/app.po';

describe('Sign in works when: ', () => {
  it('after sign in, user is able to sign out', () => {
    const signInResponse = mockSignInResponse();
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
        body: signInResponse,
        delay: 1000,
      }
    ).as('signIn');

    cy.visit('/');

    app_nav_selectors.sign_in_btn().should('be.disabled');
    app_nav_selectors.sign_in_btn().should('not.be.disabled').click();

    cy.url().should('include', '/en/sign-in');

    sign_in_feature_selectors.login_input().type('tom199423');
    sign_in_feature_selectors.password_input().type('tom199423');

    sign_in_feature_selectors.confirm_btn().should('not.be.disabled').click();
    app_nav_selectors.sign_in_btn().should('be.disabled');
    sign_in_feature_selectors.confirm_btn().should('be.disabled');

    cy.wait(['@signIn']);

    components_selectors.alert('You are logged in!');

    sign_in_feature_selectors.confirm_btn().should('not.be.disabled');
    app_nav_selectors.user_avatar_btn().click();
    app_nav_selectors
      .sign_out_btn()
      .should('not.be.disabled')
      .should('be.visible');
    cy.contains(signInResponse.data.email);
    cy.contains(signInResponse.data.username);
    cy.contains(`Hi, ${signInResponse.data.username}`);
    cy.contains(signInResponse.data.roles[0]);
    app_nav_selectors.sign_out_btn().click();
    app_nav_selectors.sign_out_btn().should('be.disabled');
    sign_in_feature_selectors.confirm_btn().should('be.disabled');

    cy.wait(['@signOut']);

    app_nav_selectors.sign_in_btn().should('not.be.disabled');
    sign_in_feature_selectors.confirm_btn().should('not.be.disabled');
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

    app_nav_selectors.sign_in_btn().should('be.disabled');
    app_nav_selectors.sign_in_btn().should('not.be.disabled').click();

    cy.url().should('include', '/en/sign-in');

    sign_in_feature_selectors.login_input().type('tom199423');
    sign_in_feature_selectors.password_input().type('tom199423');

    sign_in_feature_selectors.confirm_btn().should('not.be.disabled').click();
    app_nav_selectors.sign_in_btn().should('be.disabled');
    sign_in_feature_selectors.confirm_btn().should('be.disabled');

    cy.wait(['@signIn']);

    app_nav_selectors.user_avatar_btn().should('not.be.disabled');
    components_selectors.alert('You are logged in!');
  });

  it('user cannot sign in the interface display error message', () => {
    const errorResponse = mockErrorResponse();

    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      {
        statusCode: 400,
        body: errorResponse,
        delay: 1000,
      }
    ).as('signIn');

    cy.visit('/');

    app_nav_selectors.sign_in_btn().should('be.disabled');
    app_nav_selectors.sign_in_btn().should('not.be.disabled').click();

    cy.url().should('include', '/en/sign-in');

    sign_in_feature_selectors.login_input().type('tom199423');
    sign_in_feature_selectors.password_input().type('tom199423');

    sign_in_feature_selectors.confirm_btn().should('not.be.disabled').click();
    app_nav_selectors.sign_in_btn().should('be.disabled');
    sign_in_feature_selectors.confirm_btn().should('be.disabled');

    cy.wait(['@signIn']);

    app_nav_selectors.sign_in_btn().should('not.be.disabled');
    sign_in_feature_selectors.confirm_btn().should('not.be.disabled');
    components_selectors
      .alert(errorResponse.errors[0].message)
      .contains(errorResponse.errors[0].message);
  });
});
