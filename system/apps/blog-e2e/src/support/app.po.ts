export const app_nav_selectors = {
  sign_in_btn: () => cy.get(`.nav .button:contains("Sign In")`),
  sign_out_btn: () => cy.get(`.popover-content .button:contains("Sign Out")`),
  user_avatar_btn: () => cy.get(`.nav .popover-trigger .button`),
};

export const sign_in_selectors = {
  login_input: () => cy.get(`input[placeholder="Login*"]`),
  password_input: () => cy.get(`input[placeholder="Password*"]`),
  confirm_btn: () => cy.get(`.button:contains("Confirm")`),
  confirm_btn_loading_animation: () => cy.get(`.button .loader`),
  heading: () => cy.get(`.h6:contains("Sign in into your account")`),
  firstTimeSignedInHeading: () => cy.get(`.h6:contains("You're signed in 💚")`),
  firstTimeSignedInDescription: () =>
    cy.get(`.b1:contains("We're redirecting you...")`),
  alreadySignedInHeading: () =>
    cy.get(`.h6:contains("You're already signed in 💚")`),
  alreadySignedInDescription: () =>
    cy.get(`.b1:contains("Only testers 👨‍👦 are trying to double sign in...")`),
};

export const components_selectors = {
  alert: (message: string) => cy.get(`.alert:contains(${message})`),
};
