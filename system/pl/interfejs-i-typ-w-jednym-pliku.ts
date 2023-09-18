interface A {}

// 💥 Nie działa i nie będzie działać.
// "Duplicate identifier".
type A = {};

// To jest interfejs.
import { A } from './interfaces';

// 💥 Nie działa i nie będzie działać.
// "Duplicate identifier".
type A = {};

// Aby naprawić, musimy zmienić nazwę typu.

// To jest interfejs.
import { A } from './interfaces';

type B = A & {};

// lub

import { A as Something } from './interfaces';

type B = Something & {};
