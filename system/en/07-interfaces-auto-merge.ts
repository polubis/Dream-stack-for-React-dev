interface A {
  id: number;
}

interface A {
  name: string;
}

// ✅ It works, "A" is now
// { id: number, name: string }.
const a: A = {
  id: 0,
  name: 'Tomasz',
};
