import { getter } from '@system/blog-selectors';

describe('blog', () => {
  const get = getter(cy);

  it('loads articles in footer when scrolled down', () => {
    cy.intercept('GET', Cypress.env('NEXT_PUBLIC_API_URL') + 'Articles*', {
      statusCode: 201,
      body: {
        success: true,
        hasErrors: false,
        errors: [],
        data: [],
      },
      delay: 1000,
    }).as('articles');

    cy.visit('/');

    get('app-footer-recommended-articles-section');

    cy.scrollTo('bottom', { duration: 1000 });

    cy.wait('@articles');

    get('app-footer-recommended-articles-list');
  });
});
