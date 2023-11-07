interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  padding?: boolean;
  height?: boolean;
  ref?: React.RefObject<HTMLDivElement>;
}

const Section = ({
  children,
  id,
  className,
  padding,
  height,
}: SectionProps) => {
  const handlePadding = padding ? 'pt-20 lg:pt-32' : 'pt-0';
  const handleHeight = height ? '' : 'min-h-screen';

  return (
    <section
      id={id}
      className={`${handleHeight} ${handlePadding} px-5 lg:px-8 text-sm lg:text-base ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
