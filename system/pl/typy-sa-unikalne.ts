type User = { id: number };

type User = { name: string };

// 💥 TypeScript rzuca: "Duplicate identifier 'User'".

// @@@ Również to nie przejdzie @@@.

import { User } from './User';

// 💥 TypeScript rzuca: "Duplicate identifier 'User'".
type User = { name: string };
