interface A {
  id: number;
}

interface B {
  name: string;
}

interface C {
  phone: string;
}
// ❤ Tutaj czas kompilacji będzie szybszy.
interface Result extends A, B, C {}
