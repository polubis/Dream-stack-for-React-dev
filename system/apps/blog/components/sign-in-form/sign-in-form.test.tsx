import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SignInForm } from './sign-in-form';
import {
  BlogEnv,
  getPath,
  mockErrorResponse,
  requestFixture,
} from '@system/blog-api';
import { storage } from '@system/utils';

describe('User can use form to sign in when: ', () => {
  const authStorage = storage<BlogEnv>();
  const { clean, server, rest } = requestFixture();

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    clean();
    authStorage.clear();
  });

  afterAll(() => {
    server.close();
  });

  const LOGIN = 'tom19944';
  const PASSWORD = 'my-password-1994';

  const signInFormTest = () => {
    const result = render(<SignInForm />);

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

    return result;
  };

  it('goes through success flow', async () => {
    const { asFragment } = signInFormTest();

    await waitFor(() => {
      screen.getByText(/You are logged in!/);
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('goes through failure flow', async () => {
    server.use(
      rest.post(getPath('Account/SignIn'), (_, res, ctx) => {
        return res(ctx.status(404), ctx.json(mockErrorResponse()));
      })
    );

    const { asFragment } = signInFormTest();

    await waitFor(() => {
      screen.getByText(mockErrorResponse().errors[0].message);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
