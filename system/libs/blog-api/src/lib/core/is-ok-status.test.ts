import { isOkStatus } from './is-ok-status';

describe('Detects ok status when: ', () => {
  it('returns true if status is lower than 400', () => {
    expect(isOkStatus(200)).toBeTruthy();
    expect(isOkStatus(399)).toBeTruthy();
    expect(isOkStatus(0)).toBeFalsy();
    expect(isOkStatus(400)).toBeFalsy();
    expect(isOkStatus(600)).toBeFalsy();
  });
});
