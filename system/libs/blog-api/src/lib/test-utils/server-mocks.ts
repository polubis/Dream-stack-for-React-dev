import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getPath } from '../core';

const server = setupServer();

server.use(
  rest.get(getPath('Articles'), (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(getPath('Account/SignIn'), (req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.post(getPath('Account/SignOut'), (req, res, ctx) => {
    return res(ctx.status(201));
  })
);

export { server };
