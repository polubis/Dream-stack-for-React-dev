/* eslint-disable @typescript-eslint/no-explicit-any */
const mock =
  <Model extends Record<string, any>>(model: Model) =>
  (partialModal: Partial<Model> = {}): Model => ({
    ...model,
    ...partialModal,
  });

export { mock };
