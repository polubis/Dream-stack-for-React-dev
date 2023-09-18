interface A {
  id: number;
}

type B = {
  name: string;
};
// ✅ It works!
interface Result1 extends A, B {}

// @@@ or @@@

type C = {
  id: number;
};

interface D {
  name: string;
}
// ✅ It works!
type Result2 = C & D;
