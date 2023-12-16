import { within, expect } from '@storybook/test';

import { ArticleListItem } from './ArticleListItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ArticleListItem',
  component: ArticleListItem,
} satisfies Meta<typeof ArticleListItem>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'howto-testing-with-typescript',
    title: 'TypeScript を使ったテストの書き方',
    body: 'テストを書く時、TypeScript を使うことで、テストの保守性が向上します…',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    /** IDに紐づいたリンクが表示される */
    const item = canvas.getByRole('link', {
      name: 'もっと見る',
    });
    await expect(item).toHaveAttribute(
      'href',
      '/articles/howto-testing-with-typescript',
    );
  },
};
