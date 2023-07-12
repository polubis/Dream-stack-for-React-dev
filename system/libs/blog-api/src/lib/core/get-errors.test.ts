import { getError, getErrors } from './get-errors';
import type { AxiosError } from 'axios';
import { mockErrorResponse } from '@system/blog-api-mocks';

describe('Errors detection works when: ', () => {
  it('takes errors from response', () => {
    const error = {
      response: {
        data: mockErrorResponse(),
      },
    } as Required<AxiosError>;
    const errors = getErrors(error);

    expect(errors).toEqual(mockErrorResponse().errors);
    expect(getError(error)).toEqual(mockErrorResponse().errors[0]);
  });

  it('returns default errors for other cases', () => {
    const errors = getErrors(mockErrorResponse());

    expect(errors).toMatchSnapshot();
    expect(getError(mockErrorResponse())).toMatchSnapshot();
  });
});
