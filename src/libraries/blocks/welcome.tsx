'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type WelcomeBlockProps = {
  className?: string;
};

export function WelcomeBlock({}: WelcomeBlockProps) {
  const data = [
    '/welcome/welcome_1.jpg',
    '/welcome/welcome_2.jpg',
    '/welcome/welcome_3.jpg',
    '/welcome/welcome_4.jpg',
    '/welcome/welcome_5.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, data.length]);

  return (
    <div
      className="h-screen overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className={clsx(
            'w-full h-screen transition-all ease-linear duration-1000 absolute top-0 right-0 bottom-0 left-0',
            {
              'opacity-0 animate-fadeOut': currentIndex !== index,
              'opacity-100 animate-fadeIn': currentIndex === index
            }
          )}
        >
          <Image fill src={item} alt="image" loading="lazy" />
        </div>
      ))}

      {/* dots */}
      <div className="flex flex-col gap-[6px] absolute right-5 bottom-5 z-10">
        {data.map((_, index) => (
          <span
            key={index}
            className={clsx(
              'w-[10px] h-[10px] rounded-full cursor-pointer transition-all ease-linear',
              {
                'bg-white-60': currentIndex !== index,
                'bg-dark-80': currentIndex === index
              }
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
