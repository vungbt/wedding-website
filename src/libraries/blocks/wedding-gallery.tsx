'use client';
import Image from 'next/image';
import React from 'react';
import { LabelBlock } from '../common/label-block';
import { ModalWrap } from '../common';
import Slider from 'react-slick';

export function WeddingGallery() {
  const images = [
    '/wedding-gallery/01.jpg',
    '/wedding-gallery/02.jpg',
    '/wedding-gallery/03.jpg',
    '/wedding-gallery/04.jpg',
    '/wedding-gallery/05.jpg',
    '/wedding-gallery/06.jpg',
    '/wedding-gallery/07.jpg',
    '/wedding-gallery/08.jpg',
    '/wedding-gallery/09.jpg',
    '/wedding-gallery/10.jpg',
    '/wedding-gallery/11.jpg',
    '/wedding-gallery/12.jpg'
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
  };

  return (
    <section
      id="wedding-gallery"
      className="bg-primary py-20 px-7"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <LabelBlock
        label="Bộ ảnh cưới"
        subLabel="new works"
        className="mb-7"
        data-aos="fade-down" // Animation for the label block
        data-aos-duration="1000"
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 overflow-x-auto w-full gap-1"
        data-aos="fade-up" // Animation for the grid
        data-aos-duration="1000"
      >
        {images.map((item, index) => (
          <span
            key={index}
            className="image-gallery relative aspect-1"
            data-aos="zoom-in" // Animation for each image
            data-aos-duration="1000"
          >
            <Image src={item} fill alt="image" loading="lazy" />
          </span>
        ))}
      </div>

      {/* modal */}
      <ModalWrap isOpen={true}>
        <img src={images[0]} alt="image" loading="lazy" className="w-full aspect-4/3" />
      </ModalWrap>
    </section>
  );
}
