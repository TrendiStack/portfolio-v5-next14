import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface NavBtnProps {
  text: string;
  menu?: boolean;
  email?: boolean;
}

const NavBtn = ({ text, menu, email }: NavBtnProps) => {
  const router = useRouter();
  const path = usePathname();
  return (
    <>
      {!email ? (
        <button
          onClick={() =>
            router.push(`/#${text === 'work' ? 'projects' : text}`)
          }
          className={`${menu ? 'uppercase' : 'capitalize '}`}
        >
          {text}
        </button>
      ) : (
        <Link href="mailto:terel.phillips23@gmail.com">{text}</Link>
      )}
    </>
  );
};

export default NavBtn;
