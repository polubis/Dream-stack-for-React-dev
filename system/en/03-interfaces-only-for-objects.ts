interface SomeObjectOnly {
  id: string;
}

// Array is also object.
interface MyArray {
  length: number;
  [index: number]: string;
}

// Function is object too.
interface MathOperation {
  (x: number, y: number): number;
}

// ❌ Here is a syntax error!
interface String = string
