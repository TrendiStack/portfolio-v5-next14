interface HeaderTextProps {
  text: string;
  className?: string;
  subheading?: boolean;
}

const HeaderText = ({ text, className, subheading }: HeaderTextProps) => {
  switch (subheading) {
    case true:
      return (
        <h2
          className={`text-2xl sm:text-4xl lg:text-2xl 2xl:text-4xl  ${className}`}
        >
          {text}
        </h2>
      );
    default:
      return (
        <h1
          className={`text-4xl sm:text-5xl md:text-5xl  2xl:text-8xl uppercase ${className}`}
        >
          {text}
        </h1>
      );
  }
};

export default HeaderText;
