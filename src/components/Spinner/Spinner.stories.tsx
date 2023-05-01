import { StoryObj, Meta } from '@storybook/react';

import Spinner from '.';
import { SpinnerProps } from "./Spinner.types"

export default {
  title: 'WebWeights/Spinner',
  component: Spinner,
  argTypes: {
  },
} as Meta<typeof Spinner>;

type Story = StoryObj<SpinnerProps>;

export const Primary: Story = {
  args: {
    className: "storybook-spinner",
  }
};

export const Small: Story = {
  args: {
    className: "storybook-spinner",
    size: "small",
  }
};

export const Large: Story = {
  args: {
    className: "storybook-spinner",
    size: "large",
  }
};
