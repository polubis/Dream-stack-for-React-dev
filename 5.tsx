// Inside server-fixture.ts file.
import { rest, server } from 'msw';
import { setupServer } from 'msw/node';
import type * as ServerFixture from './defs';

// Server configuration.
const server = setupServer();

const serverFixture = ({
    beforeAll,
    afterAll,
    afterEach,
    // Interface will be added soon.
}: ServerFixture.Setup) => {
    beforeAll(() => {
        // Starts server process.
        server.listen();
    });

    afterEach(() => {
        // Resets mocks.
        server.resetHandlers();
    });

    afterAll(() => {
        // Ends server process.
        server.close();
    });
};