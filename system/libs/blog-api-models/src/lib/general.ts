type Description = string;
type Id = string;
type Title = string;
type Email = string;
type Name = string;
type Url = string;

interface ResponseError {
  key: string;
  message: 'string';
}

interface Response<D> {
  success: boolean;
  hasErrors: boolean;
  errors: ResponseError[];
  data: D;
}

interface PaginatedResponse<D> extends Response<D> {
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  currentPageItemsNumber: number;
}

export type {
  Id,
  Description,
  Title,
  Name,
  Email,
  Url,
  Response,
  PaginatedResponse,
};
