import type { NullableValidatorType } from './defs';

const required = (value: string | null | undefined): NullableValidatorType => {
  return !value ? 'required' : null;
};

const min =
  (limit: number) =>
  (value: number): NullableValidatorType => {
    return value < limit ? 'min' : null;
  };

const max =
  (limit: number) =>
  (value: number): NullableValidatorType => {
    return value > limit ? 'max' : null;
  };

const minLength =
  (limit: number) =>
  (value: string | unknown[]): NullableValidatorType => {
    return value.length < limit ? 'minLength' : null;
  };

const maxLength =
  (limit: number) =>
  (value: string | unknown[]): NullableValidatorType => {
    return value.length > limit ? 'maxLength' : null;
  };

const pascalCase = (value: string): NullableValidatorType => {
  return !/^[A-Z][a-zA-Z0-9]*$/.test(value) ? 'pascalCase' : null;
};

export { required, minLength, maxLength, pascalCase, min, max };
