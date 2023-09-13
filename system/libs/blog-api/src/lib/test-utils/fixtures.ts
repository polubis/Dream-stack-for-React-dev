import { server } from '../msw';
import { rest } from 'msw';
import type * as ServerFixture from './defs';

const requestFixture = () => {
  return {
    rest,
    server,
    clean: () => {
      server.resetHandlers();
    },
  };
};

const serverFixture = ({
  beforeAll,
  afterAll,
  afterEach,
}: ServerFixture.Setup) => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  const mock: ServerFixture.Function = (method, path, resolver) => {
    server.use(rest[method](path, resolver));
  };

  return mock;
};

export { requestFixture, serverFixture };
