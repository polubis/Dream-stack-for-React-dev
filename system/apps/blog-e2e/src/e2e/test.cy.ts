import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Im on articles page', () => {
  cy.visit('/en/articles-creator?url=my-new-best-article');
});

Then('I see article', () => {
  cy.get('a');
});
