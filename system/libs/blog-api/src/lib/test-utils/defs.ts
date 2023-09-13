import type {
  DefaultBodyType,
  PathParams,
  ResponseResolver,
  RestContext,
  RestRequest,
} from 'msw';

type SetupFunction = (callback: () => void) => void;

interface Setup {
  beforeAll: SetupFunction;
  afterEach: SetupFunction;
  afterAll: SetupFunction;
}

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options';
type Resolver = ResponseResolver<
  RestRequest<DefaultBodyType, PathParams<string>>,
  RestContext,
  DefaultBodyType
>;

type Function = (method: Method, path: string, resolver: Resolver) => void;

export type { SetupFunction, Setup, Method, Resolver, Function };
