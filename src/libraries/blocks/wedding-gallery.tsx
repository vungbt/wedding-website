'use client';
import Image from 'next/image';
import { ModalWrap, SliderBuilder } from '../common';
import { LabelBlock } from '../common/label-block';
import { useState } from 'react';
import { RenderIcon } from '../icons';

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [initialSlider, setInitialSlider] = useState<number>(1);

  const onViewImage = (index: number) => {
    setInitialSlider(index + 1);
    setIsOpen(true);
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
            className="image-gallery relative aspect-1 cursor-pointer"
            data-aos="zoom-in" // Animation for each image
            data-aos-duration="1000"
            onClick={() => onViewImage(index)}
          >
            <Image src={item} fill alt="image" loading="lazy" />
            <span className="view-finder">
              <RenderIcon name="view-finder" className="text-white" />
            </span>
          </span>
        ))}
      </div>

      {/* modal */}
      <ModalWrap isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SliderBuilder initialIndex={initialSlider} data={images} />
      </ModalWrap>
    </section>
  );
}
