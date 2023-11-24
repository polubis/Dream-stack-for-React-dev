import { act, render, screen } from '@testing-library/react';
import { DeleteArticlePopover } from './delete-article-popover';
import { storeFixture } from '../../store/test-utils';
import { useArticleStore } from '../../store/article';
import { useAuthStore } from '../../store/auth';
import {
  mockGetArticleResponse,
  mockSignedInUser,
} from '@system/blog-api-mocks';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Delete article feature works when: ', () => {
  it('only admin or author of article is able to delete', () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/en/something/',
    });
    const user = mockSignedInUser();
    const article = mockGetArticleResponse().data;
    const articleStore = storeFixture(useArticleStore, {
      is: 'ok',
      article,
    });
    const authStore = storeFixture(useAuthStore, {
      key: 'authorized',
      user,
      check: jest.fn(),
    });

    const { asFragment, unmount } = render(<DeleteArticlePopover />);

    screen.getByTitle(/Delete article/);

    act(() => {
      useAuthStore.setState({
        key: 'authorized',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        user: { ...user, roles: ['User'] as any },
        check: jest.fn(),
      });
      useArticleStore.setState({
        is: 'ok',
        article: {
          ...article,
          authorName: 'Some random username',
        },
      });
    });

    expect(screen.queryByTitle(/Delete article/)).toBeFalsy();

    act(() => {
      useAuthStore.setState({
        key: 'authorized',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        user: { ...user, roles: ['User'] as any },
        check: jest.fn(),
      });
      useArticleStore.setState({
        is: 'ok',
        article: {
          ...article,
          authorName: user.username,
        },
      });
    });

    screen.getByTitle(/Delete article/);
    expect(asFragment()).toMatchSnapshot();

    unmount();
    articleStore.restore();
    authStore.restore();
  });
});
