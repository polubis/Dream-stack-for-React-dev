import { mockErrorResponse, mockResponse } from '@system/blog-api-mocks';
import { getter } from '@system/blog-selectors';
import { Gherkin } from './gherkin';
import { commands } from './commands';

describe('Register works when: ', () => {
  const get = getter(cy);
  const { Given } = Gherkin(commands);

  it('register button moves to register page', () => {
    Given('I go to page', '/')
      .When('I click button', 'Register')
      .Then('Im on page', '/en/register')
      .And('I see button', 'Confirm');
  });

  it('error occurs user can see error alert', () => {
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/Register',
      {
        statusCode: 404,
        body: mockErrorResponse(),
        delay: 1000,
      }
    ).as('register');

    cy.visit('/en/register');

    get('register-login-input').type('piotr1994');
    get('register-email-input').type('piotr1994@wp.pl');
    get('register-password-input').type('piotr1994');
    get('register-repeated-password-input').type('piotr1994');

    get('register-confirm-btn').should('not.be.disabled').click();
    get('register-confirm-btn').should('be.disabled');

    cy.wait(['@register']);

    get('register-confirm-btn').should('not.be.disabled');
    get('register-error-alert');
  });

  it('user is able to create an account and success alert is displayed', () => {
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/Register',
      {
        statusCode: 204,
        body: mockResponse(null),
        delay: 1000,
      }
    ).as('register');

    cy.visit('/en/register');

    get('register-login-input').type('piotr1994');
    get('register-email-input').type('piotr1994@wp.pl');
    get('register-password-input').type('piotr1994');
    get('register-repeated-password-input').type('piotr1994');

    get('register-confirm-btn').should('not.be.disabled').click();
    get('register-confirm-btn').should('be.disabled');

    cy.wait(['@register']);

    get('register-confirm-btn').should('not.be.disabled');
    get('register-ok-alert');
  });
});
