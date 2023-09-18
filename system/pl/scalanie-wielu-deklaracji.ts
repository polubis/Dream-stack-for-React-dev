// Dla interfejsów.
interface A {}
interface B {}
interface C {}
interface Result extends A, B, C {}

// Dla typów.
type A = {};
type B = {};
type C = {};
type Result = A & B & C;
