type User = { id: number };
type Named = { name: string };

type Employee1 = User & { name: number }; // Scalanie.
type Employee2 = User & Named; // Scalanie.

// @@@ W przypadku importów jest tak samo. @@@

import { User, Name } from './defs';

type Employee1 = User & { name: number }; // Scalanie.
type Employee2 = User & Named; // Scalanie.
