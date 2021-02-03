'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @callback UniqueByCallback
 * @param {Object} value The value to examine
 * @return {*} - The key to use for uniqueness calculations.
 */

/**
 * @function uniqueBy filters an array of values to be unique based on the values returned from the callback for each item
 * @template VALUE
 * @param {VALUE[]} values An array of values
 * @param {UniqueByCallback} keyFunction A function returning the value to filter on
 * @returns {VALUE[]} The array with duplicates filtered out
 */
function uniqueBy(values, keyFunction) {
  let seen = new Set();
  return values.filter((v) => {
    let key = keyFunction(v);
    if (seen.has(key)) {
      return false;
    } else {
      seen.add(key);
      return true;
    }
  });
}

exports.default = uniqueBy;
//# sourceMappingURL=index.cjs.map
