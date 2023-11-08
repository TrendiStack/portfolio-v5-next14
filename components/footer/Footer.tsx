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
        <HeaderText subheading text="Got an Idea?" />
        <div className="flex max-lg:flex-col lg:items-center max-lg:gap-3 my-3 lg:my-5 2xl:my-8">
          <PiArrowRightThin className="text-6xl 2xl:text-8xl" />
          <HeaderText text="Let's Build It!" />
        </div>
        <div className="flex justify-between items-center max-lg:mt-3">
          <Link
            href="mailto:hello@terel-phillips.ca"
            className="lg:hover:animate-pulse"
          >
            <HeaderText subheading text="hello@terel-phillips.ca" />
          </Link>
          <ScrollToTopButton />
        </div>
      </div>

      <ContextDivider colour="primary" />

      <div className="flex max-lg:flex-col gap-3 justify-between pb-8 capitalize">
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
