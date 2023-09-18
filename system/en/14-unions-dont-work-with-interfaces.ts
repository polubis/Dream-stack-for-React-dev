type A = { id: number };
type B = { id: string };

// ✅ It works!
type AorB = A | B;

interface C {
  id: number;
}
interface D {
  id: string;
}

// ❌ Syntax error...
interface CorD extends C | D {}

// ✅ To fix that we need a type.
type CorDWorks = C | D
