'use client';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import SideBar from './sidebar';
import Footer from './footer';
import { AudioPlayer, SideBarButton } from '../common';
import clsx from 'clsx';
import useScreen from '@/hooks/useScreen';

type MainLayoutProps = {
  children: ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  const {
    sizes: { lg }
  } = useScreen();

  const [open, setOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden relative">
      <SideBar
        className={clsx(
          'py-14 px-7 fixed bottom-0 top-0 left-0 overflow-y-hidden bg-white transition-all ease-linear shadow-box',
          {
            'w-1/3 lg:w-[23%]': lg,
            'w-[270px] translate-x-[-270px]': !lg,
            '!translate-x-0': open && !lg
          }
        )}
        closeMenu={setOpen}
      />
      {/* sidebar button */}
      <SideBarButton
        className={clsx('fixed z-[9999] lg:hidden', {
          'translate-x-[270px]': open && !lg
        })}
        open={open}
        onClick={() => setOpen(!open)}
      />

      {/* main content */}
      <div
        className={clsx('float-right transition-all ease-linear overflow-y-auto relative', {
          'w-2/3 lg:w-[77%]': lg,
          'w-full translate-x-0': !lg,
          '!translate-x-[270px]': open && !lg
        })}
      >
        {/* overlay */}
        <div
          onClick={() => setOpen(false)}
          className={clsx(
            'absolute top-0 right-0 left-0 bottom-0 bg-transparent w-full h-full z-[11] transition-all ease-linear',
            {
              hidden: !open
            }
          )}
        />
        {children}
        <Footer />
      </div>

      {/* audio */}
      <AudioPlayer />
    </main>
  );
}
