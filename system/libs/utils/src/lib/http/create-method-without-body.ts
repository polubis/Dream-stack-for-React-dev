import { decorateFetch } from './decorate-fetch';
import type {
  FactoryConfig,
  HttpMethodWithoutBody,
  MethodConfigWithoutBody,
} from './defs';
import { getLackOfUrlError } from './errors';
import { isUrl } from './is-url';

const createMethodWithoutBody =
  (method: HttpMethodWithoutBody) =>
  <R>(factoryConfig: FactoryConfig) => {
    if (!isUrl(factoryConfig.url)) {
      throw Error(getLackOfUrlError());
    }

    return (methodConfig: MethodConfigWithoutBody = {}) =>
      decorateFetch<R>(method, factoryConfig, methodConfig);
  };

export { createMethodWithoutBody };
