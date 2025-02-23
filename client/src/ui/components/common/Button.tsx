import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant:
    | "fill"
    | "navigation"
    | "icon"
    | "iconFill"
    | "iconHighlight"
    | "outline"
    | "blank";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconDefinition;
  children?: ReactNode;
}

const Button = ({
  label,
  variant = "fill",
  icon,
  children,
  onClick,
  className = "",
  ...props
}: ButtonProps) => {
  const variantStyles: Record<string, string> = {
    fill: "bg-accent-100 hover:bg-accent-200 w-full rounded-xl font-bold h-9 text-white",
    navigation: "btn-default h-9 flex rounded-xl w-4/5 items-center",
    icon: "btn-default h-9 flex rounded-xl items-center justify-center",
    iconFill:
      "bg-accent-100 rounded-2xl text-white min-w-12 w-12 hover:bg-accent-200",
    iconHighlight:
      "btn-default h-9 flex rounded-xl items-center hover:bg-primary-300",
    outline:
      "border border-accent-100 text-accent-100 hover:bg-accent-200 hover:text-white",
    blank:
      "btn-default h-9 flex rounded-xl w-fit items-center pr-4 hover:bg-primary-300",
  };

  return (
    <button
      {...props}
      className={` ${variantStyles[variant] || ""} ${className}`}
      onClick={onClick}
    >
      {icon &&
        (variant !== "iconFill" ? (
          <FontAwesomeIcon
            icon={icon}
            className="object-contain h-2/4 w-5 text-white p-4"
          />
        ) : (
          <FontAwesomeIcon icon={icon} className="object-contain text-white" />
        ))}

      {label && (
        <span className="z-0 text-center xl:text-xl lg:text-xl md:text-base sm:text-base w-full items-center justify-center">
          {label}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
