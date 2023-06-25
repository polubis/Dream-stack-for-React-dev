import type { APIPath } from '../../models';
import { getPath } from './get-path';

const API_URL = 'https://localhost:3000';

describe('Returns path when: ', () => {
  it('api url is combined with given path', () => {
    const variable = process.env['NEXT_PUBLIC_API_URL'];

    process.env['NEXT_PUBLIC_API_URL'] = API_URL;

    expect(getPath('Account/SignIn')).toBe(
      (API_URL + 'Account/SignIn') as APIPath
    );

    process.env['NEXT_PUBLIC_API_URL'] = variable;
  });
});
