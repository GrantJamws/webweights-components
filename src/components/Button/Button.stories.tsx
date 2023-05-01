import { StoryObj, Meta } from '@storybook/react';

import Button from '.';
import { ButtonProps } from "./Button.types"

export default {
  title: 'WebWeights/Button',
  component: Button,
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Primary",
  }
};

export const Outlined: Story = {
  args: {
    variant: "outline",
    children: "Outline",
}
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
}
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
}
};
