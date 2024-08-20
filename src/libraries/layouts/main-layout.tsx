import React, { ReactNode } from 'react';
import SideBar from './sidebar';
import Footer from './footer';

type MainLayoutProps = {
  children: ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="w-full overflow-hidden relative">
      <SideBar className="w-1/3 lg:w-[23%] py-14 px-7 fixed bottom-0 top-0 left-0 overflow-y-hidden bg-white transition-all ease-linear delay-500 shadow-box" />
      <div className="w-2/3 lg:w-[77%] float-right transition-all ease-linear delay-500 overflow-y-auto">
        {children}
        <Footer />
      </div>
    </main>
  );
}
