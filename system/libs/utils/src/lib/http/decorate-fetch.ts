import { composeMethodUrl } from './compose-method-url';
import type {
  FactoryConfig,
  HttpConfig,
  HttpMethod,
  MethodConfigWithBody,
  MethodConfigWithoutBody,
} from './defs';

const decorateFetch = async <R, P = undefined>(
  method: HttpMethod,
  factoryConfig: FactoryConfig,
  methodConfig: MethodConfigWithoutBody | MethodConfigWithBody<P> = {}
): Promise<R> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { url, ...restOfFactoryConfig } = factoryConfig;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params, searchParams, ...restOfMethodConfig } = methodConfig;

  const methodConfigWithBody = methodConfig as MethodConfigWithBody<P>;
  const httpConfig = {
    ...restOfFactoryConfig,
    ...restOfMethodConfig,
    method,
  } as HttpConfig;

  if (methodConfigWithBody.body !== undefined) {
    httpConfig.body = JSON.stringify(methodConfigWithBody.body);
  }

  if (restOfFactoryConfig.headers) {
    httpConfig.headers = restOfFactoryConfig.headers;
  }

  if (restOfMethodConfig.headers) {
    httpConfig.headers = {
      ...httpConfig.headers,
      ...restOfMethodConfig.headers,
    };
  }

  const response = await fetch(composeMethodUrl(url, methodConfig), httpConfig);

  const json = (await response.json()) as R;

  if (!response.ok) {
    throw json;
  }

  return json;
};

export { decorateFetch };
