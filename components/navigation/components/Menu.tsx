import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigation } from '@/stores/navigation';
import NavBtn from './NavBtn';

const Menu = () => {
  const isMenuOpen = useNavigation(state => state.isMenuOpen);
  const toggleMenu = useNavigation(state => state.toggleMenu);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      scope.current,
      {
        y: isMenuOpen ? 325 : -240,
      },
      {
        duration: 0.3,
        ease: 'easeInOut',
      }
    );
  }, [animate, isMenuOpen, scope]);
  return (
    <div
      ref={scope}
      className="absolute -top-60 w-full bg-primary text-secondary rounded-b-3xl"
    >
      <ul className="uppercase text-4xl font-bold flex flex-col gap-5 py-8 px-5">
        <li onClick={toggleMenu}>
          <NavBtn text="work" menu />
        </li>
        <li onClick={toggleMenu}>
          <NavBtn text="info" menu />
        </li>
        <li onClick={toggleMenu}>
          <NavBtn text="contact" menu />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
