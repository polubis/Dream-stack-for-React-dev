declare const process: {
  env: {
    NEXT_PUBLIC_API_URL?: string;
  };
};

const getUrl = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (url === undefined) {
    throw Error('Lack of process.env.NEXT_PUBLIC_API_URL');
  }

  return url;
};

export { getUrl };
