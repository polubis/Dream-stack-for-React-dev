const commands = {
  'I go to page': (url: string) => {
    cy.visit(url);
  },
  'Im on page': (url: string) => {
    cy.url().should('include', url);
  },
  'I click button': (name: string) => {
    cy.get(`button.button:contains(${name})`).click();
  },
  'I see button': (name: string) => {
    cy.get(`button.button:contains(${name})`);
  },
} as const;

export { commands };
