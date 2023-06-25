import { isServer } from './is-server';

describe('Server side is detected when: ', () => {
  const initialWindow = global.window;

  it('window object is undefined', () => {
    // It's required. We need to cast to any to be able
    // to modify the window.
    delete (global as never)['window'];

    expect(isServer()).toBe(true);

    global.window = initialWindow;
  });
});
