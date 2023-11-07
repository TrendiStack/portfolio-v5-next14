'use client';

import { useNavigation } from '@/stores/navigation';
import Logo from './components/Logo';
import Menu from './components/Menu';
import MenuBtn from './components/MenuBtn';
import MusicPlayer from '../MusicPlayer';
import NavBtn from './components/NavBtn';

const Nav = () => {
  const isMenuOpen = useNavigation(state => state.isMenuOpen);

  return (
    <nav
      className={`w-full fixed z-[1000] ${
        isMenuOpen ? 'bg-primary' : 'bg-transparent'
      } transition-colors duration-200 ease-in-out`}
    >
      <div className="w-full flex justify-between items-center p-5 lg:p-8">
        <Logo />
        <MusicPlayer colour={isMenuOpen ? 'dark' : ''} />
        <MenuBtn />
        <ul className="flex gap-10 text-xl max-lg:hidden">
          <li>
            <NavBtn text="work" />
          </li>
          <li>
            <NavBtn text="info" />
          </li>
          <li>
            <NavBtn text="contact" />
          </li>
        </ul>
      </div>
      <Menu />
    </nav>
  );
};

export default Nav;
