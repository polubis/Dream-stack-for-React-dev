import {
  mockGetArticleResponse,
  mockResponse,
  mockSignInResponse,
} from '@system/blog-api-mocks';
import { getter } from '@system/blog-selectors';

describe('Articles maintenance works when: ', () => {
  const get = getter(cy);

  it('user is able to update an article after sign in', () => {
    const article = mockGetArticleResponse();
    cy.intercept(
      'PUT',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Articles/en/my-new-best-article',
      {
        statusCode: 201,
        body: mockResponse(null),
        delay: 1000,
      }
    ).as('putArticle');
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      {
        statusCode: 201,
        body: mockSignInResponse(),
        delay: 1000,
      }
    ).as('signIn');
    cy.intercept(
      'GET',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Articles/en/my-new-best-article',
      {
        statusCode: 201,
        body: article,
        delay: 1000,
      }
    ).as('getArticle');

    cy.visit('/en/articles-creator?url=my-new-best-article');

    cy.get('.button:contains("Start")').click();

    cy.wait(['@getArticle']);

    cy.get('.tab:contains("Metadata")').click();
    cy.get(`input[value="${article.data.title}"]`);
    cy.get('textarea').should('have.value', article.data.description);
    cy.get(
      'input[placeholder="The best title is between 80 and 130 characters"]'
    ).type('My favourite article');
    cy.get(
      'textarea[placeholder="The best description is between 80 and 130 characters"]'
    ).type('Some description added to an article');
    cy.get('.select-expander').click();
    cy.get('.select-list-option[data-key="en"]').click();
    cy.get('.button:contains("Submit")').click();
    cy.get('.font:contains("Send to review")');
    cy.get('.button:contains("Submit")').click();

    cy.url().should('include', '/en/sign-in');
    get('sign-in-login-input').type('tom199423');
    get('sign-in-password-input').type('tom199423');

    get('sign-in-confirm-btn').should('not.be.disabled').click();
    get('app-nav-sign-in-btn').should('be.disabled');
    get('sign-in-confirm-btn').should('be.disabled');

    cy.wait(['@signIn']);

    cy.get('.button:contains("Submit")').click();
    cy.get('.loader');

    cy.wait(['@putArticle']);

    cy.get('.button:contains("Submit")');

    cy.get('.alert:contains("Article has been edited ❤!")');
  });

  it('user is able to add an article after sign in', () => {
    cy.intercept('POST', Cypress.env('NEXT_PUBLIC_API_URL') + 'Articles', {
      statusCode: 201,
      body: mockResponse(null),
      delay: 1000,
    }).as('putArticle');
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      {
        statusCode: 201,
        body: mockSignInResponse(),
        delay: 1000,
      }
    ).as('signIn');

    cy.visit('/en/articles-creator');

    cy.get('.button:contains("Start")').click();
    cy.get('.button:contains("Back")').click();
    cy.get('.button:contains("Start")').click();
    cy.get('.tab:contains("Metadata")').click();
    cy.get('.tab:contains("Content")').click();
    cy.get('.tab:contains("Metadata")').click();
    cy.get(
      'input[placeholder="The best title is between 80 and 130 characters"]'
    ).type('My favourite article');
    cy.get(
      'textarea[placeholder="The best description is between 80 and 130 characters"]'
    ).type('Some description added to an article');
    cy.get('.select-expander').click();
    cy.get('.select-list-option[data-key="en"]').click();
    cy.get('.button:contains("Submit")').click();
    cy.get('.font:contains("Send to review")');
    cy.get('.button:contains("Go back")').click();
    cy.get('.tab:contains("Metadata")').click();
    cy.get('.button:contains("Submit")').click();
    cy.get('.font:contains("Send to review")');
    cy.get('.button:contains("Submit")').click();

    cy.url().should('include', '/en/sign-in');
    get('sign-in-login-input').type('tom199423');
    get('sign-in-password-input').type('tom199423');

    get('sign-in-confirm-btn').should('not.be.disabled').click();
    get('app-nav-sign-in-btn').should('be.disabled');
    get('sign-in-confirm-btn').should('be.disabled');

    cy.wait(['@signIn']);

    cy.get('.button:contains("Submit")').click();

    cy.get('.loader');

    cy.wait(['@putArticle']);

    cy.get('.button:contains("Submit")');
    cy.get('.button:contains("Go back")');
    cy.get('.alert:contains("Article has been created ❤!")');
  });

  it("not signed in user can't create an article", () => {
    cy.visit('/');
    cy.get('.navigation').contains('Articles creator').click();
    cy.get('.button:contains("Start")').should('be.visible').click();
    cy.get('.button:contains("Submit")').click();
    cy.get('.font:contains("Send to review")');
    cy.get('.button:contains("Submit")').click();
    cy.get('.font:contains("Sign in into your account")').should('be.visible');
  });
});
