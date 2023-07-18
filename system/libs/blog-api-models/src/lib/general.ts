type Description = string;
type Id = string;
type Title = string;
type Email = string;
type Name = string;
type Url = string;
type Content = string;
type Login = string;
type Username = string;
type Password = string;
type DateStamp = string;

type UserRole = 'Admin';

type Lang = 'en' | 'pl';

interface SignedInUserDto {
  username: Username;
  roles: UserRole[];
  email: Email;
}

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
  Content,
  PaginatedResponse,
  ErrorResponse,
  Login,
  SignedInUserDto,
  ResponseError,
  UserRole,
  Password,
  Username,
  Lang,
  DateStamp,
  APIPath,
};
