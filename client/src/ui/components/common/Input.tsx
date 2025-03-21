import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "search";
  label?: string;
  errorMessage?: string;
  id: string;
  showPasswordToggle?: boolean;
}

const Input = ({
  variant = "default",
  label,
  type,
  id,
  className = "",
  errorMessage,
  ...props
}: InputProps) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(() => !isPassword);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const variantStyles: Record<string, string> = {
    default: "h-10",
    search: "h-8",
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium mb-1 text-white"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          {...props}
          className={`bg-primary-100 rounded-xl w-full pl-4 text-white text-base outline-none focus:ring-0 ${variantStyles[variant]} ${className}`}
        />
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
      {errorMessage && (
        <div className="text-red-100 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
