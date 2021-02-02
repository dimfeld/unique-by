import uniq from './index.mjs';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('makes a simple array unique', () => {
  let values = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 2, 2, 4];
  let output = uniq(values, (x) => x);
  assert.equal(output, [1, 2, 3, 4, 5]);
});

test('makes an array of objects unique', () => {
  let values = [
    { x: 1 },
    { x: 2 },
    { x: 3 },
    { x: 4 },
    { x: 5 },
    { x: 4 },
    { x: 3 },
    { x: 2 },
    { x: 1 },
    { x: 2 },
    { x: 3 },
    { x: 4 },
    { x: 2 },
    { x: 2 },
    { x: 4 },
  ];
  let output = uniq(values, (value) => value.x);
  assert.equal(output, [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }]);
});

test.run();

