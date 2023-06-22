import type { ErrorResponse, PaginatedResponse } from '../../models';

const mockErrorResponse = (data?: Partial<ErrorResponse>): ErrorResponse => ({
  hasErrors: true,
  success: false,
  errors: [
    {
      key: 'unauthorized',
      message: 'Invalid login or password',
    },
  ],
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

export { mockErrorResponse, mockOkPaginatedResponse };
