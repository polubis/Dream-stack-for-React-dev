type A = {
  id: number;
};

type B = {
  name: string;
};

type C = {
  phone: string;
};
// 💢 Uwaga na czas kompilacji...
type Result = A & B & C;
