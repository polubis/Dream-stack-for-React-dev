import type { AxiosError } from 'axios';
import type { APIPath, ErrorResponse, ResponseError } from '../models';

declare const process: {
  env: {
    NEXT_PUBLIC_API_URL?: string;
  };
};

const hasErrors = (
  error: unknown
): error is Required<AxiosError<ErrorResponse>> => {
  const axiosError = <Partial<AxiosError>>error;
  const errorResponse = <Partial<ErrorResponse>>axiosError?.response?.data;

  return (
    !errorResponse?.success &&
    !!errorResponse?.hasErrors &&
    Array.isArray(errorResponse?.errors)
  );
};

const getErrors = (error: unknown): ResponseError[] => {
  if (hasErrors(error)) {
    return error.response.data.errors;
  }

  return [
    {
      key: 'unknown',
      message: 'Something went wrong...',
    },
  ];
};

const getError = (error: unknown): ResponseError => getErrors(error)[0];

const getStatus = (error: unknown): number => {
  const axiosError = <Partial<AxiosError>>error;
  return axiosError?.response?.status ?? 0;
};

const getAPIUrl = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (url === undefined) {
    throw Error('Lack of process.env.NEXT_PUBLIC_API_URL');
  }

  return url;
};

const getPath = (path: APIPath) => {
  const url = getAPIUrl();

  return url + path;
};

const isOkStatus = (status: number): boolean => status > 0 && status < 400;

export {
  getErrors,
  hasErrors,
  getError,
  getStatus,
  getAPIUrl,
  getPath,
  isOkStatus,
};
