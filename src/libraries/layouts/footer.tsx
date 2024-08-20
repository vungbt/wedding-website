import React from 'react';
import Logo from '../logo';
import Link from 'next/link';
import { RenderIcon } from '../icons';

export default function Footer() {
  return (
    <div className="w-full bg-black py-24 px-14 flex">
      {/* block 1 */}
      <div className="w-1/3 flex flex-col items-start gap-5">
        <Logo className="text-white items-start" />
        {/* social */}
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/"
            className="border border-solid border-[#222] w-8 h-8 aspect-1 flex items-center justify-center transition-all ease-linear text-white hover:bg-secondary hover:text-black"
          >
            <RenderIcon name="facebook" className="!w-4 !h-4" />
          </Link>
          <Link
            href="/"
            className="border border-solid border-[#222] w-8 h-8 aspect-1 flex items-center justify-center transition-all ease-linear text-white hover:bg-secondary hover:text-black"
          >
            <RenderIcon name="instagram" className="!w-4 !h-4" />
          </Link>
          <Link
            href="/"
            className="border border-solid border-[#222] w-8 h-8 aspect-1 flex items-center justify-center  transition-all ease-linear text-white hover:bg-secondary hover:text-black"
          >
            <RenderIcon name="tiktok" className="!w-4 !h-4" />
          </Link>
        </div>
      </div>

      {/* block 2 */}
      <div className="w-1/3 flex flex-col items-start gap-5">
        {/* SDT */}
        <div className="flex items-start flex-col gap-2">
          <span className="text-black uppercase text-secondary">Số điện thoại</span>
          <span className="text-sub">+84383007243</span>
        </div>
        {/* Địa chỉ */}
        <div className="flex items-start flex-col gap-2">
          <span className="text-black uppercase text-secondary">Địa chỉ</span>
          <span className="text-sub">Xóm 10, Giao Hà, Giao Thuỷ, Nam Định</span>
        </div>
      </div>

      {/* block 3 */}
      <div className="w-1/3 flex flex-col items-start gap-5">
        {/* Email */}
        <div className="flex items-start flex-col gap-2">
          <span className="text-black uppercase text-secondary">Email</span>
          <span className="text-sub">info@pweddings.com</span>
        </div>
      </div>
    </div>
  );
}
