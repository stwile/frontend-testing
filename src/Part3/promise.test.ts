import { it, expect } from 'vitest';

import { wait } from './promise';

it('指定時間を待つと、経過時間をもってresolveされる', async () => {
  expect(await wait(50)).toBe(50);
});
