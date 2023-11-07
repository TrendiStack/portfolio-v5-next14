import { usePathname, useRouter } from 'next/navigation';

interface NavBtnProps {
  text: string;
  menu?: boolean;
}

const NavBtn = ({ text, menu }: NavBtnProps) => {
  const router = useRouter();
  const path = usePathname();
  return (
    <button
      onClick={() => router.push(`/#${text === 'work' ? 'projects' : text}`)}
      className={`${menu ? 'uppercase' : 'capitalize '}`}
    >
      {text}
    </button>
  );
};

export default NavBtn;
