import { StoryObj, Meta } from '@storybook/react';

import Tag from '.';
import { TagProps } from "./Tag.types"

export default {
  title: 'WebWeights/Tag',
  component: Tag,
} as Meta<TagProps>;

type Story = StoryObj<TagProps>;

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

export const Small: Story = {
  args: {
    size: "small",
    children: "Primary",
  }
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large",
  }
};
