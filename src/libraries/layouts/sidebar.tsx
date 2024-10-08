import clsx from 'clsx';
import Link from 'next/link';
import { RenderIcon } from '../icons';
import Logo from '../logo';

type SideBarProps = {
  className?: string;
  closeMenu?: (value: boolean) => void;
};

export default function SideBar({ className, closeMenu }: SideBarProps) {
  const menus = [
    { title: 'Trang chủ', href: '#welcome' },
    { title: 'Câu chuyện tình yêu', href: '#our-love-story' },
    { title: 'Lời mời', href: '#invitation' },
    { title: 'Địa điểm', href: '#location' },
    { title: 'Phù dâu', href: '#bridesmaids' },
    { title: 'Phù rể', href: '#groomsmen' },
    { title: 'Bộ ảnh cưới', href: '#wedding-gallery' },
    { title: 'Lời chúc', href: '#testimonials' },
    { title: 'RSVP', href: '#rsvp' }
  ];
  return (
    <div className={clsx(className, 'flex flex-col')}>
      {/* logo */}
      <Logo className="mb-14" />

      {/* nav bar */}
      <nav className="flex flex-col justify-center items-center w-full gap-2">
        {menus.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="nav-item text-center text-sm font-normal my-2 uppercase w-fit"
            onClick={() => closeMenu && closeMenu(false)}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* footer */}
      <div className="flex-1 flex items-center justify-end flex-col text-sm gap-2">
        <span className="block w-2/3 h-[1px] bg-line"></span>
        <Link href="tel:+18475555555" className="mt-3">
          +84383007243
        </Link>
        <Link href="mailto:someone@example.com">someone@example.com</Link>

        {/* social */}
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/"
            className="border border-solid border-line w-8 h-8 aspect-1 flex items-center justify-center transition-all ease-linear hover:bg-black hover:text-white"
          >
            <RenderIcon name="facebook" className="!w-4 !h-4" />
          </Link>
          <Link
            href="/"
            className="border border-solid border-line w-8 h-8 aspect-1 flex items-center justify-center transition-all ease-linear hover:bg-black hover:text-white"
          >
            <RenderIcon name="instagram" className="!w-4 !h-4" />
          </Link>
          <Link
            href="/"
            className="border border-solid border-line w-8 h-8 aspect-1 flex items-center justify-center  transition-all ease-linear hover:bg-black hover:text-white"
          >
            <RenderIcon name="tiktok" className="!w-4 !h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
