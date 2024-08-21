'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ButtonLink } from '../common';
import { LabelBlock } from '../common/label-block';

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

  const blocks = [
    'Chúng tôi đã tìm thấy nhau và cùng nhau xây dựng một câu chuyện tình yêu đẹp như mơ. Hãy cùng chúng tôi kỷ niệm ngày đặc biệt này và chứng kiến giấc mơ của chúng tôi trở thành hiện thực.',
    'Ngày cưới của chúng tôi sẽ là một ngày tuyệt vời, nơi mọi giấc mơ đều trở thành hiện thực. Hãy cùng chúng tôi tận hưởng từng khoảnh khắc của ngày đặc biệt này.',
    'Chúng tôi rất mong được đón tiếp bạn trong ngày cưới của chúng tôi. Hãy xác nhận sự hiện diện của bạn và cùng chúng tôi biến giấc mơ thành hiện thực.',
    'Hãy cùng nhìn lại những khoảnh khắc đẹp nhất trong hành trình tình yêu của chúng tôi. Mỗi bức ảnh là một phần của giấc mơ mà chúng tôi đang sống.'
  ];

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section id="welcome" className="h-screen overflow-hidden relative">
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

      {/* block */}
      <div className="w-[87%] md:max-w-[470px] bottom-7 left-7 absolute">
        <Slider {...settings}>
          {blocks.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col min-h-[260px] justify-around bg-white p-7 pt-12">
                <LabelBlock
                  label="Dòng cảm xúc"
                  subLabel="dream wedding"
                  classLabel="text-center md:text-start"
                  classSubLabel="w-full text-center md:w-auto"
                />
                <p className="font-tertiary text-sub text-lg font-medium text-center md:text-start">
                  {item}
                </p>
                <ButtonLink
                  href="#rsvp"
                  label="Cùng chung vui"
                  className="w-fit mt-4 mx-auto md:mx-[initial]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
