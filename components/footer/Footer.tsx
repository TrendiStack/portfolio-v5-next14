import { PiArrowRightThin, PiArrowUpRightThin } from 'react-icons/pi';
import ContextDivider from '../ContextDivider';
import HeaderText from '../HeaderText';
import Link from 'next/link';
import ScrollToTopButton from '@/components/ui/buttons/ScrollToTopButton';
import Section from '../Section';

const Footer = () => {
  return (
    <Section id="footer" height className="bg-secondary text-primary relative">
      <div className="min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-end">
        <h2 className="text-3xl md:text-5xl lg:text-6xl">Got an Idea?</h2>
        <div className="flex items-center my-8 lg:my-8">
          <PiArrowRightThin className="text-6xl lg:text-8xl" />
          <HeaderText text="Let's Build It!" />
        </div>
        <Link
          href="mailto:hello@terel-phillips.ca"
          className="text-xl lg:text-3xl hover:animate-pulse"
        >
          hello@terel-phillips.ca
        </Link>
        <ScrollToTopButton />
      </div>

      <ContextDivider colour="primary" />

      <div className="flex justify-between pb-8 capitalize">
        <Link
          href="https://www.linkedin.com/in/terel-phillips/"
          target="_blank"
          className="inline-flex items-center group"
        >
          LinkedIn
          <PiArrowUpRightThin className="text-white group-hover:-rotate-45 transition-all duration-300" />
        </Link>
        <p>©terel phillips</p>
      </div>
    </Section>
  );
};

export default Footer;
