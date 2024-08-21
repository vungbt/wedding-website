/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { LabelBlock } from '../common/label-block';
import clsx from 'clsx';
import Slider from 'react-slick';
import Link from 'next/link';
import { RenderIcon } from '../icons';

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
    customPaging: () => <div className="dot-item" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      src: '/bridesmaids/01.jpg',
      name: 'Dương Ngọc Phan',
      social: {
        facebook: '/',
        instagram: '/',
        tiktok: '/'
      }
    },
    {
      src: '/bridesmaids/02.jpg',
      name: 'Bảo Uyên',
      social: {
        facebook: '/',
        instagram: '/',
        tiktok: '/'
      }
    },
    {
      src: '/bridesmaids/03.jpg',
      name: 'Vân Anh Bùi',
      social: {
        facebook: '/',
        instagram: '/',
        tiktok: '/'
      }
    },
    {
      src: '/bridesmaids/04.jpg',
      name: 'Uyển Nhi',
      social: {
        facebook: '/',
        instagram: '/',
        tiktok: '/'
      }
    }
  ];
  return (
    <section id="bridesmaids" className={clsx(className, 'px-7 pr-0 py-20 bg-primary')}>
      <LabelBlock label="Phù dâu" subLabel="Bridesmaids" className="mb-7" />

      {/* slider */}
      <Slider {...settings} className="slider-brides" lazyLoad="progressive">
        {data.map((item, index) => (
          <div key={index}>
            <div className="bridesmaids-item flex flex-col items-center justify-center">
              <img src={item.src} alt="bridesmaids" loading="lazy" className="outline-none" />
              <div className="info">
                <p className="text-lg uppercase font-medium">{item.name}</p>
                {/* socials */}
                <div className="social-list bg-primary">
                  <p className="text-lg font-tertiary font-medium">Kết nối yêu thương!</p>
                  <div className="flex items-center gap-2 justify-center">
                    <Link href={item.social.facebook} target="_blank">
                      <RenderIcon name="facebook" />
                    </Link>
                    <Link href={item.social.instagram} target="_blank">
                      <RenderIcon name="instagram" />
                    </Link>
                    <Link href={item.social.tiktok} target="_blank">
                      <RenderIcon name="tiktok" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
