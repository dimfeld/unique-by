# unique-by

Filter an array of items based on a function that returns a value. The resulting array will have only one item for each value returned by the callback.

```js
import uniqueBy from '@dimfeld/unique-by';

let items = [
  { first: 'Bob', last: 'Johnson' },
  { first: 'Alice', last: 'Rama' },
  { first: 'Bob', last: 'Bobber' },
  { first: 'Xavier', last: 'Xylophone' },
  { first: 'Bob', last: 'Johnson' },
  { first: 'George', last: 'Costanza' },
  { first: 'Xavier', last: 'Xylophone' },
  { first: 'Bob', last: 'Bobber' },
  { first: 'Sally', last: 'Sappa' },
  { first: 'Alice', last: 'Rama' },
  { first: 'Sarah', last: 'Dara' },
  { first: 'Sarah', last: 'Dara' },
  { first: 'John', last: 'Bob' },
];


let filtered = uniqueBy(items, (i) => i.first + i.last);

console.dir(items);
// [
//   { first: 'Bob', last: 'Johnson' },
//   { first: 'Alice', last: 'Rama' },
//   { first: 'Bob', last: 'Bobber' },
//   { first: 'Xavier', last: 'Xylophone' },
//   { first: 'George', last: 'Costanza' },
//   { first: 'Sally', last: 'Sappa' },
//   { first: 'Sarah', last: 'Dara' },
//   { first: 'John', last: 'Bob' },
// ];

```
