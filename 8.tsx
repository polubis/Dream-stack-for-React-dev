const serverFixture = ({
    beforeAll,
    afterAll,
    afterEach,
}: ServerFixture.Setup) => {
    // Other code is above 🔝.
    const mock: ServerFixture.Function = (method, path, resolver) => {
        server.use(rest[method](path, resolver));
    };

    return mock;
};