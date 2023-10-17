import { it, expect, describe } from 'vitest';

import { add } from './calculation';

describe('四則演算', () => {
  describe('add', () => {
    it('1 + 1 は 2', () => {
      expect(add(1, 1)).toBe(2);
    });

    it('add: 1 + 2 は 3', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('返り値は、第一引数と第二引数の「和」である', () => {
      expect(add(50, 50)).toBe(100);
    });
    it(`合計の上限は、'100' である`, () => {
      expect(add(70, 80)).toBe(100);
    });
  });
});
