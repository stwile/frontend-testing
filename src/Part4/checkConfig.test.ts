import { it, vi } from 'vitest';

import { checkConfig } from './checkConfig';

it('モック関数は実行時引数のオブジェクト検証ができる', () => {
  const mockFn = vi.fn();
  checkConfig(mockFn);
  expect(mockFn).toBeCalledWith({
    mock: true,
    feature: {
      spy: true,
    },
  });
});

it('expect.objectContainingによる部分検証', () => {
  const mockFn = vi.fn();
  checkConfig(mockFn);
  expect(mockFn).toBeCalledWith(
    expect.objectContaining({
      feature: {
        spy: true,
      },
    }),
  );
});
