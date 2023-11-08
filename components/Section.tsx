'use client';

import { GetViewportHeight } from '@/hooks/getViewportHeight';

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
  const mobileHeight = GetViewportHeight();

  return (
    <section
      id={id}
      className={`${handlePadding} px-5 lg:px-8 text-sm 2xl:text-base ${className}`}
      style={{
        minHeight:
          height === true ? 'auto' : id === 'info' ? '100vh' : mobileHeight,
      }}
    >
      {children}
    </section>
  );
};

export default Section;
