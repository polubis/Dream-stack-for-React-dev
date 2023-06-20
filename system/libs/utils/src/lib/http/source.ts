import { Subject } from 'rxjs';
import type {
  FactoryConfig,
  Intercept,
  MethodConfigWithBody,
  MethodConfigWithoutBody,
  Request,
  SourceConfig,
} from './defs';
import { get, pst, put, pch, del } from './methods';
import { getLackOfUrlError } from './errors';
import { isUrl } from './is-url';
import { decorateWithSourceUrl } from './decorate-with-source-url';

const source = (sourceConfig: SourceConfig) => {
  if (!isUrl(sourceConfig.url)) {
    throw Error(getLackOfUrlError());
  }

  const requests = new Subject<Request>();
  const requests$ = requests.asObservable();

  const decorateWithBodyMethod =
    <R, P>(method: (methodConfig: MethodConfigWithBody<P>) => Promise<R>) =>
    async (methodConfig: MethodConfigWithBody<P>) => {
      requests.next({ key: 'started' });
  
      try {
        const response = await method(methodConfig);

        requests.next({ key: 'ok' });

        return response;
      } catch (err: unknown) {
        requests.next({ key: 'error' });
        throw err;
      }
    };

  const decorateWithoutBodyMethod =
    <R>(method: (methodConfig?: MethodConfigWithoutBody) => Promise<R>) =>
    async (methodConfig?: MethodConfigWithoutBody) => {
      requests.next({ key: 'started' });

      try {
        const response = await method(methodConfig);

        requests.next({ key: 'ok' });

        return response;
      } catch (err: unknown) {
        requests.next({ key: 'error' });

        throw err;
      }
    };

  const intercept: Intercept = () => {
    return requests$;
  };

  return {
    get: <R>(factoryConfig: FactoryConfig) =>
      decorateWithoutBodyMethod(
        get<R>(decorateWithSourceUrl(sourceConfig, factoryConfig))
      ),
    del: <R>(factoryConfig: FactoryConfig) =>
      decorateWithoutBodyMethod(
        del<R>(decorateWithSourceUrl(sourceConfig, factoryConfig))
      ),
    pst: <R, P>(factoryConfig: FactoryConfig) =>
      decorateWithBodyMethod(
        pst<R, P>(decorateWithSourceUrl(sourceConfig, factoryConfig))
      ),
    put: <R, P>(factoryConfig: FactoryConfig) =>
      decorateWithBodyMethod(
        put<R, P>(decorateWithSourceUrl(sourceConfig, factoryConfig))
      ),
    pch: <R, P>(factoryConfig: FactoryConfig) =>
      decorateWithBodyMethod(
        pch<R, P>(decorateWithSourceUrl(sourceConfig, factoryConfig))
      ),
    intercept,
  };
};

export { source };
