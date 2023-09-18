// Plik 1: Person1.ts.

export interface Person {
  name: string;
}

// Plik 2: Person2.ts.

import { Person } from './Person1';

export interface Person {
  id: string;
}

// To zadziała 💚.
// Person teraz to { name: string, id: string }.
