describe('User is able to play guitar notes game when', () => {
  beforeEach(() => cy.visit('/'));

  it('goes to result screen', () => {
    cy.get('.button').contains('See our game').click();

    cy.get('.button').contains('Continue').click();

    cy.get('.button').contains('Start!').click();

    cy.get('.font').contains('Prepare yourself');

    cy.get('.font').contains('Find');

    cy.get('.guitar-fretboard-fret-note').first().click();
    cy.get('.guitar-fretboard-fret-note').first().click();
    cy.get('.guitar-fretboard-fret-note').first().click();
    cy.get('.guitar-fretboard-fret-note').first().click();
    cy.get('.guitar-fretboard-fret-note').first().click();

    cy.get('.font').contains('Thanks a lot');
  });
});
