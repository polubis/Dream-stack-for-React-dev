// Inside "describe" block.
let spy: jest.Fn

beforeAll(() => {
    // Here I want to mock additional stuff!
    const spy = jest.spyOn(window, 'Object')
})

const mock = serverFixture({ beforeAll, afterAll, afterEach });