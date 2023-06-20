import { getLackOfUrlError } from './errors'

describe('Returns lack of url error when: ', () => {
    it('the shape of error message is dev friendly', () => {
      expect(getLackOfUrlError()).toMatchSnapshot();
    });
  });
  