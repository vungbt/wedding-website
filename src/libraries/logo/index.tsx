import { RouterPath } from '@/constants/router';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href={RouterPath.Home}
      className={clsx('flex flex-col items-center justify-center gap-2', className)}
    >
      <span className="font-tertiary text-[40px] font-semibold text-center uppercase leading-5 tracking-normal flex items-center">
        PWE
        <i className="text-base relative">®</i>
      </span>
      <span className="font-secondary text-3xl text-secondary font-medium capitalize flex gap-1a items-center">
        happy
        <small className="text-base ml-2 mr-1">•</small>
        weddings
      </span>
    </Link>
  );
}
