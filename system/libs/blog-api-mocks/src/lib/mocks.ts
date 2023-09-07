import type { AxiosRequestHeaders, AxiosResponse } from 'axios';
import type {
  ArticleDto,
  ErrorResponse,
  GetArticlesResponse,
  GetArticlesParams,
  PaginatedResponse,
  RegisterPayload,
  Response,
  ResponseError,
  SignInPayload,
  SignInResponse,
  SignedInUserDto,
  GetArticleParams,
  GetArticleResponse,
  FullArticleDto,
  CreateArticlePayload,
  Parametrized,
  UpdateArticlePayload,
  ArticleReviewDto,
} from '@system/blog-api-models';
import { mock } from '@system/utils';

const mockResponseError = mock<ResponseError>({
  key: 'unknown',
  message: 'Something went wrong...',
});

const mockResponse = <D>(data: D) =>
  mock<Response<D>>({
    hasErrors: false,
    success: true,
    errors: [],
    data,
  });

const mockErrorResponse = mock<ErrorResponse>({
  hasErrors: true,
  success: false,
  errors: [mockResponseError()],
});

const mockPaginatedResponse = <D>(data: D) =>
  mock<PaginatedResponse<D>>({
    itemsPerPage: 1,
    totalPages: 1,
    currentPage: 1,
    currentPageItemsNumber: 1,
    ...mockResponse(data)(),
  });

const mockGetArticlesParams = mock<GetArticlesParams>({
  Search: 'react',
  CurrentPage: 1,
  ItemsPerPage: 15,
  Status: 'Accepted',
  lang: 'en',
});

const mockGetArticleParams = mock<GetArticleParams>({
  lang: 'en',
  url: 'name-of-article',
});

const mockCreateArticlePayload = mock<CreateArticlePayload>({
  lang: 'en',
  title: 'My title',
  description: 'My article description',
  thumbnail: {} as File,
  content: '### Article content`',
});

const mockUpdateArticlePayload = mock<UpdateArticlePayload>({
  ...mockCreateArticlePayload(),
  url: 'my-title',
});

const mockAxiosResponse = <D>(data: D) =>
  mock<AxiosResponse<D>>({
    status: 201,
    statusText: 'ok',
    headers: {},
    config: {
      headers: {} as AxiosRequestHeaders,
    },
    request: {},
    data,
  });

const mockArticle = mock<ArticleDto>({
  id: 'c54cefcb-ccd0-4b94-f68f-08db5ed3b360',
  title: 'Porting for React applications',
  description:
    "Let's see how you can save time by using the porting technique when migrating from one technology to another.",
  authorEmail: 'Polubis@greenonsoftware.com',
  authorName: 'Polubis',
  thumbnailUrl:
    'https://greenonsoftwarestorage.blob.core.windows.net/dev/tmpE09_202307171409592.png',
  status: 'Accepted',
  url: 'porting-for-react-applications',
  lang: 'en',
});

const mockArticleReview = mock<ArticleReviewDto>({
  id: '793b28bc-23d6-427c-a9b8-12313dasdad',
  articleId: '9b82b630-9ff8-4a05-06ad-08dbac44af52',
  createdDate: '2023-09-07T07:24:50.3554487',
  modifiedDate: '2023-09-07T07:24:50.3554487',
  reviewerName: 'Polubis',
  isCurrentUserReviewer: true,
});

const mockArticles = (): ArticleDto[] => [
  mockArticle(),
  mockArticle({
    id: 'cf4cefcb-ccd0-4b94-f68f-08db5ed3b362',
    title: 'Porting for React applications',
    url: 'porting-for-react-applications',
  }),
];

const mockFullArticle = mock<FullArticleDto>({
  ...mockArticle(),
  content: '# Markdown content',
});

const mockGetArticlesResponse = mock<GetArticlesResponse>(
  mockPaginatedResponse(mockArticles())()
);

const mockGetArticleResponse = mock<GetArticleResponse>(
  mockResponse(mockFullArticle())()
);

const mockRegisterPayload = mock<RegisterPayload>({
  login: 'piotr1994',
  password: 'piotr1994',
  confirmPassword: 'piotr1994',
  email: 'piotr@wp.pl',
});

const mockSignInPayload = mock<SignInPayload>({
  login: 'piotr1994',
  password: 'piotr1994',
});

const mockSignedInUser = mock<SignedInUserDto>({
  email: 'piotr@wp.pl',
  roles: ['Admin'],
  username: 'Piotr',
});

const mockSignInResponse = mock<SignInResponse>(
  mockResponse(mockSignedInUser())()
);

const mockParametrized = mock<Parametrized>({
  id: 'cf4cefcb-ccd0-4b94-f68f-08db5ed3b362',
});

export {
  mockErrorResponse,
  mockPaginatedResponse,
  mockFullArticle,
  mockSignInPayload,
  mockGetArticlesParams,
  mockGetArticlesResponse,
  mockResponse,
  mockResponseError,
  mockCreateArticlePayload,
  mockSignInResponse,
  mockSignedInUser,
  mockAxiosResponse,
  mockGetArticleParams,
  mockParametrized,
  mockRegisterPayload,
  mockGetArticleResponse,
  mockArticleReview,
  mockUpdateArticlePayload,
};
