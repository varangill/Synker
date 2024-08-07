interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="title text-white font-bold items-center pt-2 pb-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
      {title}
    </div>
  );
};

export default Title;
