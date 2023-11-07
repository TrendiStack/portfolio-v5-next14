import { create } from 'zustand';

interface NavigationState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useNavigation = create<NavigationState>(set => ({
  isMenuOpen: false,
  toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
}));
