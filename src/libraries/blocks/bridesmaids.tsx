/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { LabelBlock } from '../common/label-block';
import clsx from 'clsx';
import Slider from 'react-slick';

type BridesmaidsProps = {
  className?: string;
};

export function Bridesmaids({ className }: BridesmaidsProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    appendDots: (dots: any) => (
      <div>
        <ul className="dots">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="dot-item" />
  };

  const images = [
    '/bridesmaids/01.jpg',
    '/bridesmaids/02.jpg',
    '/bridesmaids/03.jpg',
    '/bridesmaids/04.jpg'
  ];
  return (
    <section className={clsx(className, 'px-7 pr-0 py-20 bg-primary')}>
      <LabelBlock label="Phù dâu" subLabel="Bridesmaids" className="mb-7" />

      {/* slider */}
      <Slider {...settings} className="slider-brides" lazyLoad="progressive">
        {images.map((item, index) => (
          <div key={index}>
            <img src={item} alt="bridesmaids" loading="lazy" className="outline-none" />
          </div>
        ))}
      </Slider>
    </section>
  );
}
