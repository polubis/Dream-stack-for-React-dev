type AppSelectors =
  | 'app-nav-sign-in-btn'
  | 'app-nav-sign-out-btn'
  | 'app-nav-user-avatar-btn'
  | 'app-nav-user-email'
  | 'app-nav-user-roles'
  | 'app-nav-user-username'
  | 'app-footer-recommended-articles-section'
  | 'app-footer-recommended-articles-list';

type SignInSelectors =
  | 'sign-in-login-input'
  | 'sign-in-password-input'
  | 'sign-in-confirm-btn'
  | 'sign-in-error-alert'
  | 'sign-in-ok-alert';

type RegisterSelectors =
  | 'register-login-input'
  | 'register-email-input'
  | 'register-password-input'
  | 'register-repeated-password-input'
  | 'register-confirm-btn'
  | 'register-error-alert'
  | 'register-ok-alert';

type BlogSelectors = AppSelectors | SignInSelectors | RegisterSelectors;

type BlogSelectorAttr = 'data-i';

export type { BlogSelectors, BlogSelectorAttr };
