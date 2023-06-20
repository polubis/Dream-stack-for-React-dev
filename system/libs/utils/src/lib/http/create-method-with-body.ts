import { decorateFetch } from './decorate-fetch';
import type {
  FactoryConfig,
  HttpMethodWithBody,
  MethodConfigWithBody,
} from './defs';
import { getLackOfUrlError } from './errors';
import { isUrl } from './is-url';

const createMethodWithBody =
  (method: HttpMethodWithBody) =>
  <R, P>(factoryConfig: FactoryConfig) => {
    if (!isUrl(factoryConfig.url)) {
      throw Error(getLackOfUrlError());
    }

    return (methodConfig: MethodConfigWithBody<P>) =>
      decorateFetch<R, P>(method, factoryConfig, methodConfig);
  };

export { createMethodWithBody };
