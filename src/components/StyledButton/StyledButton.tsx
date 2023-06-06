import React from "react";
import { StyledButtonProps } from "./interface";

function StyledButton({
  text,
  type,
  onClick,
  disabled,
  full,
  mt,
  buttonColor,
  borderRadius,
  fontSize,
  fontWeight,
  fontColor,
  paddingX,
  paddingY,
  shadow,
}: StyledButtonProps) {
  // const buttonBg = `bg-${buttonColor}-700`;
  // const buttonHoverBg = `hover:bg-${buttonColor}-800`;
  // const buttonFocusBg = `focus:bg-${buttonColor}-800`;
  // const buttonActiveBg = `active:bg-${buttonColor}-900`;

  // const buttonEnabled = `${buttonBg} ${buttonHoverBg} ${buttonFocusBg} ${buttonActiveBg}`;

  const buttonDisabled = "bg-gray-500 text-gray-300 cursor-default";

  const className = `${full && "w-full"} leading-tight ${
    shadow && "shadow-md hover:shadow-lg"
  } focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out select-none ${
    disabled ? buttonDisabled : ""
  }`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={{
        marginTop: mt,
        borderRadius,
        fontSize,
        fontWeight,
        color: fontColor,
        padding: `${paddingY || 0}px ${paddingX || 0}px`,
        backgroundColor: buttonColor,
      }}
    >
      {text}
    </button>
  );
}

export default StyledButton;
