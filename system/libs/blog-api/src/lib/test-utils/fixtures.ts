import { server } from '../msw';
import { rest } from 'msw';

const requestFixture = () => {
  return {
    rest,
    server,
    clean: () => {
      server.resetHandlers();
    },
  };
};

export { requestFixture };
