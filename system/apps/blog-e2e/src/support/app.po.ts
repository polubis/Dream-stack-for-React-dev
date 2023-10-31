import {
  mockSignInResponse,
  mockResponse,
  mockErrorResponse,
} from '@system/blog-api-mocks';

export const app_nav_selectors = {
  creator_btn: () => cy.get(`.nav-links span.font:contains("Creator")`),
  articles_btn: () => cy.get(`.nav-links span.font:contains("Articles")`),
  sign_in_btn: () => cy.get(`.nav-actions .button:contains("Sign In")`),
  sign_out_btn: () => cy.get(`.nav-actions .button:contains("Sign Out")`),
  user_avatar_btn: () => cy.get(`.nav-actions .popover .button`),
  your_articles_btn: () =>
    cy.get(
      '.nav-actions .box-item-wrapper a[href="/en/your-articles"]:contains("Your articles")'
    ),
  admin_panel_btn: () => cy.get(`.nav-actions .button:contains("Admin panel")`),
};

export const sign_in_feature_selectors = {
  login_input: () => cy.get(`input[placeholder="Login*"]`),
  password_input: () => cy.get(`input[placeholder="Password*"]`),
  confirm_btn: () => cy.get(`.button:contains("Confirm")`),
};

export const components_selectors = {
  alert: (message: string) => cy.get(`.alert:contains(${message})`),
};

export const admin_actions_selectors = {
  reviews_btn: () =>
    cy.get(
      '.box review-screen-toolbox row empty right .button:contains("Reviews")'
    ),
  actions_btn: () => cy.get('.button:contains("Actions")'),
  actions_to_perform_accept_btn: () =>
    cy.get('.popover-content .button:contains("Accept")'),
  actions_to_perform_reject_btn: () =>
    cy.get('.popover-content .button:contains("Reject")'),
  confirm_acccept_modal_view: () =>
    cy.get(
      'h6.font.h6.default:contains("Are you sure that you want to perform this action?")'
    ),
  confirm_accept_btn: () =>
    cy.get('div.box.modal.column.empty .button:contains("Accept")'),
  confirm_accept_article_alert: () =>
    cy.get(
      'div.alert:contains("The article is live. You may leave this page")'
    ),
};

export const article_data_selectors = {
  status: (content: string) =>
    cy.get(`.article-tile-badges:contains(${content})`),
  title: (content: string) =>
    cy.get(`.article-tile-content:contains(${content})`),
  search_input: (value: string) =>
    cy.get('input[placeholder="🏸 Type to find article..."').type(value),
  author: (user: string) =>
    cy.get(`.article-tile-content-user:contains(${user})`),
  show_details_btn: () => cy.get('.button:contains("Show details")'),
  read_article_btn: () => cy.get('.button[title="Read article"]'),
};
export function addArticle(title) {
  cy.visit('/');
  app_nav_selectors.creator_btn().click();
  cy.get('.button:contains("Start")').click();
  cy.get('.tab:contains("Metadata")').click();
  cy.get('input[placeholder="React, Angular, RxJs, etc..."').type('React');
  cy.get('div.filled button.button').click();
  cy.get(
    'input[placeholder="The best title is between 80 and 130 characters"]'
  ).type(title);
  cy.get(
    'textarea[placeholder="The best description is between 80 and 130 characters"]'
  ).type('Some description');
  cy.get('input[type="file"]').attachFile('../fixtures//breading-cat.jpg');
  cy.get('.button:contains("Submit")').click();
  cy.get('.font:contains("Send to review")');
  cy.get('.button:contains("Submit")').click();
  cy.get('.alert:contains("Article has been created ❤!")');
}

export function signInUser(username, password) {
  cy.visit('en/sign-in');
  cy.url().should('include', '/en/sign-in');
  sign_in_feature_selectors.login_input().type(username);
  sign_in_feature_selectors.password_input().type(password);
  sign_in_feature_selectors.confirm_btn().should('not.be.disabled').click();
  cy.contains('You are logged in!').should('be.visible');
}

export function signOutUser() {
  cy.visit('/');
  app_nav_selectors.user_avatar_btn().click();
  app_nav_selectors
    .sign_out_btn()
    .should('not.be.disabled')
    .should('be.visible');
  app_nav_selectors.sign_out_btn().click();
  app_nav_selectors.sign_out_btn().should('be.disabled');
}
