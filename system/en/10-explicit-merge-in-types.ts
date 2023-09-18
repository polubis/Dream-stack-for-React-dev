type A = {
  id: number;
};

type B = {
  name: string;
};

// The result is an object
// { id, name, selected }.
type Result = A &
  B & {
    selected: boolean;
  };
