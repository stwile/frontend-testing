import { it, expect, describe } from 'vitest';

import { add } from './calculation';

describe('add', () => {
  it('1 + 1 は 2', () => {
    expect(add(1, 1)).toBe(2);
  });

  it('add: 1 + 2 は 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
