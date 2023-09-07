import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SignInForm } from './sign-in-form';
import { signIn } from '@system/blog-api';

jest.mock('@system/blog-api')

describe('User can use form to sign in when: ', () => {
    const LOGIN = 'tom19944';
    const PASSWORD = 'my-password-1994';

    it('goes through success flow', async () => {
        // Here we're mocking our signIn function response.
        (signIn as jest.Mock).mockResolvedValue({})
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
            // HTTP request is an async operation, and we're mocking a "Promise", so
            // we need to use "waitFor" to check the expected results. 
            screen.getByText(/You are logged in!/)
            expect(screen.getByText(/Confirm/).closest('button').disabled).toBeFalsy();
        })
    });
});