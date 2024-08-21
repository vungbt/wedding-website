import Image from 'next/image';
import React from 'react';
import { LabelBlock } from '../common/label-block';
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
  return (
    <section id="wedding-gallery" className="bg-primary py-20 px-7">
      <LabelBlock label="Bộ ảnh cưới" subLabel="new works" className="mb-7" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 overflow-x-auto w-full gap-1">
        {images.map((item, index) => (
          <span key={index} className="image-gallery relative aspect-1">
            <Image src={item} fill alt="image" loading="lazy" />
          </span>
        ))}
      </div>
    </section>
  );
}
