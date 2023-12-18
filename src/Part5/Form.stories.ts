import { within, expect, userEvent } from '@storybook/test';

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
    const canvas = within(canvasElement);

    /** 「サインアップ」ボタンは非活性 */
    const button = canvas.getByRole('button', { name: 'サインアップ' });
    await expect(button).toBeDisabled();

    /** formのアクセシブルネームは、見出しを引用している */
    const form = canvas.getByRole('form', { name: '新規アカウント登録' });
    await expect(form).toBeInTheDocument();
  },
};

export const Checked: Story = {
  args: {
    name: 'taro',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    /** 「利用規約の同意」チェックボックスを押下すると「サインアップ」ボタンは活性化 */
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);

    const button = canvas.getByRole('button', { name: 'サインアップ' });
    await expect(button).toBeEnabled();
  },
};
