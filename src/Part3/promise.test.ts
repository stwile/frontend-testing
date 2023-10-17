import { it, expect } from 'vitest';

import { timeout, wait } from './promise';

it('指定時間を待つと、経過時間をもってresolveされる', async () => {
  expect(await wait(50)).toBe(50);
});

it('指定時間を待つと、経過時間をもってrejectされる', () => {
  timeout(50).catch((duration) => {
    expect(duration).toBe(50);
  });
});
