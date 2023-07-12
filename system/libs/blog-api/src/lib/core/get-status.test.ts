import type { AxiosError } from 'axios';
import { getStatus } from './get-status';
import { mockErrorResponse } from '@system/blog-api-mocks';

describe('Detects status when: ', () => {
  it('status is readed when available', () => {
    const error = {
      response: {
        status: 400,
      },
    } as Required<AxiosError>;
    expect(getStatus(error)).toBe(400);
  });

  it('status is equal to 0 if cannot read status', () => {
    expect(getStatus(mockErrorResponse())).toBe(0);
  });
});
