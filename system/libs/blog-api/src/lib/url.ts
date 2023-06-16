declare const process: {
  env: {
    NEXT_PUBLIC_API_URL?: string;
  };
};

const apiUrlUndefinedError = 'NEXT_PUBLIC_API_URL is undefined';

const url = (path: string): string => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (apiUrl === undefined) {
    throw Error(apiUrlUndefinedError);
  }

  return apiUrl + path;
};

export { url, apiUrlUndefinedError };
