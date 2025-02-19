import { ReactNode } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface PasswordToggleButtonProps {
  showPassword: boolean;
  togglePassword: () => void;
  children?: ReactNode;
}

const PasswordToggleButton = ({
  showPassword,
  togglePassword,
  children,
}: PasswordToggleButtonProps) => {
  return (
    <div className="relative">
      {children}
      <button
        type="button"
        onClick={togglePassword}
        className="absolute right-3 bottom-2 text-gray-400"
      >
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
      </button>
    </div>
  );
};

export default PasswordToggleButton;
