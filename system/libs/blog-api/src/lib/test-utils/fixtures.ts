import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { server } from '../msw';
import { APIEnv, APIEnvKey, EnvVar, getEnv } from '../../environment';

const createMockAdapter = () => {
  const mock = new MockAdapter(axios);
  return mock;
};

const requestFixture = () => {
  const adapter = createMockAdapter();

  return {
    server,
    adapter,
    clean: () => {
      server.resetHandlers();
      adapter.reset();
    },
  };
};

const envFixture = <K extends APIEnvKey>(key: K, defaultValue: APIEnv[K]) => {
  const [, url] = getEnv(key);
  const defaultUrl = url ?? defaultValue;

  return {
    set: (value = url) => {
      process.env[key] = value;
    },
    delete: () => {
      delete process.env[key];
    },
    restore: () => {
      process.env[key] = defaultUrl;
    },
  };
};

export { createMockAdapter, requestFixture, envFixture };
