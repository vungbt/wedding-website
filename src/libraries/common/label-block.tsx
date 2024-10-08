import clsx from 'clsx';
import React from 'react';

type LabelBlockProps = {
  className?: string;
  classLabel?: string;
  classSubLabel?: string;
  label: string;
  subLabel?: string;
};

export function LabelBlock({
  className,
  classLabel,
  classSubLabel,
  label,
  subLabel
}: LabelBlockProps) {
  return (
    <div className={clsx(className, 'relative')}>
      <span
        className={clsx(
          'absolute -top-6 left-0 font-secondary text-label text-3xl lowercase',
          classSubLabel
        )}
      >
        {subLabel}
      </span>
      <h3
        className={clsx('text-2xl font-primary uppercase font-medium relative z-[1]', classLabel)}
      >
        {label}
      </h3>
    </div>
  );
}
