import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/Account/SignIn', (_, res, ctx) => {
    // We'll intercept the "GET" request under "/api/Account/SignIn" path,
    // and we'll return static array response with one object - { id: 1 }.
    return res(ctx.status(201), ctx.json([{ id: 1 }]));
  })
);

export { server };
