import { StoryObj, Meta } from '@storybook/react';

import TextInput from '.';
import { TextInputProps } from "./TextInput.types"

export default {
  title: 'WebWeights/TextInput',
  component: TextInput,
} as Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>;

export const Primary: Story = {
  args: {
    label: "Primary",
  }
};

export const Placeholder: Story = {
  args: {
    label: "Placeholder",
    placeholder: "Placeholder text"
  }
};

export const Disabled: Story = {
  args: {
    label: "Placeholder",
    placeholder: "Placeholder text",
    disabled: true,
  }
};

export const HelperText: Story = {
  args: {
    label: "Helper text",
    placeholder: "Helper placeholder text",
    helperText: "Helper text",
  }
};

export const UnitAddon: Story = {
  args: {
    label: "Unit Addon",
    placeholder: "Unit addon placeholder",
    addonText: "Kg",
  }
};


export const RepsAddon: Story = {
  args: {
    label: "Reps Addon",
    placeholder: "Reps addon placeholder",
    addonText: "Reps",
  }
};
