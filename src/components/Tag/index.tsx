import "./styles.scss";

import React, { FC } from "react";

import { TagProps } from "./Tag.types"

const Tag: FC<TagProps> = ({
  children,
  className = "",
  variant = "filled",
  size = "medium",
  ...props
}) => {
  const classNameArray = [
    "webweights-tag",
    `webweights-tag--${variant}`,
    `webweights-tag--${size}`,
    className
  ];

  return (
    <span
      className={classNameArray.join(' ')}
      {...props}
    >
      { children }
    </span>
  )
}

export default Tag;