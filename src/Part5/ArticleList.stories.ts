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
