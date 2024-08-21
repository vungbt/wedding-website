import clsx from 'clsx';
import React from 'react';

type SideBarButtonProps = {
  className?: string;
  classNameShadow?: string;
  onClick?: () => void;
  open?: boolean;
};

export function SideBarButton({ className, classNameShadow, onClick, open }: SideBarButtonProps) {
  return (
    <label
      className={clsx('sidebar', className, {
        'sidebar-active': open
      })}
      onClick={onClick}
    >
      <i className={clsx('shadow', classNameShadow)} />
    </label>
  );
}
