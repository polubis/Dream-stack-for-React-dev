type AppSelectors = 'app-nav-sign-in-btn' | 'app-nav-sign-out-btn';
type SignInSelectors =
  | 'sign-in-login-input'
  | 'sign-in-password-input'
  | 'sign-in-confirm-btn';

type BlogSelectors = AppSelectors | SignInSelectors;

type BlogSelectorAttr = 'data-i';

export type { BlogSelectors, BlogSelectorAttr };
