import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant: "fill" | "navigation" | "icon" | "outline";
  action: () => void;
  children?: ReactNode;
}

const Button = ({
  label,
  children,
  action,
  className = "",
  ...props
}: ButtonProps) => {
  const btnStyle = `${className}`;
  return (
    <>
      <button {...props} className={btnStyle} onClick={action}>
        {label}
        {children}
      </button>
    </>
  );
};

export default Button;
