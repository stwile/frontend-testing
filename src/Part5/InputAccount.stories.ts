import { within, expect, userEvent } from '@storybook/test';

import { InputAccount } from './InputAccount';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'InputAccount',
  component: InputAccount,
} satisfies Meta<typeof InputAccount>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Input: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    /** メールアドレス入力 */
    const user = userEvent.setup();
    const email = canvas.getByRole('textbox');
    const emailValue = 'taro.tanaka@example.com';

    await user.type(email, emailValue);
    await expect(canvas.getByDisplayValue(emailValue)).toBeInTheDocument();

    /** パスワード入力 */
    const password = canvas.getByPlaceholderText('8文字以上で入力');
    const passwordValue = 'abcd1234';

    await user.type(password, passwordValue);
    await expect(canvas.getByDisplayValue(passwordValue)).toBeInTheDocument();
  },
};
