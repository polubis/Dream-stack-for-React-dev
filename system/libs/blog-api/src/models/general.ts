type Description = string;
type Id = string;
type Title = string;
type Email = string;
type Name = string;
type Url = string;
type Login = string;
type Password = string;
type DateStamp = string;
type Content = string;
type Lang = 'pl' | 'en';

type APIPath = 'Account/SignIn' | 'Account/SignOut' | 'Articles';

interface ResponseError {
  key: string;
  message: string;
}

interface Response<D> {
  success: boolean;
  hasErrors: boolean;
  errors: ResponseError[];
  data: D;
}

interface ErrorResponse {
  success: boolean;
  hasErrors: boolean;
  errors: ResponseError[];
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
  ErrorResponse,
  Login,
  ResponseError,
  Password,
  DateStamp,
  Content,
  APIPath,
  Lang,
};
