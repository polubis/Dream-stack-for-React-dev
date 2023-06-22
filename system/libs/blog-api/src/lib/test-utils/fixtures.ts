import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { server } from './server-mocks';

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

export { createMockAdapter, requestFixture };
