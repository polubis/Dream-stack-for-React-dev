interface Interceptable {
  clean: () => void;
  listen: () => void;
}

type Intercept = (callback: () => void) => Interceptable;

export type { Intercept, Interceptable };
