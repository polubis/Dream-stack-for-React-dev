import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SignInForm } from './sign-in-form';
import { getError, signIn } from '@system/blog-api';

jest.mock('@system/blog-api');

describe('User can use form to sign in when: ', () => {
  const LOGIN = 'tom19944';
  const PASSWORD = 'my-password-1994';

  it('goes through failure flow', async () => {
    // Here we're mocking our signIn function response.
    (signIn as jest.Mock).mockRejectedValue(null);
    // Here we need to restore original implementation
    // for "getError" function that is used internally
    // by "signIn" action, to parse error.
    (getError as jest.Mock).mockImplementation(
      jest.requireActual('@system/blog-api')['getError']
    );

    render(<SignInForm />);

    expect(screen.getByText(/Confirm/).closest('button').disabled).toBeFalsy();

    fireEvent.change(screen.getByPlaceholderText('Login*'), {
      target: { value: LOGIN },
    });
    fireEvent.change(screen.getByPlaceholderText('Password*'), {
      target: { value: PASSWORD },
    });
    fireEvent.click(screen.getByText(/Confirm/));

    screen.getByDisplayValue(LOGIN);
    screen.getByDisplayValue(PASSWORD);
    expect(screen.getByText(/Confirm/).closest('button').disabled).toBeTruthy();

    await waitFor(() => {
      screen.getByText('Something went wrong...');
    });
  });
});
