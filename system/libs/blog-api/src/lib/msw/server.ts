import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getPath } from '../core';
import { mockGetArticlesResponse } from '@system/blog-api-mocks';

const server = setupServer(
  rest.get(getPath('Articles'), (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockGetArticlesResponse()));
  }),
  rest.post(getPath('Account/SignIn'), (_, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.post(getPath('Account/SignOut'), (_, res, ctx) => {
    return res(ctx.status(201));
  })
);

export { server };
