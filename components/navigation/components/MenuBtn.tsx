import { useNavigation } from '@/stores/navigation';

const MenuBtn = () => {
  const isMenuOpen = useNavigation(state => state.isMenuOpen);
  const toggleMenu = useNavigation(state => state.toggleMenu);

  return (
    <div
      onClick={toggleMenu}
      className={`${
        isMenuOpen ? 'bg-secondary' : 'bg-primary lg:bg-secondary'
      } select-none lg:hidden w-8 h-8 rounded-full cursor-pointer transition-colors duration-200 ease-in-out`}
    ></div>
  );
};

export default MenuBtn;
