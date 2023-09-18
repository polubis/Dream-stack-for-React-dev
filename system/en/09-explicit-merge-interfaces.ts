interface A {
  id: number;
}

interface B {
  name: string;
}

// The result is an object
// { id, name, selected }.
interface Result extends A, B {
  selected: boolean;
}
