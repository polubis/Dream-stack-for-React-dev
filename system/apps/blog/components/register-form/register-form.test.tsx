import { render } from '@testing-library/react';
import { RegisterForm } from './register-form';
import { storeFixture } from '../../store/test-utils';
import { registerForm, useRegisterStore } from '../../store/register';

describe('User can register when: ', () => {
  it('validation messages are displayed', () => {
    const { restore } = storeFixture(useRegisterStore, {
      ...useRegisterStore.getState(),
      form: registerForm.set(
        registerForm.init({
          login: '',
          password: '',
          confirmPassword: '',
          email: '',
        })
      )({
        login: '23',
        password: 'dd',
        email: '',
        confirmPassword: 'D3',
      }),
    });

    const { asFragment } = render(<RegisterForm />);

    expect(asFragment()).toMatchSnapshot();

    restore();
  });
});
