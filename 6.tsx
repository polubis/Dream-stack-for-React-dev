type SetupFunction = (callback: () => void) => void;

interface Setup {
    beforeAll: SetupFunction;
    afterEach: SetupFunction;
    afterAll: SetupFunction;
}

export type { SetupFunction, Setup }