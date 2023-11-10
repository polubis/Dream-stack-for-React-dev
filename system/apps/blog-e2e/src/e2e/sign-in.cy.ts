import {
  mockGetArticlesResponse,
  mockSignInResponse,
} from '@system/blog-api-mocks';
import { sign_in_selectors } from '../support/app.po';

describe('Sign in works when: ', () => {
  it('Scenario(1.0): User can sign in', () => {
    const signInResponse = mockSignInResponse();
    cy.intercept('GET', Cypress.env('NEXT_PUBLIC_API_URL') + 'Articles/en*', {
      statusCode: 201,
      body: mockGetArticlesResponse(),
      delay: 1000,
    }).as('getRecommendedArticles');
    cy.intercept(
      'GET',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Articles/my/en*',
      {
        statusCode: 201,
        body: mockGetArticlesResponse(),
        delay: 1000,
      }
    ).as('getYourArticles');
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      {
        statusCode: 201,
        body: signInResponse,
        delay: 1000,
      }
    ).as('signIn');

    cy.visit('/en/sign-in');

    sign_in_selectors.heading();
    sign_in_selectors.login_input();
    sign_in_selectors.password_input();
    sign_in_selectors.confirm_btn_loading_animation().should('not.exist');
    sign_in_selectors.confirm_btn().should('not.be.disabled');

    sign_in_selectors.login_input().type('tom199423');
    sign_in_selectors.password_input().type('tom199423');

    sign_in_selectors.confirm_btn().click();
    sign_in_selectors.confirm_btn().should('be.disabled');
    sign_in_selectors.confirm_btn_loading_animation();

    cy.wait(['@signIn']);

    sign_in_selectors.firstTimeSignedInHeading();
    sign_in_selectors.firstTimeSignedInDescription();

    cy.url().should('include', '/en/your-articles');

    cy.wait(['@getYourArticles']);

    cy.go(-1);

    cy.url().should('include', '/en/sign-in');

    sign_in_selectors.alreadySignedInHeading();
    sign_in_selectors.alreadySignedInDescription();
  });
});
