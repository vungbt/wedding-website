'use client';
import { randomAvatar } from '@/utils/common';
import { getTimeLeft } from '@/utils/formatter';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { ButtonLink } from '../common';
import { LabelBlock } from '../common/label-block';
import { RenderIcon } from '../icons';

export function Testimonials() {
  const slider = React.useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true
  };

  const messages = [
    {
      content:
        'I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn’t have been happier with her services and upbeat personality!',
      author: 'Oliva',
      createdAt: new Date()
    },
    {
      content:
        'I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn’t have been happier with her services and upbeat personality!',
      author: 'Oliva',
      createdAt: new Date()
    },
    {
      content:
        'I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn’t have been happier with her services and upbeat personality!',
      author: 'Oliva',
      createdAt: new Date()
    },
    {
      content:
        'I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn’t have been happier with her services and upbeat personality!',
      author: 'Oliva',
      createdAt: new Date()
    },
    {
      content:
        'I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn’t have been happier with her services and upbeat personality!',
      author: 'Oliva',
      createdAt: new Date()
    },
    {
      content:
        'I had no idea about all the things I had to do to get married / things I needed to think about. Rachel explained everything to me and guided me through the whole process with enthusiasm and patience. She was wonderful to work with! I couldn’t have been happier with her services and upbeat personality!',
      author: 'Oliva',
      createdAt: new Date()
    }
  ];

  const onHandleSlider = (type: 'prev' | 'next') => {
    if (!slider || !slider.current) return;
    const sliderEvent: any = slider.current;
    switch (type) {
      case 'prev':
        return sliderEvent?.slickPrev();
      case 'next':
        return sliderEvent?.slickNext();
    }
  };
  return (
    <section id="testimonials" className="testiominal py-20">
      <div className="px-7 flex items-center relative z-10 gap-2">
        <div className="w-2/5">
          <LabelBlock
            label="Lời chúc"
            classLabel="text-white"
            subLabel="testiominals"
            classSubLabel="text-[#ccc]"
          />
          <p className="text-white mt-4">
            Những lời chúc và những điều ước tốt đẹp dành cho đôi bạn trẻ được chúng tôi ghi nhận
            tại đây.
          </p>

          {/* actions */}
          <div className="flex items-center gap-4 mt-6">
            <ButtonLink href="#rsvp" label="Xác nhận" />
            <div className="flex items-center gap-2">
              <button className="button-arrow" onClick={() => onHandleSlider('prev')}>
                <RenderIcon name="chevron-left" className="!w-3 !h-3" />
              </button>
              <button className="button-arrow" onClick={() => onHandleSlider('next')}>
                <RenderIcon name="chevron-right" className="!w-3 !h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* message */}
        <div className="w-3/5 bg-white p-7">
          <Slider {...settings} ref={slider}>
            {messages.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col min-h-[200px] justify-around">
                  <p className="text-sub">{item.content}</p>
                  <div className="flex items-start gap-3 mt-3">
                    <Image
                      className="rounded-full"
                      width={60}
                      height={60}
                      alt="avatar"
                      src={randomAvatar()}
                    />
                    <div>
                      <p>{item.author}</p>
                      <p className="text-sub">{getTimeLeft(item.createdAt)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
