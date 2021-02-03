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
export default function uniqueBy<VALUE>(values: VALUE[], keyFunction: UniqueByCallback): VALUE[];
export type UniqueByCallback = (value: any) => any;
