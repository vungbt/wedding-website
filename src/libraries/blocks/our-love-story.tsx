import Image from 'next/image';
import React from 'react';

export function OurLoveStory() {
  return (
    <section id="our-love-story" className="py-20 px-7 flex flex-col md:flex-row w-full gap-2">
      <div
        className="w-full md:w-1/2 flex flex-col gap-5"
        data-aos="fade-right" // Add AOS data attribute for animation
        data-aos-duration="1000"
      >
        <h1 className="text-2xl uppercase">Thanh Vững & Hoàng Diệu</h1>
        <p className="font-tertiary text-secondary text-[20px] italic">
          {`"Yêu không phải là nhìn nhau, mà là cùng nhìn về một hướng."`}
        </p>
        <p className="font-tertiary text-xl text-sub">
          10 năm là cả một hành trình đầy cảm xúc – nơi chúng mình cùng vượt qua mọi thử thách, cùng
          sẻ chia niềm vui và cả những phút giây bình dị. Từ những điều giản đơn nhất, chúng mình đã
          học cách yêu thương, thấu hiểu và cùng nhau xây dựng những ước mơ chung
        </p>
        <p className="font-tertiary text-[20px] text-sub">
          Hôn lễ này không chỉ là lời cam kết, mà còn là bước khởi đầu cho một chặng đường mới – nơi
          niềm tin, hạnh phúc và tình yêu sẽ ngày càng bền chặt.
        </p>
        <p className="font-tertiary text-[20px] text-sub">
          Chúng mình rất mong bạn sẽ có mặt để cùng chia sẻ niềm vui trong ngày đặc biệt này!
        </p>
        <p className="font-tertiary text-secondary text-[20px] italic">
          Một hành trình yêu thương, một khởi đầu hạnh phúc.
        </p>
      </div>

      {/* image */}
      <div
        className="relative w-full md:w-1/2 aspect-1 h-fit"
        data-aos="fade-left" // Add AOS data attribute for animation
        data-aos-duration="1000"
      >
        <Image fill src="/our-love/our_love_1.jpg" alt="our love" className="aspect-1 h-auto" />
      </div>
    </section>
  );
}
