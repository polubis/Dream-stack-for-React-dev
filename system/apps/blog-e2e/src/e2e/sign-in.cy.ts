import { getter } from '@system/blog-selectors';

describe('Sign in works when: ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const get = getter(cy);

  const signInFixture = () => {
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      (req) => {
        req.reply((res) => {
          res.body = {
            success: true,
            hasErrors: false,
            errors: [],
          };
          res.send(201);
        });
      }
    ).as('signIn');

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
  };

  it('after sign in, user is able to sign out', () => {
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignOut',
      (req) => {
        req.reply((res) => {
          res.body = {
            success: true,
            hasErrors: false,
            errors: [],
          };
          res.send(201);
        });
      }
    ).as('signOut');

    signInFixture();

    get('sign-in-confirm-btn').should('not.be.disabled');
    get('app-nav-sign-out-btn').should('not.be.disabled').click();
    get('app-nav-sign-out-btn').should('be.disabled');
    get('sign-in-confirm-btn').should('be.disabled');
    get('app-nav-sign-in-btn').should('not.be.disabled');
  });

  it('after sign in, the user sees the message', () => {
    signInFixture();
  });

  it('user cannot sign in the interface display error message', () => {
    const errorResponse = {
      hasErrors: true,
      success: false,
      errors: [
        {
          key: 'unknown',
          message: 'Something went wrong...',
        },
      ],
    };
    cy.intercept(
      'POST',
      Cypress.env('NEXT_PUBLIC_API_URL') + 'Account/SignIn',
      (req) => {
        req.reply((res) => {
          res.body = errorResponse;
          res.send(400);
        });
      }
    ).as('signIn');

    get('app-nav-sign-in-btn').should('be.disabled');
    get('app-nav-sign-in-btn').should('not.be.disabled').click();

    cy.url().should('include', '/en/sign-in');

    get('sign-in-login-input').type('tom199423');
    get('sign-in-password-input').type('tom199423');

    get('sign-in-confirm-btn').should('not.be.disabled').click();
    get('app-nav-sign-in-btn').should('be.disabled');
    get('sign-in-confirm-btn').should('be.disabled');

    cy.wait(['@signIn']);

    get('sign-in-error-alert');
  });
});
