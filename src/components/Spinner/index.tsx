import "./styles.scss";

import React, { FC } from "react";

import { SpinnerProps } from "./Spinner.types"

const Spinner: FC<SpinnerProps> = ({
  className = "",
  size = "medium",
  lightBackground = false,
  ...props
}) => {
  const classNameArray = [
    "webweights-spinner",
    `webweights-spinner--${size}`,
    lightBackground ? "webweights-spinner--light-background" : "",
    className
  ];

  return (
    <div
      className={classNameArray.join(' ')}
      {...props}
    />
  )
}

export default Spinner;