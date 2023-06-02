describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.get('h5').contains('Sparkle flicks');
  });
});
