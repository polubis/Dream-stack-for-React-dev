describe('User is able to play guitar notes game when', () => {
  beforeEach(() => cy.visit('/'));

  const playGameFixture = () => {
    cy.get('.button').contains('Start!').click();

    cy.get('.font').contains('Prepare yourself');

    cy.get('.font').contains('Find');

    cy.get('.guitar-fretboard-fret-note').first().click();
    cy.get('.guitar-fretboard-fret-note').first().click();
    cy.get('.guitar-fretboard-fret-note').first().click();
    cy.get('.guitar-fretboard-fret-note').first().click();
    cy.get('.guitar-fretboard-fret-note').first().click();
  };

  it('plays game until end and repeats with different notation', () => {
    cy.get('.button').contains('See our game').click();

    cy.get('.button').contains('Continue').click();

    playGameFixture();

    cy.get('.font').contains('Thanks a lot');

    cy.get('.button').contains('Play again!').click();

    cy.get('.select-expander').click();

    cy.get('[data-key="bmoll"]').click();

    playGameFixture();
  });
});
