import type { APIPath } from '../models';
import {
  getAPIUrl,
  getError,
  getErrors,
  getPath,
  getStatus,
  isOkStatus,
} from './core';
import { mockErrorResponse } from './test-utils';
import type { AxiosError } from 'axios';

const API_URL = 'https://localhost:3000';

describe('Detects error status when: ', () => {
  it('returns true if status is lower than 400', () => {
    expect(isOkStatus(200)).toBeTruthy();
    expect(isOkStatus(399)).toBeTruthy();
    expect(isOkStatus(0)).toBeFalsy();
    expect(isOkStatus(400)).toBeFalsy();
    expect(isOkStatus(600)).toBeFalsy();
  });
});

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

describe('Reads API url when: ', () => {
  it('throws exception if lack of env variable', () => {
    const variable = process.env['NEXT_PUBLIC_API_URL'];

    delete process.env['NEXT_PUBLIC_API_URL'];

    expect(() => getAPIUrl()).toThrow();

    process.env['NEXT_PUBLIC_API_URL'] = variable;
  });

  it('throws exception if lack of env variable', () => {
    const variable = process.env['NEXT_PUBLIC_API_URL'];

    process.env['NEXT_PUBLIC_API_URL'] = 'https://localhost:3000';

    expect(getAPIUrl()).toBe(API_URL);

    process.env['NEXT_PUBLIC_API_URL'] = variable;
  });
});

describe('Returns path when: ', () => {
  it('api url is combined with given path', () => {
    const variable = process.env['NEXT_PUBLIC_API_URL'];

    process.env['NEXT_PUBLIC_API_URL'] = 'https://localhost:3000';

    expect(getPath('Account/SignIn')).toBe(
      (API_URL + 'Account/SignIn') as APIPath
    );

    process.env['NEXT_PUBLIC_API_URL'] = variable;
  });
});
