import { fireEvent, render, screen } from '@testing-library/react';
import { SignInForm } from './sign-in-form';

describe('User can use form to sign in when: ', () => {
  const LOGIN = 'tom19944';
  const PASSWORD = 'my-password-1994';

  const getLoginInput = () => screen.getByPlaceholderText('Login*');
  const getPasswordInput = () => screen.getByPlaceholderText('Password*');
  const getConfirmButton = () => screen.getByText(/Confirm/);

  it('after typing login and password sign in starts, and confirm button is loading', () => {
    const { asFragment } = render(<SignInForm />);

    fireEvent.change(getLoginInput(), {
      target: { value: LOGIN },
    });
    fireEvent.change(getPasswordInput(), {
      target: { value: PASSWORD },
    });

    fireEvent.click(getConfirmButton());

    screen.getByDisplayValue(LOGIN);
    screen.getByDisplayValue(PASSWORD);

    expect(getConfirmButton().closest('button').disabled).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});
