export const app_nav_selectors = {
  sign_in_btn: () => cy.get(`.nav .button:contains("Sign In")`),
  sign_out_btn: () => cy.get(`.nav .button:contains("Sign Out")`),
  user_avatar_btn: () => cy.get(`.nav .popover .button`),
};

export const sign_in_feature_selectors = {
  login_input: () => cy.get(`input[placeholder="Login*"]`),
  password_input: () => cy.get(`input[placeholder="Password*"]`),
  confirm_btn: () => cy.get(`.button:contains("Confirm")`),
};

export const components_selectors = {
  alert: (message: string) => cy.get(`.alert:contains(${message})`),
};
