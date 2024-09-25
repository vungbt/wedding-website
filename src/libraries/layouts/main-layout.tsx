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
          'py-14 px-7 fixed bottom-0 top-0 left-0 z-[100] overflow-y-hidden bg-white transition-all ease shadow-box w-[270px] lg:w-[23%]',
          {
            'translate-x-[-270px] lg:translate-x-0 transition-all ease': !open,
            '!translate-x-0 transition-all ease': open
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
      <div className={'float-right transition-all ease overflow-y-auto relative w-full lg:w-[77%]'}>
        {/* overlay */}
        <div
          onClick={() => setOpen(false)}
          className={clsx(
            'sidebar-overlay absolute top-0 right-0 left-0 bottom-0 bg-transparent w-full h-full z-[11] transition-all ease-linear',
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
