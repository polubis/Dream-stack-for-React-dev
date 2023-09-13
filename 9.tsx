import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SignInForm } from './sign-in-form';
import { serverFixture } from '@system/blog-api';

describe('User can use form to sign in when: ', () => {
    // Setup happens here!
    const mock = serverFixture({ beforeAll, afterAll, afterEach });

    const LOGIN = 'tom19944';
    const PASSWORD = 'my-password-1994';

    it('goes through failure flow', async () => {
        // Mocking happens here!
        mock('post', '/api/Account/SignIn', (_, res, ctx) => res(ctx.status(404)))

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
            expect(
                screen.getByText(/Confirm/).closest('button').disabled
            ).toBeFalsy();
            screen.getByText('Something went wrong...');
        });
    });
});