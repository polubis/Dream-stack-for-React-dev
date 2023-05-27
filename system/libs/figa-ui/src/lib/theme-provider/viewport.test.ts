import { getDownViewport, getUpViewport } from './viewport';

describe('Creates viewport when', () => {
  it('up media query is created based on given value', () => {
    expect(getUpViewport(100)).toBe('(min-width: 100px)');
  });

  it('down media query is created with one pixel less', () => {
    expect(getDownViewport(100)).toBe('(max-width: 99px)');
  });
});
