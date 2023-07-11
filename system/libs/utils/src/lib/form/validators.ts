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

export { required, minLength, maxLength, min, max };
