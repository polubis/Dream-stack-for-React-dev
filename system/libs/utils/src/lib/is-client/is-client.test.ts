import { isClient } from './is-client';

describe('Client side is detected when: ', () => {
  it('window object is not equal to undefined', () => {
    expect(isClient()).toBe(true);
  });
});
