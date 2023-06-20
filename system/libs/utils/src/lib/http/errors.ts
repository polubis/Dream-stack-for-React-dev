const getLackOfUrlError = (): string => {
  return `
        "Url" parameter is "undefined". API cannot work without url...
        It may be caused because: 
            - you used environment variable which is not specified,
            - you forget to pass url parameter and ignored TypeScript.
      `;
};

export { getLackOfUrlError };
