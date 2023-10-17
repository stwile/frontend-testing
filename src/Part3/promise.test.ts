import { it, expect } from 'vitest';

import { wait } from './promise';

it('指定時間を待つと、経過時間をもってresolveされる', () =>
  wait(50).then((duration) => expect(duration).toBe(50)));
