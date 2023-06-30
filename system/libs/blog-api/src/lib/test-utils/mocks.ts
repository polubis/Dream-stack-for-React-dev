import type {
  ErrorResponse,
  GetArticlesResponse,
  GetArticlesSearchParams,
  PaginatedResponse,
  ResponseError,
} from '../../models';

const mockResponseError = (
  error: Partial<ResponseError> = {}
): ResponseError => {
  return {
    key: 'unknown',
    message: 'Something went wrong...',
    ...error,
  };
};

const mockErrorResponse = (data?: Partial<ErrorResponse>): ErrorResponse => ({
  hasErrors: true,
  success: false,
  errors: [mockResponseError()],
  ...data,
});

const mockOkPaginatedResponse = <T>(
  response: Omit<Partial<PaginatedResponse<T>>, 'data'> & { data: T }
): PaginatedResponse<T> => ({
  itemsPerPage: 1,
  totalPages: 1,
  currentPage: 1,
  currentPageItemsNumber: 1,
  success: true,
  hasErrors: false,
  errors: [],
  ...response,
});

const mockGetArticlesSearchParams = (
  params?: Partial<GetArticlesSearchParams>
): GetArticlesSearchParams => ({
  Search: 'react',
  CurrentPage: 1,
  ItemsPerPage: 15,
  ...params,
});

const mockOkGetArticlesResponse = (
  response?: Partial<GetArticlesResponse>
): GetArticlesResponse => {
  return {
    itemsPerPage: 20,
    totalPages: 1,
    currentPage: 1,
    currentPageItemsNumber: 2,
    data: [
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
    ],
    success: true,
    hasErrors: false,
    errors: [],
    ...response,
  };
};

export {
  mockErrorResponse,
  mockOkPaginatedResponse,
  mockGetArticlesSearchParams,
  mockOkGetArticlesResponse,
  mockResponseError,
};
