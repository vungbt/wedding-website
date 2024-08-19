import clsx from 'clsx';
import React, { forwardRef, Ref } from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  className?: string;
};

export const Button = forwardRef(function ButtonBase(
  props: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const { className, label, type = 'button', ...reset } = props;

  return (
    <button
      ref={ref}
      {...reset}
      type={type}
      className={clsx(
        'bg-black outline-none text-sm uppercase text-white py-3 px-7 border border-solid border-transparent transition-all ease-linear hover:bg-white hover:text-dark hover:border-dark',
        className
      )}
    >
      {label}
    </button>
  );
});
