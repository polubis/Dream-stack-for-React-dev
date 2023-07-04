import {
  getDownViewport,
  getUpViewport,
  isSmUp,
  isSmDown,
  VIEWPORT,
} from './viewport';

describe('Creates viewport when: ', () => {
  it('up media query is created based on given value', () => {
    expect(getUpViewport(100)).toBe('(min-width: 100px)');
  });

  it('down media query is created with one pixel less', () => {
    expect(getDownViewport(100)).toBe('(max-width: 99px)');
  });

  it('detects viewports with given functions', () => {
    expect(isSmUp(421)).toBe(true);
    expect(isSmUp(420)).toBe(true);
    expect(isSmUp(419)).toBe(false);

    expect(isSmDown(421)).toBe(false);
    expect(isSmDown(420)).toBe(false);
    expect(isSmDown(419)).toBe(true);
  });

  it('viewport object have supported values', () => {
    expect(VIEWPORT).toMatchSnapshot();
  });
});
