interface SomeObjectOnly {
  id: string;
}

// Tablica to też obiekt!
interface MyArray {
  length: number;
  [index: number]: string;
}

// Funkcja również!
interface MathOperation {
  (x: number, y: number): number;
}

// 💥 Nie działa i nie będzie działać.
interface String = string
// Tak samo będzie dla wszystkiego innego co nie jest
// obiektem...
