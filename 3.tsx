// Inside "describe" blocks.
const mock = serverFixture({ beforeAll, afterEach, afterAll });

// Inside "it" blocks.
mock('post', getPath('Account/SignIn'), (_, res, ctx) =>
    res(ctx.status(404), ctx.json(mockErrorResponse()))
);