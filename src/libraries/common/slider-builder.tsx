'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { RenderIcon } from '../icons';

export function SliderBuilder({
  data,
  initialIndex = 1
}: {
  data: string[];
  initialIndex?: number;
}) {
  const [slideIndex, setSlideIndex] = useState(initialIndex);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  return (
    <div className="slider-builder">
      {data.map((source, index) => {
        return (
          <div
            key={index}
            className={clsx('slide shadow-box', { 'active-anim': slideIndex === index + 1 })}
          >
            <Image
              src={source}
              alt="image"
              width={600}
              layout="responsive"
              height={800}
              loading="lazy"
              className="image-builder"
            />
          </div>
        );
      })}
      <div className="slider-actions">
        <BtnSlider direction="prev" moveSlide={prevSlide} />
        <BtnSlider direction="next" moveSlide={nextSlide} />
      </div>
    </div>
  );
}

function BtnSlider({
  direction,
  moveSlide
}: {
  direction: 'next' | 'prev';
  moveSlide: () => void;
}) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <RenderIcon
        name={direction === 'next' ? 'chevron-right' : 'chevron-left'}
        className="!w-5 !h-5"
      />
    </button>
  );
}
