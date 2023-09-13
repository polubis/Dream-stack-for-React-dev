// Methods that we will use.
type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options';
// Type for msw resolver function
// which allows to setup a mock for
// endpoint.
type Resolver = ResponseResolver<
    RestRequest<DefaultBodyType, PathParams<string>>,
    RestContext,
    DefaultBodyType
>;
// The "mocking" function signature.
type Function = (method: Method, path: string, resolver: Resolver) => void;

export type { SetupFunction, Setup, Method, Resolver, Function };