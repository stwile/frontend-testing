import { it } from 'vitest';

import * as Fetcher from './fetcher';
import { postMyArticleData } from './fixtures';
import { checkLength } from './validationError';

import type { ArticleInput } from './type';

const mockPostMyArticle = (input: ArticleInput, status = 200) => {
  const err = {
    message: 'internal server error',
  };
  if (status > 299) {
    return vi.spyOn(Fetcher, 'postMyArticle').mockRejectedValueOnce(err);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);

    return vi.spyOn(Fetcher, 'postMyArticle').mockResolvedValueOnce({
      ...postMyArticleData,
      ...input,
    });
  } catch (error) {
    return vi.spyOn(Fetcher, 'postMyArticle').mockRejectedValueOnce(err);
  }
};

const inputFactory = (input?: Partial<ArticleInput>) => ({
  tags: ['testing'],
  title: 'TypeScript を使ったテストの書き方',
  body: 'テストを書く時、TypeScript を使うことで、テストの保守性が向上します。',
  ...input,
});

it('バリデーションに成功した場合、成功のレスポンスが返る', async () => {
  // バリデーションに通過する入力値を用意
  const input = inputFactory();
  // 入力値を含んだ成功レスポンスが返るよう、モックを施す
  const mock = mockPostMyArticle(input);
  // テスト対象の関数に、input を与えて実行
  const data = await Fetcher.postMyArticle(input);
  // 取得したデータに、入力内容が含まれているかを検証
  expect(data).toMatchObject(expect.objectContaining(input));
  // モック関数が呼び出されたかを検証
  expect(mock).toHaveBeenCalled();
});
