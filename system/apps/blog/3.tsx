import { requestFixture } from '@system/blog-api';

describe('Any description title: ', () => {
  const { clean, server, rest } = requestFixture();

  beforeAll(() => {
    // Starts server process.
    server.listen();
  });

  afterEach(() => {
    // Cleans all mocks.
    clean();
  });

  afterAll(() => {
    // Ends server process.
    server.close();
  });

  it('any test title', async () => {
    // Overrides a default mock from "server.ts" file
    // to return an "error" response.
    server.use(
      rest.get('/api/Account/SignOut', (_, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({
            message: 'Your code sucks 💔',
          })
        );
      })
    );
  });
});
