import clsx from 'clsx';
import { IconProps } from '.';

export default function Line({ className, transform, ...reset }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="189"
      height="26"
      viewBox="0 0 189 26"
      className={clsx('h-6 w-6', className)}
      transform={transform}
      {...reset}
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth="1.5px"
        d="M86.19,2.362L96.98,13,86.19,23.634,75.4,13Z"
      />
      <path
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth="1.5px"
        d="M94.985,2.362L105.775,13,94.985,23.634,84.2,13Z"
      />
      <path
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth="1.5px"
        d="M103.78,2.362L114.57,13,103.78,23.634,92.991,13Z"
      />
      <path fillRule="evenodd" fill="currentColor" d="M120,14V13H523v1H120Z" />
      <path fillRule="evenodd" fill="currentColor" d="M-331,14V13H69v1H-331Z" />
    </svg>
  );
}
