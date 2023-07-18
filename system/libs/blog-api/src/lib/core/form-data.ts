// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formData = <P extends Record<string, any>>(payload: P): FormData => {
  const data = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    data.append(key, value);
  });

  return data;
};

export { formData };
