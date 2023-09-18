interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Na tym etapie Person to:
// { name: string, age: number }.
const person: Person = {
  name: 'Alice',
  age: 30,
};
