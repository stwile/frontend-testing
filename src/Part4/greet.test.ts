import { expect, vi } from 'vitest';

import { greet, sayGoodBye } from './greet';

it('挨拶を返す（本来の実装通り）', () => {
  expect(greet('Taro')).toBe('Hello! Taro.');
});

vi.mock('./greet.ts', async () => {
  const actual = await vi.importActual('./greet.ts');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...actual,
    sayGoodBye: (hoge: string): string => `Good bye, ${hoge}`,
  };
});

it('さよならを返す（本来の実装ではない）', () => {
  const message = `${sayGoodBye('Taro')}. See you.`;
  expect(message).toBe('Good bye, Taro. See you.');
});
