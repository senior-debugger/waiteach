declare global {
  interface Array<T> {
    waitEach(
      callback: (item: T, index: number, array: T[]) => Promise<void> | void
    ): Promise<void>;
  }
}

/**
 * Asynchronous loop over an array with support for `await`.
 * Allows performing asynchronous operations on each element of an array sequentially.
 *
 * @template T - Type of array elements
 * @param {T[]} array - The array of elements to iterate over
 * @param {(item: T, index: number, array: T[]) => Promise<void> | void} callback -
 *        An asynchronous or synchronous function to execute on each element.
 *        Receives three arguments:
 *          - `item` — the current element
 *          - `index` — the index of the current element
 *          - `array` — the original array
 * @returns {Promise<void>} A promise that resolves when all iterations are complete
 *
 * @example
 * const numbers = [1, 2, 3];
 * await waitEach(numbers, async (num) => {
 *   await new Promise(resolve => setTimeout(resolve, 500));
 *   console.log(num);
 * });
 *
 * console.log('Done!');
 */
export async function waitEach<T>(
  array: T[],
  callback: (item: T, index: number, array: T[]) => Promise<void> | void
): Promise<void> {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i, array);
  }
}

/**
 * Installs the `waitEach` method on the `Array` prototype.
 * After calling this function, all arrays will have the `waitEach` method available:
 *
 * @example
 * import { install } from 'waitEach';
 *
 * // Install the method globally
 * install();
 *
 * const numbers = [1, 2, 3];
 * await numbers.waitEach(async (num) => {
 *   await new Promise(resolve => setTimeout(resolve, 500));
 *   console.log(num);
 * });
 *
 * console.log('Done!');
 *
 * @returns {void} This function does not return anything.
 */
export const install = () => {
  Array.prototype.waitEach = async function <T>(
    this: T[],
    callback: (item: T, index: number, array: T[]) => Promise<void> | void
  ): Promise<void> {
    for (let i = 0; i < this.length; i++) {
      await callback(this[i], i, this);
    }
  };
};
