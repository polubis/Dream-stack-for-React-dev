// Plik Person.ts.

export interface Person {
  name: string;
}

// Plik Employee.ts.

export interface Employee {
  id: number;
}

// Tutaj następuje jawne scalanie deklaracji.
// Employee to: { name: string, id: number }.
export interface Employee extends Person {}
