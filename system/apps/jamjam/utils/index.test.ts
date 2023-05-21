import { getLast } from '.';

describe('is able to return last element when', () => {
  it('for arrays returns first from right', () => {
    expect(getLast([1, 2, 3])).toBe(3);
  });

  it('returns undefined for empty or not array types', () => {
    expect(getLast([])).toBe(undefined);
  });

  it('original array is not changed', () => {
    const arr = [1, 2, 3];

    getLast(arr);

    expect(arr.length).toBe(arr.length);
  });
});
