import { Font } from '@system/figa-ui';
import { MainLayout, SignInForm } from '../../components';
import { useAuthStore } from '../../store';

const SignInView = () => {
  const authStore = useAuthStore();

  return (
    <MainLayout className="sign-in-view">
      {(authStore.key === 'idle' || authStore.key === 'checking') && (
        <Font className="default-message" variant="h2">
          Give me second
        </Font>
      )}

      {(authStore.key === 'sign-in-error' ||
        authStore.key === 'sign-out-error') && (
        <Font className="error-message" variant="h2">
          Authorization failed
        </Font>
      )}

      {authStore.key === 'not-signed-in' && <SignInForm />}

      {authStore.key === 'signed-in' && (
        <Font className="authorized-message" variant="h2">
          You are already logged in
        </Font>
      )}
    </MainLayout>
  );
};

export { SignInView };
