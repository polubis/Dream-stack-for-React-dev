const run = (invalid: boolean, message: string): string =>
  invalid ? message : '';

export const required =
  (message = (value: string) => 'This field is required') =>
  (value: string) =>
    run(value === '', message(value));

export const minLength =
  (
    limit: number,
    message = (limit: number, value: string) => `Minimum length is ${limit}`
  ) =>
  (value: string) =>
    run(value.length > 0 && value.length < limit, message(limit, value));

export const maxLength =
  (
    limit: number,
    message = (limit: number, value: string) => `Maximum length is ${limit}`
  ) =>
  (value: string) =>
    run(value.length > 0 && value.length > limit, message(limit, value));

export const email =
  (message = () => 'Invalid email format') =>
  (value: string) =>
    run(
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value.toLowerCase()
      ),
      message()
    );
