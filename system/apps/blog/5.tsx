import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SignInForm } from './sign-in-form';
import { getPath, requestFixture } from '@system/blog-api';
import { mockErrorResponse } from '@system/blog-api-mocks';

describe('User can use form to sign in when: ', () => {
  const { clean, server, rest } = requestFixture();

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    clean();
  });

  afterAll(() => {
    server.close();
  });

  const LOGIN = 'tom19944';
  const PASSWORD = 'my-password-1994';

  it('goes through failure flow', async () => {
    // No more implementation details leak!
    server.use(
      rest.post('/api/Account/SignIn', (_, res, ctx) => {
        // We skipped "ctx.json" to simulate empty payload.
        return res(ctx.status(404));
      })
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
      expect(
        screen.getByText(/Confirm/).closest('button').disabled
      ).toBeFalsy();
      screen.getByText('Something went wrong...');
    });
  });
});
