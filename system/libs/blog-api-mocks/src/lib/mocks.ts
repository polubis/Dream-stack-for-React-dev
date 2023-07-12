import type { AxiosRequestHeaders, AxiosResponse } from 'axios';
import {
  ArticleDto,
  ErrorResponse,
  GetArticlesResponse,
  GetArticlesSearchParams,
  PaginatedResponse,
  RegisterPayload,
  Response,
  ResponseError,
  SignInPayload,
  SignInResponse,
  SignedInUserDto,
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

const mockGetArticlesSearchParams = mock<GetArticlesSearchParams>({
  Search: 'react',
  CurrentPage: 1,
  ItemsPerPage: 15,
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

const mockArticles = (): ArticleDto[] => [
  {
    id: 'c54cefcb-ccd0-4b94-f68f-08db5ed3b360',
    title: 'Porting for React applications',
    description:
      "Let's see how you can save time by using the porting technique when migrating from one technology to another.",
    authorEmail: 'Polubis@greenonsoftware.com',
    authorName: 'Polubis',
    thumbnailUrl:
      'https://greenonsoftwaresa.blob.core.windows.net/dev/tmp8959_202305271659137.jpg',
    status: 'Accepted',
    url: 'https://greenonsoftware.com/articles/patterns/porting-for-react-applications/',
  },
  {
    id: 'c54cefcb-ccd0-4b94-f68f-08db5edx360',
    title: 'Porting for React applications',
    description:
      "Let's see how you can save time by using the porting technique when migrating from one technology to another.",
    authorEmail: 'Polubis@greenonsoftware.com',
    authorName: 'Polubis',
    thumbnailUrl:
      'https://greenonsoftwaresa.blob.core.windows.net/dev/tmp8959_202305271659137.jpg',
    status: 'Accepted',
    url: 'https://greenonsoftware.com/articles/patterns/porting-for-react-applications/',
  },
];

const mockGetArticlesResponse = mock<GetArticlesResponse>(
  mockPaginatedResponse(mockArticles())()
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

export {
  mockErrorResponse,
  mockPaginatedResponse,
  mockSignInPayload,
  mockGetArticlesSearchParams,
  mockGetArticlesResponse,
  mockResponse,
  mockResponseError,
  mockSignInResponse,
  mockSignedInUser,
  mockAxiosResponse,
  mockRegisterPayload,
};
