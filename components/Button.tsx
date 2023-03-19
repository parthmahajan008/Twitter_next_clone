import React from "react";
interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onclick?: () => void;
  disabled?: boolean;
  outline?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  onclick,
  outline,
  disabled,
  fullWidth,
  large,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`
        disabled:opacity-70
        disabled: cursor-not-allowed 
        rounded-full 
        font-semibold 
        hover:opacity-80
        border-2 
        transition
        ${fullWidth ? "w-full" : "w-fit"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${secondary ? "bg-white" : "bg-sky-500"}
        ${secondary ? " text-black" : "text-white"}
        ${secondary ? " border-black" : "border-sky-500"}
        ${outline ? "border-white" : ""}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "text-white" : ""}
        `}
    >
      {label}
    </button>
  );
};

export default Button;
