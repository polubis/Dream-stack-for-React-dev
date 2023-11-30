import { Alert, Box, Button, Field, Font, Input } from '@system/figa-ui';
import { register_store_actions, useRegisterStore } from '../../store/register';

const RegisterForm = () => {
  const { is, form, error } = useRegisterStore();

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
          placeholder="Login*"
          autoFocus
          onChange={(e) =>
            register_store_actions.setField('login', e.target.value)
          }
        />
      </Field>

      <Field label="Email*" error={form.errors.email}>
        <Input
          value={form.values.email}
          invalid={form.result.email}
          placeholder="Email*"
          type="email"
          onChange={(e) =>
            register_store_actions.setField('email', e.target.value)
          }
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
          placeholder="Password*"
          onChange={(e) =>
            register_store_actions.setField('password', e.target.value)
          }
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
          placeholder="Repeat your password*"
          type="password"
          onChange={(e) =>
            register_store_actions.setField('confirmPassword', e.target.value)
          }
        />
      </Field>

      <Box right>
        <Button
          onClick={register_store_actions.submit}
          disabled={(form.touched || form.dirty) && form.invalid}
          loading={is === 'busy'}
        >
          Confirm
        </Button>
      </Box>

      {is === 'fail' && <Alert type="error">{error.message}</Alert>}
      {is === 'ok' && <Alert type="ok">You are logged in!</Alert>}
    </Box>
  );
};

export { RegisterForm };
