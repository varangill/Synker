import { ReactNode } from "react";

interface TitleProps {
  title: string;
  children?: ReactNode;
}

const Title = ({ title, children }: TitleProps) => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="title">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Title;
