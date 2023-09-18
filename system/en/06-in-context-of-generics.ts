interface Person {
  name: string;
  age: number;
}

type TReadonly<T> = {
  // Make all properties of the interface readonly
  readonly [K in keyof T]: T[K];
};

// ✅ It works!
const readOnlyJohn: TReadonly<Person> = {
  name: 'John',
  age: 30,
};

// ❌ Syntax Error
interface IReadonly<T> {
  readonly [key in keyof T]: T[key]
}
