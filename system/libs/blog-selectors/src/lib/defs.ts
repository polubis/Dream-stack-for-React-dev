type AppSelectors =
  | 'app-nav-sign-in-btn'
  | 'app-nav-sign-out-btn'
  | 'app-nav-user-avatar-btn'
  | 'app-footer-recommended-articles-section'
  | 'app-footer-recommended-articles-list';
type SignInSelectors =
  | 'sign-in-login-input'
  | 'sign-in-password-input'
  | 'sign-in-confirm-btn'
  | 'sign-in-error-alert'
  | 'sign-in-ok-alert';

type BlogSelectors = AppSelectors | SignInSelectors;

type BlogSelectorAttr = 'data-i';

export type { BlogSelectors, BlogSelectorAttr };
