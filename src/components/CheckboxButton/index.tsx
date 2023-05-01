import "./styles.scss";

import React, { FC, useEffect, useRef } from "react";

import { CheckboxButtonProps } from "./CheckboxButton.types"

const CheckboxButton: FC<CheckboxButtonProps> = ({
  id = "text-input",
  label,
  className = "",
  ...props
}) => {
  const {
    disabled
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const classNameArray = [
    "webweights-checkbox-button",
    disabled && "webweights-checkbox-button--disabled",
    className
  ];

  return (
    <div
      className={classNameArray.join(' ')}
      {...props}
    >
      <input
        {...props}
        ref={inputRef}
        id={id}
        type="checkbox"
      />
      {
        label &&
          <label htmlFor={id}>{label}</label>
      }
    </div>
  )
}

export default CheckboxButton;