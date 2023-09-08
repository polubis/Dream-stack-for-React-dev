import { server } from '../msw';
import { rest } from 'msw';

const requestFixture = () => {
  return {
    rest, // This allows to override endpoints in test files.
    server, // Created server.
    clean: () => {
      // Helper function to clean mocks in server.
      server.resetHandlers();
    },
  };
};

export { requestFixture };
