import { Alert, Box, Button, Field, Font, Input } from '@system/figa-ui';
import { useRegisterStore } from '../../store/register';
import { get } from '@system/blog-selectors';

const RegisterForm = () => {
  const { key, form, setField, submit, error } = useRegisterStore();

  return (
    <Box
      spacing={[400, 150, 150, 150, 400, 400]}
      maxWidth="320px"
      margin="auto"
    >
      <Font variant="h6">Sign in into your account</Font>
      <Field label="Login*" hint="6 - 20 characters" error={form.errors.login}>
        <Input
          invalid={form.result.login}
          value={form.values.login}
          autoFocus
          data-i={get('register-login-input')}
          onChange={(e) => setField('login', e.target.value)}
        />
      </Field>

      <Field label="Email*" error={form.errors.email}>
        <Input
          value={form.values.email}
          invalid={form.result.email}
          type="email"
          data-i={get('register-email-input')}
          onChange={(e) => setField('email', e.target.value)}
        />
      </Field>

      <Field
        label="Password*"
        hint="6 - 20 characters"
        error={form.errors.password}
      >
        <Input
          value={form.values.password}
          invalid={form.result.password}
          type="password"
          data-i={get('register-password-input')}
          onChange={(e) => setField('password', e.target.value)}
        />
      </Field>

      <Field
        label="Repeat your password*"
        hint="6 - 20 characters"
        error={form.errors.confirmPassword}
      >
        <Input
          value={form.values.confirmPassword}
          invalid={form.result.confirmPassword}
          type="password"
          data-i={get('register-repeated-password-input')}
          onChange={(e) => setField('confirmPassword', e.target.value)}
        />
      </Field>

      <Box right>
        <Button
          data-i={get('register-confirm-btn')}
          onClick={submit}
          disabled={(form.touched || form.dirty) && form.invalid}
          loading={key === 'pending'}
        >
          Confirm
        </Button>
      </Box>

      {key === 'error' && (
        <Alert data-i={get('register-error-alert')} type="error">
          {error.message}
        </Alert>
      )}
      {key === 'ok' && (
        <Alert data-i={get('register-ok-alert')} type="ok">
          You are logged in!
        </Alert>
      )}
    </Box>
  );
};

export { RegisterForm };
