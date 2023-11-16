const commands = {
  'Im on page': (url: string) => {
    cy.visit(url);
  },
} as const;

export { commands };
