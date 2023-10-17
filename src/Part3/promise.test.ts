import { it, expect } from 'vitest';

import { wait } from './promise';

it('指定時間を待つと、経過時間をもってresolveされる', () =>
  expect(wait(50)).resolves.toBe(50));
