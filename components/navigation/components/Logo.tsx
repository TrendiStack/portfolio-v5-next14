import { useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigation } from '@/stores/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();
  const isMenuOpen = useNavigation(state => state.isMenuOpen);
  const path = usePathname();
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (body.clientWidth < 1024) return;
      if (isHovered) {
        animate(
          '#logo',
          {
            scale: 0.8,
          },
          { duration: 0.3, ease: 'easeInOut' }
        );
      } else {
        animate(
          '#logo',
          {
            scale: 1,
          },
          { duration: 0.3, ease: 'easeInOut' }
        );
      }
    }
  }, [animate, isHovered]);

  return (
    <Link href="/">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={scope}
        className="group flex items-end gap-3 text-xl relative "
      >
        <svg
          id="logo"
          width="35"
          height="50"
          viewBox="0 0 58 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="origin-bottom"
        >
          <circle
            cx="52"
            cy="54"
            r="6"
            className="fill-primary lg:fill-secondary"
          />
          <path
            d="M0 5H23.538M23.538 5H33.7289C40.8848 5 47.8779 9.06344 47.9966 16.2184V16.2184C48.1143 23.3163 40.9455 28.3145 33.8466 28.3145H23.538M23.538 5V28.3145M23.538 59V28.3145"
            className={`${
              isMenuOpen
                ? 'stroke-secondary'
                : path.length > 1
                ? 'stroke-secondary'
                : 'stroke-primary lg:stroke-secondary'
            } transition-colors duration-200 ease-in-out`}
            strokeWidth="10"
          />
        </svg>
        <div className="max-lg:hidden group flex items-center gap-1 capitalize overflow-hidden w-0 group-hover:w-[400%] transition-all duration-500 absolute left-10 bottom-0">
          <div>terel</div>
          <div>phillips</div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
