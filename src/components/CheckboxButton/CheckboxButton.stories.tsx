import { StoryObj, Meta } from '@storybook/react';

import CheckboxButton from '.';
import { CheckboxButtonProps } from "./CheckboxButton.types"

export default {
  title: 'WebWeights/CheckboxButton',
  component: CheckboxButton,
} as Meta<CheckboxButtonProps>;

type Story = StoryObj<CheckboxButtonProps>;

export const Primary: Story = {
  args: {
    label: "Primary",
  }
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  }
};
