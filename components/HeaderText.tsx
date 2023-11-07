interface HeaderTextProps {
  text: string;
  className?: string;
  subheading?: boolean;
}

const HeaderText = ({ text, className, subheading }: HeaderTextProps) => {
  switch (subheading) {
    case true:
      return <h2 className={`lg:text-2xl ${className}`}>{text}</h2>;
    default:
      return (
        <h1
          className={`text-2xl sm:text-7xl md:text-8xl uppercase ${className}`}
        >
          {text}
        </h1>
      );
  }
};

export default HeaderText;
