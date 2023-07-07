import type { AxiosError } from 'axios';

const getStatus = (error: unknown): number => {
  const axiosError = <Partial<AxiosError>>error;
  return axiosError?.response?.status ?? 0;
};

export { getStatus };
