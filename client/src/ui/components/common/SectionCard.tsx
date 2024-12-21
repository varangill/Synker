import { ReactNode } from "react";
import Title from "./Title";

interface SectionCardProps {
  title?: string;
  titleContent?: ReactNode;
  children?: ReactNode;
}

const SectionCard = ({ title, titleContent, children }: SectionCardProps) => {
  return (
    <section className="flex flex-col bg-primary-200 w-full h-full rounded-2xl items-center">
      {title ? (
        <>
          <Title title={title}>{titleContent}</Title>
          <span className="line" />
        </>
      ) : (
        <span className="mb-[16px]" />
      )}
      {children}
    </section>
  );
};

export default SectionCard;
