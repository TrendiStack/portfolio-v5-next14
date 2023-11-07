import { useNavigation } from '@/stores/navigation';
import { usePathname } from 'next/navigation';

const MenuBtn = () => {
  const isMenuOpen = useNavigation(state => state.isMenuOpen);
  const toggleMenu = useNavigation(state => state.toggleMenu);
  const path = usePathname();

  return (
    <div
      onClick={toggleMenu}
      className={`${
        isMenuOpen
          ? 'bg-secondary'
          : path.length > 1
          ? 'bg-secondary'
          : 'bg-primary lg:bg-secondary'
      } select-none lg:hidden w-8 h-8 rounded-full cursor-pointer transition-colors duration-200 ease-in-out`}
    ></div>
  );
};

export default MenuBtn;
