import "./styles.scss";

import React, { FC } from "react";

import { TextInputProps } from "./TextInput.types"

const TextInput: FC<TextInputProps> = ({
  id = "text-input",
  label,
  className = "",
  helperText = "",
  type = "text",
  addonText,
  ...props
}) => {
  const {
    disabled
  } = props;

  const classNameArray = [
    "webweights-text-input",
    disabled && "webweights-text-input--disabled",
    className
  ];

  return (
    <div
      className={classNameArray.join(' ')}
      {...props}
    >
      {
        label &&
          <label htmlFor={id}>{label}</label>
      }
      <div className="input-container">
        <input
          id={id}
          type={type}
          {...props}
        />
        {
          addonText &&
            <span className="addon-text">
              {addonText}
            </span>
        }
      </div>
      {
        helperText &&
          <p className="helper-text">{helperText}</p>
      }
    </div>
  )
}

export default TextInput;