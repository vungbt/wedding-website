import clsx from 'clsx';
import React from 'react';

type LabelBlockProps = {
  className?: string;
  label: string;
  subLabel?: string;
};

export function LabelBlock({ className, label, subLabel }: LabelBlockProps) {
  return (
    <div className={clsx(className, 'relative')}>
      <span className="absolute -top-6 left-0 font-secondary text-label text-3xl lowercase">
        {subLabel}
      </span>
      <h3 className="text-2xl font-primary uppercase font-medium relative z-[1]">{label}</h3>
    </div>
  );
}
