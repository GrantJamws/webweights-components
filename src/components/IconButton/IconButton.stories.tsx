import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import IconButton from '.';
import { IconButtonProps } from "./IconButton.types"

export default {
  title: 'WebWeights/IconButton',
  component: IconButton,
} as Meta<typeof IconButton>;

type Story = StoryObj<IconButtonProps>;

export const Primary: Story = {
  args: {
    icon: (
      <svg viewBox="0 0 24 24" fill="#141210">
        <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
      </svg>
    ),
}
};

export const Outlined: Story = {
  args: {
    variant: "outline",
    icon: (
      <svg viewBox="0 0 24 24" fill="#141210">
        <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
      </svg>
    ),
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    icon: (
      <svg viewBox="0 0 24 24" fill="#141210">
        <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
      </svg>
    ),
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="#141210">
        <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
      </svg>
    ),
  }
};
