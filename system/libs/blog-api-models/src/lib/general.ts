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
  | 'Account/Register'
  | 'Articles/Accept'
  | 'Articles/Reject'
  | 'Articles/my'
  | 'Articles/SendForApproval';

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

type PaginatedResponse<D> = Response<D> & {
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  currentPageItemsNumber: number;
};

interface Parametrized {
  id: Id;
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
  Parametrized,
  SignedInUserDto,
  ResponseError,
  UserRole,
  Password,
  Username,
  Lang,
  DateStamp,
  APIPath,
};
