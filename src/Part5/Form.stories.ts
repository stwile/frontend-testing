import { within, expect } from '@storybook/test';

import { Form } from './Form';
import { deliveryAddresses } from './fixtures';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Form',
  component: Form,
} satisfies Meta<typeof Form>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    /** 連絡先入力欄がある */
    const contact = canvas.getByRole('group', { name: '連絡先' });
    await expect(contact).toBeInTheDocument();

    /** お届け先入力欄がある */
    const delivery = canvas.getByRole('group', { name: 'お届け先' });
    await expect(delivery).toBeInTheDocument();
  },
};

export const HasDeliveryAddress: Story = {
  args: {
    deliveryAddress: deliveryAddresses,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    /** 設問に答えるまで、お届け先を選べない */
    const newDeliveryRadio = canvas.getByRole('group', {
      name: '新しいお届け先を登録しますか？',
    });

    await expect(newDeliveryRadio).toBeInTheDocument();

    const oldDeliveryPullDown = canvas.getByRole('group', {
      name: '過去のお届け先',
    });
    await expect(oldDeliveryPullDown).toBeDisabled();
  },
};
