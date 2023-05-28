declare let process: {
  env: {
    API_URL: string;
  };
};

export const url = (path: string): string => process.env.API_URL + path;
