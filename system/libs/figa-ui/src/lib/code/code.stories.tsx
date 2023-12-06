import type { Story, Meta } from '@storybook/react';
import type { CodeProps } from './defs';

import { Code } from './code';

export default {
  component: Code,
  title: 'Code',
} as Meta;

const Template: Story<CodeProps> = (props) => <Code {...props} />;

const children = `// JavaScript Elements

// Variables
var variable1 = 'JavaScript';
let variable2 = 42;
const variable3 = true;

// Data Types
let str: string = 'Hello';
let num: number = 42;
let bool: boolean = true;
let nul: null = null;
let und: undefined = undefined;
let sym: symbol = Symbol('symbol');

// Operators
let result = 5 + 3;
let isEqual = (10 === 10);
let logicalResult = true && false;

// Control Flow
if (variable2 > 0) {
    console.log('Positive');
} else {
    console.log('Non-positive');
}

// Functions
function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet('World');

// Objects
let person = {
    name: 'John',
    age: 30,
    sayHello: function () {
        console.log('Hello!');
    }
};

// Arrays
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);

// Prototypes and Inheritance
function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function () {
    console.log('My name is ' + this.name);
};

// Asynchronous Programming
setTimeout(() => {
    console.log('Delayed execution');
}, 1000);

// Error Handling
try {
    throw new Error('Something went wrong');
} catch (error) {
    console.error(error.message);
}

// TypeScript Elements

// Static Typing
let typedVariable: string = 'TypeScript';

// Interfaces
interface Person {
    name: string;
    age: number;
}
let person2: Person = { name: 'Alice', age: 25 };

// Enums
enum Color {
    Red,
    Green,
    Blue
}
let selectedColor: Color = Color.Green;

// Generics
function identity<T>(arg: T): T {
    return arg;
}
let result2: number = identity<number>(42);

// Decorators
function log(target: any, key: string) {
    console.log(\`Method \${key} is called.\`);
}
class Example {
    @log
    greet() {
        console.log('Hello from Example!');
    }
}

// Namespaces
namespace Utilities {
    export function multiply(x: number, y: number): number {
        return x * y;
    }
}
let product: number = Utilities.multiply(3, 4);

// Tuple Types
let tuple: [string, number] = ['John', 30];

// Union and Intersection Types
let unionType: string | number = 'Hello';
let intersectionType: Person & { email: string } = { name: 'Bob', age: 28, email: 'bob@example.com' };

// Type Assertions
let lengthOfString: number = (str as string).length;

// Mapped Types
type Flags = { readonly [K in 'option1' | 'option2']: boolean };

// Conditional Types
type NonUndefined<T> = T extends undefined ? never : T;
let nonUndefinedString: NonUndefined<string> = 'Not undefined';

// Type Aliases
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };

/*
   This is a multi-line comment
   that spans multiple lines
*/

// Arithmetic Operators
let addition = 5 + 3;
let subtraction = 10 - 4;
let multiplication = 6 * 2;
let division = 16 / 4;
let modulus = 17 % 5;

// Comparison Operators
let isEqual = (10 === 10);
let isNotEqual = (5 !== '5');
let greaterThan = (8 > 5);
let lessThan = (3 < 7);
let greaterOrEqual = (9 >= 9);
let lessOrEqual = (2 <= 3);

// Logical Operators
let andOperator = true && false;
let orOperator = true || false;
let notOperator = !true;

// Assignment Operators
let x = 10;
x += 5; // Equivalent to x = x + 5;
x -= 3; // Equivalent to x = x - 3;
x *= 2; // Equivalent to x = x * 2;
x /= 4; // Equivalent to x = x / 4;

// Increment/Decrement Operators
let y = 7;
y++; // Increment by 1
let z = 4;
z--; // Decrement by 1

// Unary Operators
let isTruthy = !!'Hello'; // Double negation to convert to boolean
let negation = -5;

// Conditional (Ternary) Operator
let isEven = (x % 2 === 0) ? 'Even' : 'Odd';

// String Concatenation Operator
let greeting = 'Hello' + ' ' + 'World';

// typeof Operator
let typeOfVariable = typeof x;

// instanceof Operator
let isArray = [1, 2, 3] instanceof Array;

// in Operator
let hasProperty = 'name' in { name: 'John', age: 30 };

// delete Operator
let obj = { prop: 'value' };
delete obj.prop;

// Bitwise Operators
let bitwiseAnd = 5 & 3;
let bitwiseOr = 5 | 3;
let bitwiseXor = 5 ^ 3;
let bitwiseNot = ~5;
let leftShift = 5 << 1;
let rightShift = 5 >> 1;
let zeroFillRightShift = 5 >>> 1;

// Comma Operator
let result;
let a = 1, b = 2, c = 3;
result = (a++, b++, c++);

// void Operator
function doSomething() {
    console.log('Doing something');
}
let voidResult = void doSomething();

// instanceof Operator
let isInstanceOfArray = [1, 2, 3] instanceof Array;

// Identity (Strict Equality) Operator
let strictEquality = (5 === '5');

// Equality Operator
let looseEquality = (5 == '5');

// Spread Operator (not an operator in the traditional sense, but often used in operations)
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5];

// Destructuring Assignment (also not an operator, but related to assignments)
let [first, second] = array1;

// Optional Chaining Operator (introduced in ECMAScript 2020)
let user = {
    profile: {
        email: 'user@example.com'
    }
};
let userEmail = user?.profile?.email;

// Nullish Coalescing Operator (introduced in ECMAScript 2020)
let defaultValue = user.profile.email ?? 'default@example.com';

import type { Theme } from './defs';
import { tokens } from './tokens';

const dark: Theme = {
  outline: {
    color: tokens.common.white,
  },
  switch: {
    bg: tokens.gray[50],
    color: tokens.common.white,
    active: {
      bg: tokens.green[200],
    },
  },
  scroll: {
    thumb: tokens.gray[600],
    track: tokens.gray[550],
    thumbHover: tokens.gray[650],
  },
  divider: {
    default: {
      bg: tokens.common.white,
    },
    primary: {
      bg: tokens.primary[100],
    },
  },
  radio: {
    borderColor: tokens.common.white,
    active: {
      bg: tokens.green[200],
      borderColor: tokens.green[200],
    },
  },
  checkbox: {
    borderColor: tokens.common.white,
    checked: {
      bg: tokens.primary[50],
      borderColor: tokens.primary[50],
      color: tokens.common.white,
    },
  },
  tabs: {
    filled: {
      bg: tokens.gray[500],
      active: {
        borderColor: tokens.green[50],
      },
    },
  },
  chips: {
    color: tokens.common.white,
    borderColor: tokens.common.white,
    active: {
      color: tokens.green[50],
      borderColor: tokens.green[50],
    },
  },
  badge: {
    outlined: {
      primary: {
        color: tokens.primary[50],
        borderColor: tokens.primary[50],
      },
      secondary: {
        color: tokens.primary[100],
        borderColor: tokens.primary[100],
      },
      ok: {
        color: tokens.green[100],
        borderColor: tokens.green[100],
      },
      casual: {
        color: tokens.gray[150],
        borderColor: tokens.gray[150],
      },
    },
    filled: {
      primary: {
        color: tokens.common.black,
        bg: tokens.primary[50],
      },
      secondary: {
        color: tokens.common.black,
        bg: tokens.primary[100],
      },
      ok: {
        color: tokens.common.black,
        bg: tokens.green[100],
      },
      casual: {
        color: tokens.common.black,
        bg: tokens.gray[150],
      },
    },
  },
  thumbnail: {
    bg: tokens.backdrop[100],
    color: tokens.common.white,
  },
  filePicker: {
    outline: {
      color: tokens.primary[50],
    },
    invalid: {
      color: tokens.red[150],
      outline: tokens.red[150],
    },
  },
  field: {
    invalid: {
      color: tokens.red[100],
    },
    hint: {
      color: tokens.common.white,
    },
  },
  font: {
    default: {
      color: tokens.common.white,
    },
    primary: {
      color: tokens.primary[100],
    },
  },
  body: {
    bg: tokens.common.black,
  },
  alert: {
    filled: {
      info: {
        bg: tokens.gray[150],
        color: tokens.common.black,
      },
      ok: {
        bg: tokens.green[150],
        color: tokens.common.black,
      },
      error: {
        bg: tokens.red[50],
        color: tokens.common.white,
      },
      warn: {
        bg: tokens.yellow[50],
        color: tokens.common.black,
      },
    },
    outlined: {
      info: {
        color: tokens.common.white,
      },
      ok: {
        color: tokens.green[150],
      },
      error: {
        color: tokens.red[150],
      },
      warn: {
        color: tokens.yellow[50],
      },
    },
  },
  modal: {
    bg: tokens.common.black,
    border: tokens.dark[50],
    backdrop: tokens.backdrop[50],
  },
  button: {
    filled: {
      primary: {
        color: tokens.common.black,
        bg: tokens.primary[50],
        outlineColor: tokens.common.white,
      },
      secondary: {
        color: tokens.common.black,
        bg: tokens.primary[100],
        outlineColor: tokens.common.white,
      },
      tertiary: {
        color: tokens.common.black,
        bg: tokens.common.white,
        outlineColor: tokens.common.white,
      },
    },
    outlined: {
      primary: {
        color: tokens.primary[50],
        bg: 'transparent',
        borderColor: tokens.primary[50],
        outlineColor: tokens.common.white,
      },
      secondary: {
        color: tokens.primary[100],
        bg: 'transparent',
        borderColor: tokens.primary[100],
        outlineColor: tokens.common.white,
      },
      tertiary: {
        color: tokens.common.white,
        bg: 'transparent',
        borderColor: tokens.common.white,
        outlineColor: tokens.common.white,
      },
    },
    ghost: {
      hoverBg: tokens.dark[250],
    },
  },
  select: {
    bg: tokens.dark[50],
    color: tokens.common.white,
    placeholderColor: tokens.gray[50],
    hoverBg: tokens.gray[100],
    optionSeparator: tokens.gray[100],
    optionActiveColor: tokens.secondary[50],
  },
  nav: {
    bg: tokens.dark[100],
    borderColor: tokens.gray[300],
  },
  logo: {
    text: {
      first: tokens.purple[100],
      second: tokens.common.white,
      last: tokens.secondary[200],
    },
    bg: {
      first: {
        from: tokens.red[50],
        to: tokens.primary[250],
      },
      second: {
        from: tokens.secondary[250],
        to: tokens.primary[250],
      },
      last: {
        from: tokens.blue[200],
        to: tokens.primary[250],
      },
    },
  },
  progressCircle: {
    bg: tokens.dark[50],
  },
  input: {
    filled: {
      bg: tokens.dark[50],
      color: tokens.common.white,
      placeholderColor: tokens.gray[50],
      fxColor: tokens.common.white,
    },
    outlined: {
      borderColor: tokens.common.white,
      color: tokens.common.white,
      placeholderColor: tokens.gray[50],
      fxColor: tokens.common.white,
    },
    empty: {
      color: tokens.common.white,
      placeholderColor: tokens.gray[50],
      fxColor: tokens.common.white,
    },
    invalid: tokens.red[150],
  },
  placeholder: {
    filled: {
      bg: tokens.gray[300],
    },
    outlined: {
      bg: tokens.common.black,
      borderColor: tokens.gray[300],
    },
  },
  box: {
    filled: {
      bg: tokens.gray[300],
    },
    outlined: {
      bg: tokens.common.black,
      borderColor: tokens.gray[300],
    },
  },
  footer: {
    bg: tokens.common.black,
    borderColor: tokens.gray[300],
  },
  code: {
    tags: [
      { tag: 'angleBracket', color: '#da6bad' },
      // { tag: 'annotation', color: 'red' },
      { tag: 'arithmeticOperator', color: '#fff' },
      // { tag: 'atom', color: 'red' },
      // { tag: 'attributeName', color: 'red' },
      // { tag: 'attributeValue', color: 'red' },
      // { tag: 'bitwiseOperator', color: '#fff' },
      { tag: 'blockComment', color: '#6A9955' },
      { tag: 'bool', color: '#569cd6' },
      { tag: 'brace', color: '#ffd70f' },
      { tag: 'bracket', color: '#da6bad' },
      // { tag: 'changed', color: 'red' },
      // { tag: 'character', color: 'red' },
      { tag: 'className', color: '#3abfb0' },
      // { tag: 'color', color: 'red' },
      { tag: 'comment', color: '#6A9955' },
      { tag: 'compareOperator', color: '#fff' },
      // { tag: 'constant', color: 'red' }, // Assuming t.constant(t.name) corresponds to a constant name
      // { tag: 'content', color: 'red' },
      // { tag: 'contentSeparator', color: 'red' },
      { tag: 'controlKeyword', color: '#eba0d9' },
      // { tag: 'controlOperator', color: 'red' },
      // { tag: 'definition', color: '#4fc1ff' }, // Assuming t.definition(t.name) corresponds to a definition name
      // { tag: 'definitionKeyword', color: '#3981c5' },
      // { tag: 'definitionOperator', color: '#fff' },
      // { tag: 'deleted', color: 'red' },
      // { tag: 'derefOperator', color: '#fff' },
      // { tag: 'docComment', color: 'red' },
      // { tag: 'docString', color: 'red' },
      // { tag: 'documentMeta', color: 'red' },
      // { tag: 'emphasis', color: 'red' },
      // { tag: 'escape', color: 'red' },
      // { tag: 'float', color: 'red' },
      // { tag: 'function', color: '#dcdc9f' }, // Assuming t.function(t.name) corresponds to a function name
      // { tag: 'heading', color: 'red' },
      // { tag: 'heading1', color: 'red' },
      // { tag: 'heading2', color: 'red' },
      // { tag: 'heading3', color: 'red' },
      // { tag: 'heading4', color: 'red' },
      // { tag: 'heading5', color: 'red' },
      // { tag: 'heading6', color: 'red' },
      // { tag: 'inserted', color: 'red' },
      // { tag: 'integer', color: 'red' },
      // { tag: 'invalid', color: 'red' },
      // { tag: 'keyword', color: '#3981c5' },
      // { tag: 'labelName', color: '#4fc1ff' },
      // { tag: 'lineComment', color: '#6A9955' },
      // { tag: 'link', color: 'red' },
      // { tag: 'list', color: 'red' },
      // { tag: 'literal', color: '#ef8c59' },
      // { tag: 'local', color: 'red' }, // Assuming t.local(t.name) corresponds to a local variable name
      // { tag: 'logicOperator', color: '#fff' },
      // { tag: 'macroName', color: 'red' },
      // { tag: 'meta', color: 'red' },
      // { tag: 'modifier', color: 'red' },
      // { tag: 'moduleKeyword', color: '#eba0d9' },
      // { tag: 'monospace', color: 'red' },
      // { tag: 'name', color: '#4fc1ff' },
      // { tag: 'namespace', color: 'red' },
      // { tag: 'null', color: '#569cd6' },
      // { tag: 'number', color: '#accea8' },
      // { tag: 'operator', color: 'red' },
      // { tag: 'operatorKeyword', color: '#3abfb0' },
      // { tag: 'paren', color: '#da6bad' },
      // { tag: 'processingInstruction', color: 'red' },
      // { tag: 'propertyName', color: 'red' },
      // { tag: 'punctuation', color: 'red' },
      // { tag: 'quote', color: 'red' },
      // { tag: 'regexp', color: 'red' },
      // { tag: 'self', color: 'red' },
      // { tag: 'separator', color: 'red' },
      // { tag: 'special', color: 'red' }, // Assuming t.special(t.name) corresponds to a special name
      // { tag: 'squareBracket', color: 'red' },
      // { tag: 'standard', color: 'red' }, // Assuming t.standard(t.name) corresponds to a standard name
      // { tag: 'strikethrough', color: 'red' },
      // { tag: 'string', color: 'red' },
      // { tag: 'strong', color: 'red' },
      // { tag: 'tagName', color: 'red' },
      // { tag: 'typeName', color: '#3abfb0' },
      // { tag: 'typeOperator', color: 'red' },
      // { tag: 'unit', color: 'red' },
      // { tag: 'updateOperator', color: 'red' },
      // { tag: 'url', color: 'red' },
      // { tag: 'variableName', color: 'red' },
    ],
  },
  codeBlock: {
    header: {
      bg: '#050404',
      dots: {
        first: {
          bg: tokens.green[50],
        },
        second: {
          bg: tokens.yellow[50],
        },
        third: {
          bg: tokens.blue[650],
        },
      },
    },
    content: {
      bg: '#050404',
    },
  },
  list: {
    marker: {
      bg: tokens.primary[50],
    },
  },
  blockquote: {
    bg: tokens.gray[450],
    borderColor: tokens.gray[300],
  },
  loader: {
    primary: tokens.common.white,
    secondary: tokens.primary[50],
  },
  avatars: {
    restCounter: {
      bg: tokens.primary[50],
      color: tokens.common.black,
    },
  },
  creatorLayout: {
    borderColor: tokens.gray[300],
    bg: tokens.common.black,
  },
};

export { dark };

type Age = number;
type Person = {
  name: string;
  age: Age;
};

type Employee = Person & {
  jobTitle: string;
};

type Callback = (result: string) => void;
`;

export const JSWithTS = Template.bind({});
JSWithTS.args = {
  children,
};

export const Readonly = Template.bind({});
Readonly.args = {
  children,
  readonly: true,
};
