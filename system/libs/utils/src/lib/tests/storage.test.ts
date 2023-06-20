import { storage } from '../storage';

describe('Storage can be used when: ', () => {
  it('throws an error if any storage is undefined', () => {
    const localStorage = global.localStorage;
    const sessionStorage = global.sessionStorage;

    delete (global as never)['localStorage'];
    delete (global as never)['sessionStorage'];

    expect(() => storage()).toThrow();
    expect(() => storage('session')).toThrow();

    global.localStorage = localStorage;
    global.sessionStorage = sessionStorage;
  });

  it('picks local storage or session storage', () => {
    expect(storage().getKeys()).toEqual([]);
    expect(storage('session').getKeys()).toEqual([]);
  });

  it('allows to work with storage', () => {
    interface UserData {
      id: number;
      name: string;
    }

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
