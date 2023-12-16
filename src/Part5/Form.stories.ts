import { within, expect } from '@storybook/test';

import { Form } from './Form';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Form',
  component: Form,
} satisfies Meta<typeof Form>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'taro',
  },
  play: async ({ canvasElement }) => {
    /** 名前の表示 */
    const canvas = within(canvasElement);
    const form = canvas.getByText('taro');
    await expect(form).toBeInTheDocument();

    /** ボタンの表示 */
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();

    /** 見出しの表示 */
    const heading = canvas.getByRole('heading');
    await expect(heading).toHaveTextContent('アカウント情報');
  },
};
