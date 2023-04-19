import Card from '../components/Card';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '1234', '1234', '1234'],
    expirationDate: { year: 'YY', month: 'MM' },
    owner: 'NAME',
    isAddForm: true,
  },
};

export const BlankCard: Story = {
  args: { isAddForm: true },
};

export const AddCard: Story = {
  args: { isAddForm: false },
};
