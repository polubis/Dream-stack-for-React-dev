import { storage } from '../storage';

describe('Storage can be used when: ', () => {
  interface UserData {
    id: number;
    name: string;
  }

  it('throws an error if any storage is undefined', () => {
    const localStorage = global.localStorage;
    const sessionStorage = global.sessionStorage;

    delete (global as never)['localStorage'];
    delete (global as never)['sessionStorage'];

    expect(() => storage().get('key')).toThrow();
    expect(() => storage('session').get('key')).toThrow();

    global.localStorage = localStorage;
    global.sessionStorage = sessionStorage;
  });

  it('picks keys from local storage or session storage', () => {
    const ls = storage<UserData>();
    const ss = storage<UserData>('session');

    ls.set('id', 1);
    ss.set('id', 1);

    expect(ls.getKeys()).toEqual(['id']);
    expect(ss.getKeys()).toEqual(['id']);
  });

  it('allows to set several values', () => {
    const ls = storage<UserData>();

    ls.patch({ id: 1 });

    expect(ls.getKeys()).toEqual(['id']);
    expect(ls.get('id')).toBe(1);
    expect(ls.get('name')).toBe(null);
  });

  it('allows to get all values', () => {
    const ls = storage<UserData>();

    ls.patch({ id: 1 });

    expect(ls.getAll()).toEqual({ id: 1 });

    ls.patch({ id: 1, name: 'piotr' });

    expect(ls.getAll()).toEqual({ id: 1, name: 'piotr' });
  });

  it('allows to work with storage', () => {
    const specificStorage = storage<UserData>();

    specificStorage.set('id', 0);

    expect(specificStorage.get('id')).toBe(0);
    expect(specificStorage.getKeys()).toEqual(['id'] as (keyof UserData)[]);

    specificStorage.set('name', 'Pablo');
    specificStorage.remove('name');

    expect(specificStorage.getKeys()).toEqual(['id'] as (keyof UserData)[]);
    expect(specificStorage.get('id')).toBe(0);

    specificStorage.clear();

    expect(specificStorage.getKeys()).toEqual([]);
    expect(specificStorage.get('id')).toBe(null);
    expect(specificStorage.get('name')).toBe(null);
  });
});
