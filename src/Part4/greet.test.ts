import { expect, vi } from 'vitest';

import * as Fetcher from './fetcher';
import { getGreet, greet, sayGoodBye } from './greet';

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

it('データ取得成功時：ユーザ名がない場合', async () => {
  vi.spyOn(Fetcher, 'getMyProfile').mockResolvedValueOnce({
    id: 'xxxxxxxx-123456',
    email: 'taroyamada@myapi.testing.com',
    age: 30,
  });
  await expect(getGreet()).resolves.toBe('Hello, anonymous user!');
});