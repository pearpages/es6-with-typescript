# Using ES67 with Typescript

- Syntax
- Built-ins
- Engine

To use the new features today we can use a *Transpiler*.

```bash
sudo npm install -g tsc
```

## ES6 Syntax

```
ES6-style TypeScript -> Typescript as transpiler -> ES5 Javascript
```

```
ES6-style Typescript -> Typescript -> ES6 Javascript -> Babel -> ES5 Javascript
```

### Characteristics of **var**

- Hoisting
- Functional scope

### Characteristics of **let**

- Not hoisted
- Block-scoped

### Characteristics of **const**

- Not hoisted
- Block-scoped
- A value MUST be set on **const** declaration
- Can't be changed later

- Can't avoid properties from objects to change*
- Can't declare class members with const in ES6
- Works with modules
- Can't declare class members with const in ES6

We can accomplish this with **namespace**, but it is not standard in ES6. Only in Typescript.

```typescript
namespace AtomicNumbers {
	export const H = 1;
	export const He = 2;
}
```

### ES6 Arrow Functions

- shorthand sytnax for functions
- simplifies the behavior of this
  - Value of **this** is always the containg code
  - "Lexical Binding"
  - Nested arrow functions share the same **this**
- No built-in arguments object
  - We need to use an ES6 "rest" parameter instead
- Arrow functions aren't new-able

```javascript
function greet(name) {
	return 'Hello, ' + name;
}
```

```typescript
const greet = (name: string) => "Hello, " + name;
```

### Destructuring

> Break-up an object or array into component variables

```typescript
interface USPostalAddress {
	streetAddress1: string;
	streetAddress2?: string; // ? means optional
	city: string;
	state: string;
	zip: string;
	country: string;
}
```

```typescript
const addressData1 = {
	streetAddress1: '1001 Main Street',
	streetAddress2: '3rd Floor',
	city: 'Anytown',
	state: 'NY',
	zip: '10001-1234',
	country: 'USA'
};
```

```typescript
// the default value in streetAddress2: stret2 = "" only applies if it is undefined
const {streetAdress1: street1, streetAddress2: street2 = "", city, state, zip, country} = addressData1;
```

### Destructuring Arrays with Rest and Spread

```typescript
const names = ['Alice', 'Bob', 'Charlie','Dana','Elvis','Fran','George'];
```

```typescript
const firstTraditional = names[0];
```

```typescript
// the first element in the array will be assigned to firstDestructure, the second to secondDestructure
const [firstDestructure, secondDestructure] = names;

// if names was empty, all the variables would get undefined
```

```typescript
// you can set default values
const [firstDestructure = 'Steve', secondDestructure] = names || [];
```

```typescript
// we can also get the rest of the elements not assigned in another variable
const [firstDestructure = 'Steve', secondDestructure, ...more] = names || [];
```

```typescript
// thanks to this ... notation, it will give us an empty array if we call it with no parameters
// in this example we have a list of strings and we get an array of strings
multiGreet('Alice','Bob', 'Charlie');

function multiGreet(...items) {
	items.forEach(
		(item) => {
			console.log('Hello, '+item)
		};
	);
}
```

```typescript
// if we have an array and we want to pass it as a list of arguments we can do it like this:

multiGreet(...names);
```

```typescript
const names = ['Alice','Bob','Charlie','Dana'];
const names2 = ['Isaac','Jane'];

// merge arrays and add another element, which makes sense with what we've said before about getting a list of elements from an array
const names3 = [...names,...names2, Kyle];
```

### ES6 String Templates

```typescript
const myCar = 'BMW M3';

const useBackTick = `Hello World!`;

const substitutions = `I love ${myCar}!`;

console.log(`Hello, ${item}.`);
```

### Tagged String Templates

```typescript
function multiGreet(...items: string[]) {
	items.forEach(item => {
		console.log(friend`Hello, ${item}.`);
		});
}

function friend(strings: string[], ...substitutions: string[]) {
	if (!substitutions[0]) {
		substitutions[0] = 'Friend';
	}
	return processTaggedTemplate(strings, substitutions);
}

function processTaggedTemplate(strings: string[], substitutions: string[]) {
	const result = [];
	substitutions.forEach((sub,index) => {
		result.push(strings[index],sub);
		});
	result.push(strings[strings.length -1]);
	return result.join('');
}
```

### Using the ES6 for of Loop

```typescript
const names = ['Alice','Bob','Charlie','Dana','Elvis','Fran','George','Hope'];

names.forEach(item => {console.log(item);}); // values

for(let item in names){ // indexes
	console.log(names[item]);
}

for (let item of names) { // values
	console.log(item);
}
```

## ES6 Modules

Exporting and importing objects:

- Require.js
- SystemJS
- node.js

> WHATWG: Web Hypertext Application Technology Working Group

[https://whatwg.github.io/loader/](https://whatwg.github.io/loader/)

Typescript can Transpile to:

- CommonJS
- AMD
- UMD
- System

### Introduction

With the introduction of ES6 Modules we don't polute the global scope and therefore we have to explicitly export and import the functionality we want to use.

```typescript
// library.js

function doSomething() {
	
}

export dosomething;
```

```typescript
// program.js
import {doSomething} from "library";

doSomething();
```

### Converting a File to an ES6 Module

```typescript
export function helloWorld() {
	console.log('Hello World');
}
```

```typescript
function helloWorld() {
	console.log('Hello World');
}

export {helloWorld}
```

```typescript
export {helloWorld, someFunction, someVariable, someClass};
```

```typescript
export {wowify as superWowify}
```

### Importing an ES6 Module

```typescript
import * as hello from './helloWorld';

hello.hello();
```

```typescript
import {hello} from './helloWorld';

hello();
```

```typescript
import {hello as h} from './helloWorld';

h();
```

```typescript
import {hello, goodbye} from './helloWorld';

hello();
goodbye();
```

### Default Exports

```typescript
export {wowify as default, mehify};
```

```typescript 
import {default as wowify} from './wowify';
```

```typescript
import wowify, {mehify} from './wowify';
```

### AMD and RequireJS (broweser side)

> AMD: Asynchronous Module Definition



## ES6 Classes

- constructor functions
- instance properties and methods
- static properties and methods
- inheritance