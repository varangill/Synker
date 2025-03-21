import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  textStyle?: string;
  textSize?: "small" | "medium" | "large";
  variant:
    | "fill"
    | "navigation"
    | "icon"
    | "iconFill"
    | "iconHighlight"
    | "dropdown"
    | "outline"
    | "blank";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconDefinition;
  children?: ReactNode;
}

const Button = ({
  text,
  textStyle,
  textSize = "medium",
  variant = "fill",
  icon,
  children,
  onClick,
  className = "",
  ...props
}: ButtonProps) => {
  const variantStyles: Record<string, string> = {
    fill: "bg-accent-100 hover:bg-accent-200 w-full rounded-xl font-bold h-9",
    navigation: "btn-default h-9 flex rounded-xl w-4/5 items-center pl-4 pr-4",
    icon: "btn-default h-9 flex rounded-xl items-center justify-center",
    iconFill: "bg-accent-100 rounded-2xl text-white hover:bg-accent-200 h-12",
    iconHighlight:
      "btn-default h-9 flex rounded-xl items-center hover:bg-primary-300",
    dropdown:
      "btn-text h-9 rounded-xl flex flex-row bg-primary-100 hover:bg-primary-300 items-center justify-center w-full",
    outline:
      "border h-9 rounded-xl border-accent-100 text-accent-100 hover:bg-accent-200",
    blank:
      "btn-default h-9 flex rounded-xl w-fit items-center pr-4 pl-4 hover:bg-primary-300",
  };

  const textSizes: Record<string, string> = {
    small: "xl:text-md lg:text-base md:text-sm sm:text-sm",
    medium: "xl:text-xl lg:text-xl md:text-base sm:text-base",
    large: "xl:text-xl lg:text-xl md:text-lg sm:text-md",
  };
  return (
    <button
      {...props}
      className={` icon-color gap-3 disabled:opacity-75 ${
        variantStyles[variant] || ""
      } ${className}`}
      onClick={onClick}
    >
      {icon &&
        (variant !== "iconFill" ? (
          <FontAwesomeIcon icon={icon} className="object-contain h-1/2" />
        ) : (
          <FontAwesomeIcon icon={icon} className="object-contain w-12" />
        ))}

      {text && (
        <span
          className={`z-0 text-center w-full items-center justify-center ${textStyle} ${textSizes[textSize]}}`}
        >
          {text}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
