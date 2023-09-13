// Inside "describe" blocks.
const { clean, server, rest } = requestFixture();

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    clean();
});

afterAll(() => {
    server.close();
});

// Inside "it" blocks.
server.use(
    rest.post(getPath('Account/SignIn'), (_, res, ctx) => {
        return res(ctx.status(404), ctx.json(mockErrorResponse()));
    })
);