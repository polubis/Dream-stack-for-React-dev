type A = {
  id: number;
};

// ❌ Error. Types must have unique names per module.
type A = {
  name: string;
};
