import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getPath } from '../core';
import { mockOkGetArticlesResponse } from '../test-utils';

const server = setupServer();

server.use(
  rest.get(getPath('Articles'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockOkGetArticlesResponse()));
  }),
  rest.post(getPath('Account/SignIn'), (req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.post(getPath('Account/SignOut'), (req, res, ctx) => {
    return res(ctx.status(201));
  })
);

export { server };
