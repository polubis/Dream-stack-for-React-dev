describe('blog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const get = (id: string) => {
    return cy.get(`[data-i=${id}]`);
  };

  it('goes to sign in flow and displays error when occurs', () => {
    get('sign-in-button').click();

    cy.url().should('include', '/en/sign-in');
  });
});
