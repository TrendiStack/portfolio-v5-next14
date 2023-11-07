'use client';

import { PiArrowBendRightUpLight } from 'react-icons/pi';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
  };

  return (
    <button
      className="capitalize flex justify-end items-center"
      onClick={scrollToTop}
    >
      <p className="self-end">to the top</p>
      <PiArrowBendRightUpLight className="text-white text-3xl" />
    </button>
  );
};

export default ScrollToTopButton;
