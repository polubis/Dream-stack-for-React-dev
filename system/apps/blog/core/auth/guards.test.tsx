import { act, render, screen } from '@testing-library/react';
import { AdminsOnly, NotSignedInOnly, SignedInOnly } from './guards';
import { storeFixture } from '../../store/test-utils';
import { useAuthStore } from '../../store/auth';
import { mockSignedInUser } from '@system/blog-api-mocks';

describe('Guards can be used when: ', () => {
  it('signed in user is determined', () => {
    const authStore = storeFixture(useAuthStore);

    const { unmount } = render(
      <SignedInOnly fallback="Fallback">Content</SignedInOnly>
    );

    expect(screen.queryByText(/Content/)).toBeFalsy();

    act(() => {
      useAuthStore.setState({
        is: 'unauthorized',
      });
    });

    screen.getByText(/Fallback/);

    act(() => {
      useAuthStore.setState({
        is: 'authorized',
        user: mockSignedInUser(),
      });
    });

    screen.getByText(/Content/);

    unmount();
    authStore.restore();
  });

  it('not signed in user is determined', () => {
    const authStore = storeFixture(useAuthStore);

    const { unmount } = render(
      <NotSignedInOnly fallback="Fallback">Content</NotSignedInOnly>
    );

    expect(screen.queryByText(/Content/)).toBeFalsy();

    act(() => {
      useAuthStore.setState({
        is: 'unauthorized',
      });
    });

    screen.getByText(/Content/);

    act(() => {
      useAuthStore.setState({
        is: 'authorized',
        user: mockSignedInUser(),
      });
    });

    screen.getByText(/Fallback/);

    unmount();
    authStore.restore();
  });

  it('admin user is determined', () => {
    const authStore = storeFixture(useAuthStore);

    const { unmount } = render(
      <AdminsOnly fallback="Fallback">Content</AdminsOnly>
    );

    expect(screen.queryByText(/Content/)).toBeFalsy();

    act(() => {
      useAuthStore.setState({
        is: 'unauthorized',
      });
    });

    screen.getByText(/Fallback/);

    act(() => {
      useAuthStore.setState({
        is: 'authorized',
        user: {
          ...mockSignedInUser(),
          roles: ['Admin'],
        },
      });
    });

    screen.getByText(/Content/);

    unmount();
    authStore.restore();
  });
});
