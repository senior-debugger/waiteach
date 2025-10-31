# waitEach

**A modern, lightweight async `forEach` utility for JavaScript and TypeScript**.

`waitEach` enables asynchronous iteration over arrays with `await` support. It can be used as a standalone function or globally installed on `Array.prototype` for more convenient syntax in both Node.js and browser environments.

[![NPM version](https://img.shields.io/npm/v/waiteach.svg)](https://www.npmjs.com/package/waiteach)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## Features

* ✅ Asynchronous `forEach` with `await` support
* ✅ Works in Node.js and browser environments
* ✅ Optional global installation via `Array.prototype.waitEach`
* ✅ Fully typed for TypeScript
* ✅ Tiny and dependency-free

---

## Installation

```bash
npm install waitEach
# or
yarn add waitEach
```

---

## Usage

### Using as a standalone function

```ts
import { waitEach } from 'waitEach';

const numbers = [1, 2, 3];

await waitEach(numbers, async (num) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(num);
});

console.log('Done!');
```

### Installing globally on `Array.prototype`

```ts
import { install } from 'waitEach';

// Install globally
install();

const numbers = [1, 2, 3];
await numbers.waitEach(async (num) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(num);
});

console.log('Done!');
```

---

## TypeScript Support

`waitEach` is fully typed. If you use the `install()` method, TypeScript will recognize `waitEach` on all arrays automatically.

---

## License

MIT License
