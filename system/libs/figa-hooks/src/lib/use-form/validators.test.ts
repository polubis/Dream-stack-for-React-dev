import { email, maxLength, minLength, required } from './validators';

describe('required()', () => {
  it('returns message as validation result', () => {
    expect(required(() => 'This field cannot be empty')('')).toBe(
      'This field cannot be empty'
    );
    expect(required(() => 'This field cannot be empty')('d')).toBe('');
  });
});

describe('minLength()', () => {
  it('returns message as validation result', () => {
    expect(minLength(5, () => 'Min length is 5')('dddd')).toBe(
      'Min length is 5'
    );
    expect(minLength(5, () => 'Min length is 5')('ddddd')).toBe('');
    expect(minLength(5, () => 'Min length is 5')('')).toBe('');
  });
});

describe('maxLength()', () => {
  it('returns message as validation result', () => {
    expect(maxLength(5, () => 'Max length is 5')('dddddd')).toBe(
      'Max length is 5'
    );
    expect(maxLength(5, () => 'Max length is 5')('ddddd')).toBe('');
    expect(maxLength(5, () => 'Max length is 5')('')).toBe('');
  });
});

describe('email()', () => {
  it('returns message as validation result', () => {
    expect(email(() => 'Email invalid')('dddddd')).toBe('Email invalid');
    expect(email(() => 'Email invalid')('pablo@wp.pl')).toBe('');
  });
});
