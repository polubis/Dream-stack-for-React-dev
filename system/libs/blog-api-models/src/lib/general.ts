type Description = string;
type Id = string;
type Title = string;
type Email = string;
type Name = string;
type Url = string;
type Login = string;
type Username = string;
type Password = string;
type DateStamp = string;

interface SignedInUserDto {
  username: Username;
  roles: UserRole[];
  email: Email;
}

type UserRole = 'Admin';

type APIPath =
  | 'Account/SignIn'
  | 'Account/SignOut'
  | 'Articles'
  | 'Account/Register';

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
  SignedInUserDto,
  ResponseError,
  UserRole,
  Password,
  Username,
  DateStamp,
  APIPath,
};
