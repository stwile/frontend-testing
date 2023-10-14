import { it, expect } from 'vitest';

import { add } from './add';

it('add: 1 + 2 は 3', () => {
  expect(add(1, 2)).toBe(3);
});
