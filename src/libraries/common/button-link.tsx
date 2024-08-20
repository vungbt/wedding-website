import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type ButtonLinkProps = {
  className?: string;
  href: string;
  label: string;
};

export function ButtonLink({ className, href, label }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'bg-black outline-none text-sm uppercase text-white py-3 px-7 border border-solid border-transparent transition-all ease-linear hover:bg-white hover:text-dark hover:border-dark',
        className
      )}
    >
      {label}
    </Link>
  );
}
