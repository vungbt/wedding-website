import React from 'react';
import { RenderIcon } from '../icons';
import { LabelBlock } from '../common/label-block';

export function Invitation() {
  return (
    <section
      id="invitation"
      className="invitation parallax-background bg-color-overlay pt-20 !pb-0"
    >
      <div className="w-full flex items-center justify-center flex-col">
        <LabelBlock
          label="Lời mời"
          subLabel="Invitation"
          classLabel="text-[30px]"
          classSubLabel="text-[46px] top-[-28px]"
        />
        <RenderIcon name="line" className="!w-[189px] !h-6 text-secondary mt-4" />
      </div>

      {/* info */}
      <div className="invite-info w-full py-10 px-8 pt-20 text-center bg-primary-50 mt-8">
        <h2 className="text-[38px] md:text-6xl font-secondary mb-7 leading-[1.2] text-black">
          Quynh Nhu <span className="text-2xl">&</span> Binh Minh
        </h2>
        <p className="uppercase font-medium text-black">
          Sự hiện diện của bạn là niềm vinh dự của gia đình chúng tôi
        </p>

        {/* date */}
        <div className="my-5">
          <div className="flex justify-center items-center w-full mb-4">
            <RenderIcon name="line-two" className="!w-full h-[19px] text-gray-100" />
          </div>
          <p className="text-[20pt] font-medium">Ngày 24 tháng 10, 2024</p>
          <p className="text-[18pt] font-medium">vào lúc 03:00 pm</p>
          <div className="flex justify-center items-center w-full mt-5">
            <RenderIcon name="line-two" className="!w-full h-[19px] text-gray-100 scale-y-[-1]" />
          </div>
          <p className="mt-4 uppercase">Tại Xóm 9</p>
          <p className="uppercase">Xã Giao Hà, Huyện Giao Thuỷ, Tỉnh Nam Định</p>
          <p className="mt-3 font-secondary font-medium text-[16pt]">Reception to follow</p>
        </div>
      </div>
    </section>
  );
}
