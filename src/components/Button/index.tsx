import "./styles.scss";

import React, { FC } from "react";

import {ButtonProps} from "./Button.types"
import Spinner from "../Spinner";

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  variant = "filled",
  isLoading = false,
  disabled = false,
  ...props
}) => {
  const classNameArray = [
    "webweights-button",
    `webweights-button--${variant}`,
    isLoading ? "webweights-button--loading" : "",
    className
  ];

  return (
    <button
      className={classNameArray.join(' ')}
      disabled={disabled || isLoading}
      data-loading={isLoading}
      {...props}
    >
      {
        isLoading &&
          <Spinner
            lightBackground={["filled"].includes(variant)}
          />
      }
      { children }
    </button>
  )
}

export default Button;