'use client';

import { MdKeyboardArrowUp } from 'react-icons/md';
import { PiArrowRightThin } from 'react-icons/pi';
import { useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface OverviewProps {
  title: string;
  initial: string;
  full?: string;
}

const Overview = ({ title, initial, full }: OverviewProps) => {
  const [showMore, setShowMore] = useState(false);
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    animate(
      '#target',
      {
        height: showMore ? 'auto' : 0,
      },
      {
        duration: 0.5,
        ease: 'easeInOut',
      }
    );
  }, [animate, showMore]);

  return (
    <div ref={scope} className="grid md:grid-cols-2 max-md:gap-5">
      <h3 className="capitalize inline-flex">
        <PiArrowRightThin className="text-lg lg:relative top-1" />
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-3">
        <div>
          <p className="lg:text-lg">{initial}</p>
        </div>
        <div id="target" className={`overflow-hidden ${showMore ? '' : 'h-0'}`}>
          <p className="lg:text-lg ">{full}</p>
        </div>
        {full && (
          <button
            onClick={handleClick}
            className="capitalize justify-self-start font-medium inline-flex items-center"
          >
            learn more
            <MdKeyboardArrowUp
              className={`${
                showMore ? 'rotate-180' : 'rotate-0'
              } transition-all ease-in-out duration-500 `}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Overview;
