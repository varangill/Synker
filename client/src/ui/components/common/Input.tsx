import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  label?: string;
  id: string;
}

const Input = ({
  variant,
  label,
  id,
  className = "",
  ...props
}: InputProps) => {
  let btnStyle =
    className + " bg-primary-100 rounded-xl w-full pl-4 text-white";
  switch (variant) {
    case "search":
      btnStyle += " ";
      break;
    default:
      btnStyle += " h-10 outline-none focus:ring-0";
      break;
  }

  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-medium mb-1 text-white">
        {label}
      </label>
      <input id={id} {...props} className={btnStyle} placeholder={label} />
    </div>
  );
};

export default Input;
