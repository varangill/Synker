import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "search";
  label?: string;
  type?: string;
  id: string;
  showPasswordToggle?: boolean;
}

const Input = ({
  variant = "default",
  label,
  type,
  id,
  className = "",
  ...props
}: InputProps) => {
  const isPassword = type === "password";

  const [showPassword, setShowPassword] = useState(() => !isPassword);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  let btnStyle = ` bg-primary-100 rounded-xl w-full pl-4 text-white ${className}`;
  switch (variant) {
    case "search":
      btnStyle += " ";
      break;
    default:
      btnStyle += " h-10 outline-none focus:ring-0";
      break;
  }

  return (
    <div className="relative">
      <div className="mb-6">
        <label
          htmlFor={id}
          className="block text-sm font-medium mb-1 text-white"
        >
          {label}
        </label>
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          {...props}
          className={btnStyle}
          placeholder={label}
        />
      </div>
      {isPassword && (
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 bottom-2 text-gray-400"
        >
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </button>
      )}
    </div>
  );
};

export default Input;
