import { it, expect, describe } from 'vitest';

import { add, sub } from './calculation';

describe('四則演算', () => {
  describe('add', () => {
    it('1 + 1 は 2', () => {
      expect(add(1, 1)).toBe(2);
    });

    it('1 + 2 は 3', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('返り値は、第一引数と第二引数の「和」である', () => {
      expect(add(50, 50)).toBe(100);
    });
    it(`合計の上限は、'100' である`, () => {
      expect(add(70, 80)).toBe(100);
    });

    it(`引数が''0~100の範囲外だった場合、例外をスローする`, () => {
      expect(() => add(110, -10)).toThrow(
        '入力値は0~100の間で入力してください',
      );
    });
  });

  describe('sub', () => {
    it('1 - 1 は 0', () => {
      expect(sub(1, 1)).toBe(0);
    });

    it('2 - 1 は 1', () => {
      expect(sub(2, 1)).toBe(1);
    });

    it('返り値は、第一引数と第二引数の「差」である', () => {
      expect(sub(51, 50)).toBe(1);
    });
    it(`合計の上限は、'0' である`, () => {
      expect(sub(70, 80)).toBe(0);
    });
  });
});
