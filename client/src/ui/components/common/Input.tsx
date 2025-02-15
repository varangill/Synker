import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  id: string;
  [key: string]: unknown;
}

const Input = ({ type, label, id, ...props }: InputProps) => {
  let btnStyle = "";
  switch (type) {
    case "search":
      btnStyle += "test";
      break;
    case "outline":
      btnStyle += "outline";
      break;
    default:
      btnStyle += "default";
      break;
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} className={btnStyle}></input>
    </div>
  );
};

export default Input;
