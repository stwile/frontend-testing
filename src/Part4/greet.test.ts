import { expect, vi } from 'vitest';

import * as Fetcher from './fetcher';
import { getMyArticlesData } from './fixtures';
import {
  getGreet,
  getMyArticleLinksByCategory,
  greet,
  sayGoodBye,
} from './greet';

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

it('データ取得成功時：ユーザ名がある場合', async () => {
  vi.spyOn(Fetcher, 'getMyProfile').mockResolvedValueOnce({
    id: 'xxxxxxxx-123456',
    email: 'taroyamada@myapi.testing.com',
    age: 30,
    name: 'taroyamada',
  });
  await expect(getGreet()).resolves.toBe('Hello, taroyamada!');
});

it('データ取得失敗時', async () => {
  const httpError: { err: { message: string } } = {
    err: {
      message: 'internal server error',
    },
  };
  vi.spyOn(Fetcher, 'getMyProfile').mockRejectedValueOnce(httpError);
  await expect(getGreet()).rejects.toMatchObject({
    err: {
      message: 'internal server error',
    },
  });
});

it('データ取得失敗時、エラー相当のデータが例外としてスローされる', async () => {
  const httpError: { err: { message: string } } = {
    err: {
      message: 'internal server error',
    },
  };
  vi.spyOn(Fetcher, 'getMyProfile').mockRejectedValueOnce(httpError);
  try {
    await getGreet();
  } catch (err) {
    expect(err).toMatchObject(httpError);
  }
});

const mockGetMyArticles = (status = 200) => {
  if (status > 299) {
    return vi.spyOn(Fetcher, 'getMyArticle').mockRejectedValueOnce({
      err: {
        message: 'internal server error',
      },
    });
  }

  return vi
    .spyOn(Fetcher, 'getMyArticle')
    .mockResolvedValueOnce(getMyArticlesData);
};

it('指定したタグを持つ記事が一件もない場合', async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory('playwright');
  expect(data).toEqual([]);
});
