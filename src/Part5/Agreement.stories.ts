import { within, expect } from '@storybook/test';

import { Agreement } from './Agreement';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Agreement',
  component: Agreement,
} satisfies Meta<typeof Agreement>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    /** 同意ボタンが表示される */
    const button = canvas.getByRole('group', {
      name: '利用規約の同意',
    });
    await expect(button).toBeInTheDocument();
  },
};
