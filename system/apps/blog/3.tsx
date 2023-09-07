describe('User can use form to sign in when: ', () => {
    const LOGIN = 'tom19944';
    const PASSWORD = 'my-password-1994';

    it('goes through success flow', async () => {
        render(<SignInForm />);
        // Initially, our button should be disabled - nothing happened yet.
        expect(screen.getByText(/Confirm/).closest('button').disabled).toBeFalsy();

        // Populating fields with data and submitting.
        fireEvent.change(screen.getByPlaceholderText('Login*'), {
            target: { value: LOGIN },
        });
        fireEvent.change(screen.getByPlaceholderText('Password*'), {
            target: { value: PASSWORD },
        });
        fireEvent.click(screen.getByText(/Confirm/));

        // Checking if the fields have been populated.
        screen.getByDisplayValue(LOGIN);
        screen.getByDisplayValue(PASSWORD);
        // Checking the button disabled status.
        expect(screen.getByText(/Confirm/).closest('button').disabled).toBeTruthy();
    });
});