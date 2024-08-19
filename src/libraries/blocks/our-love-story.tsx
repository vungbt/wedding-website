import Image from 'next/image';
import React from 'react';

export function OurLoveStory() {
  return (
    <div className="py-20 px-7 flex w-full gap-2">
      <div className="w-1/2 flex flex-col gap-5">
        <h1 className="text-2xl uppercase">Quỳnh Như & Người Thương</h1>
        <p className="font-tertiary text-secondary text-[20px] italic">
          We would love to meet up and chat about how we can make your dream wedding happen!
        </p>
        <p className="font-tertiary text-xl text-sub">
          Professional Wedding & Event Planner. Curabit aliquet orci elit genes tristique lorem
          commodo vitae. Aliquam tincidunt, felis sede gravida aliquam, neque libero hendrerit
          magna, sit amet mollis lacus quam maurisine. Aliquam erat volutpat.
        </p>
        <p className="font-tertiary text-[20px] text-sub">
          Quality fringilla dui at elit finibus viverra nec a lacus. Qedat themo the druanye semper
          sollicitudin mi suscipit non sagie the fermen.
        </p>
        <p className="font-tertiary text-[20px] text-sub">
          Phasellus viverra tristique justo. Duis vitae diam neque. Vivamus ac est augue. Vestibulum
          fringilla dui at elit finibus viverra nec a lacus. Sedat themo eros odio semper
          sollicitudin mi suscipit non.
        </p>
        <p className="font-tertiary text-secondary text-[20px] italic">To Know Us is to Love Us!</p>
      </div>

      {/* image */}
      <div className="relative w-1/2 aspect-1 h-fit">
        <Image fill src="/our-love/our_love_1.jpg" alt="our love" className="aspect-1 h-auto" />
      </div>
    </div>
  );
}
