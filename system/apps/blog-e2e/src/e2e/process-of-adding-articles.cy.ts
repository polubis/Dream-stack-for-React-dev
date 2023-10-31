import {
  signInUser,
  addArticle,
  app_nav_selectors,
  article_data_selectors,
  admin_actions_selectors,
} from '../support/app.po';

describe('Articles', () => {
  it('process of adding article by user and approving it by admin', () => {
    signInUser(
      Cypress.env('REGULAR_USER_LOGIN'),
      Cypress.env('REGULAR_USER_PASSWORD')
    );
    addArticle('article4');
    app_nav_selectors.user_avatar_btn().click();
    app_nav_selectors.your_articles_btn().click();
    article_data_selectors.search_input('ar');
    article_data_selectors.status('Draft').should('be.visible');
    article_data_selectors.title('article4');
    article_data_selectors.author(Cypress.env('REGULAR_USER_LOGIN'));

    signInUser(
      Cypress.env('ADMIN_USER_LOGIN'),
      Cypress.env('ADMIN_USER_PASSWORD')
    );
    app_nav_selectors.user_avatar_btn().click();
    app_nav_selectors.admin_panel_btn().should('be.visible').click();
    article_data_selectors.search_input('ar');
    article_data_selectors.read_article_btn().click();
    admin_actions_selectors.actions_btn().click();
    admin_actions_selectors.actions_to_perform_accept_btn().click();
    admin_actions_selectors.confirm_acccept_modal_view().should('be.visible');
    admin_actions_selectors.confirm_accept_btn().click();
    admin_actions_selectors.confirm_accept_article_alert().should('be.visible');

    signInUser(
      Cypress.env('REGULAR_USER_LOGIN'),
      Cypress.env('REGULAR_USER_PASSWORD')
    );
    app_nav_selectors.articles_btn().click();
    article_data_selectors.search_input('article4');
    article_data_selectors.status('Live').should('be.visible');
  });
});
