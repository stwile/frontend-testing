import { within, expect } from '@storybook/test';

import { ArticleList } from './ArticleList';
import { items } from './fixtures';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ArticleList',
  component: ArticleList,
} satisfies Meta<typeof ArticleList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    /** itemsの数だけ一覧表示される */
    const list = canvas.getByRole('list');
    await expect(list).toBeInTheDocument();
    await expect(within(list).getAllByRole('listitem')).toHaveLength(3);
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    /** 一覧アイテムがからの時「投稿記事がありません」が表示される */
    const list = canvas.queryByRole('list');
    await expect(list).not.toBeInTheDocument();
    await expect(list).toBeNull();

    await expect(canvas.getByText('投稿記事がありません')).toBeInTheDocument();
  },
};
