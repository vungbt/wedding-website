import { IconName, RenderIcon } from '@/libraries/icons';
import clsx from 'clsx';
import React, { useMemo } from 'react';

type OverviewCardProps = {
  title: string;
  count: number;
  type: 'success' | 'danger' | 'warning' | 'info';
};

export default function OverviewCard({ title, type, count }: OverviewCardProps) {
  const getIconName = () => {
    switch (type) {
      case 'info':
        return 'message';
      case 'warning':
      case 'danger':
        return 'lamp-slash';
      case 'success':
        return 'lamp-charge';
    }
  };
  return (
    <div className="flex items-center justify-between gap-1 bg-white min-h-[100px] rounded-md shadow-xl w-full sm:w-[160px] md:w-[200px] p-4 border border-dashed border-label">
      <div className="flex flex-col h-full">
        <span className="font-bold text-lg">{count}</span>
        {title}
      </div>
      <div
        className={clsx('w-10 h-10 rounded-md flex items-center justify-center', {
          'bg-success': type === 'success',
          'bg-warning': type === 'warning',
          'bg-danger': type === 'danger',
          'bg-info': type === 'info'
        })}
      >
        <RenderIcon name={getIconName()} className="text-white" />
      </div>
    </div>
  );
}
