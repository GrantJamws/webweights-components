import "./styles.scss";

import React, { FC, cloneElement, isValidElement } from "react";

import { IconButtonProps } from "./IconButton.types"
import Spinner from "../Spinner";

const IconButton: FC<IconButtonProps> = ({
  icon,
  className = "",
  variant = "filled",
  isLoading = false,
  disabled = false,
  ...props
}) => {
  const classNameArray = [
    "webweights-icon-button",
    `webweights-icon-button--${variant}`,
    isLoading ? "webweights-icon-button--loading" : "",
    className
  ];

  const iconElement = isValidElement(icon)
    ? cloneElement(icon as any, {
        "aria-hidden": true,
        focusable: false,
        className: "icon"
      })
    : null

  return (
    <button
      className={classNameArray.join(' ')}
      disabled={disabled || isLoading}
      data-loading={isLoading}
      {...props}
    >
      {
        isLoading ? (
          <Spinner
            lightBackground={["filled"].includes(variant)}
          />
        ) : (
          iconElement
        )
      }
    </button>
  )
}

export default IconButton;