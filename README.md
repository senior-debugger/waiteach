# awaiteach

**A modern, lightweight async `forEach` utility for JavaScript and TypeScript**.

`awaiteach` enables asynchronous iteration over arrays with `await` support. It can be used as a standalone function or globally installed on `Array.prototype` for more convenient syntax in both Node.js and browser environments.

---

## Features

* ✅ Asynchronous `forEach` with `await` support
* ✅ Works in Node.js and browser environments
* ✅ Optional global installation via `Array.prototype.awaitEach`
* ✅ Fully typed for TypeScript
* ✅ Tiny and dependency-free

---

## Installation

```bash
npm install awaiteach
# or
yarn add awaiteach
```

---

## Usage

### Using as a standalone function

```ts
import { awaitEach } from 'awaiteach';

const numbers = [1, 2, 3];

await awaitEach(numbers, async (num) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(num);
});

console.log('Done!');
```

### Installing globally on `Array.prototype`

```ts
import { install } from 'awaiteach';

// Install globally
install();

const numbers = [1, 2, 3];
await numbers.awaitEach(async (num) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(num);
});

console.log('Done!');
```

---

## TypeScript Support

`awaiteach` is fully typed. If you use the `install()` method, TypeScript will recognize `awaitEach` on all arrays automatically.

---

## License

MIT License
