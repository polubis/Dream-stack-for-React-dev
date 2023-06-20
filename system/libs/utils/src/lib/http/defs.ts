import type { Observable } from 'rxjs';

type HttpMethodWithBody = 'post' | 'put' | 'patch';
type HttpMethodWithoutBody = 'get' | 'delete';
type HttpMethod = HttpMethodWithBody | HttpMethodWithoutBody;

type FetchConfig = RequestInit;
type FetchResponse = Response;

interface HttpConfig extends Omit<FetchConfig, 'method'> {
  method: HttpMethod;
}

type SearchParams = Record<string, string>;
type Params = string[];
type Url = string;

interface FactoryConfig extends Omit<HttpConfig, 'method' | 'body'> {
  url: Url;
}

interface MethodConfigWithoutBody extends Omit<HttpConfig, 'method' | 'body'> {
  params?: string[];
  searchParams?: SearchParams;
}

interface MethodConfigWithBody<P> extends MethodConfigWithoutBody {
  body: P;
}

interface StartedStatus {
  key: 'started';
}

interface OkStatus {
  key: 'ok';
}

interface ErrorStatus {
  key: 'error';
}

interface AbortedStatus {
  key: 'aborted';
}

type Request = StartedStatus | OkStatus | ErrorStatus | AbortedStatus;

type Intercept = () => Observable<Request>;

interface SourceConfig extends Omit<HttpConfig, 'method' | 'body'> {
  url: Url;
}

export type {
  HttpConfig,
  SearchParams,
  Params,
  FactoryConfig,
  SourceConfig,
  MethodConfigWithBody,
  MethodConfigWithoutBody,
  Url,
  FetchResponse,
  HttpMethodWithBody,
  HttpMethodWithoutBody,
  HttpMethod,
  Intercept,
  FetchConfig,
  Request,
  StartedStatus,
  OkStatus,
  ErrorStatus,
  AbortedStatus,
};
