/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { LabelBlock } from '../common/label-block';
import clsx from 'clsx';
import Slider from 'react-slick';

type GroomsmenProps = {
  className?: string;
};

export function Groomsmen({ className }: GroomsmenProps) {
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
    '/groomsmen/01.jpg',
    '/groomsmen/02.jpg',
    '/groomsmen/03.jpg',
    '/groomsmen/04.jpg'
  ];
  return (
    <section id="groomsmen" className={clsx(className, 'px-7 pr-0 py-20')}>
      <LabelBlock label="Phù rể" subLabel="Groomsmen" className="mb-7" />

      {/* slider */}
      <Slider {...settings} className="slider-brides" lazyLoad="progressive">
        {images.map((item, index) => (
          <div key={index}>
            <img src={item} alt="Groomsmen" loading="lazy" className="outline-none" />
          </div>
        ))}
      </Slider>
    </section>
  );
}
