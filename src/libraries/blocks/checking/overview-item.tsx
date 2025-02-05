import clsx from 'clsx';
import React from 'react';

type OverViewItemProps = {
  title: string;
  count: number;
  type: 'success' | 'danger' | 'warning' | 'info';
};

export default function OverViewItem({ title, type, count }: OverViewItemProps) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span
        className={clsx('w-2 h-2 rounded-full', {
          'bg-success': type === 'success',
          'bg-warning': type === 'warning',
          'bg-danger': type === 'danger',
          'bg-info': type === 'info'
        })}
      />
      {title}
      <span className="font-bold">{`(${count})`}</span>
    </div>
  );
}
