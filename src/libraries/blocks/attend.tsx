'use client';
import React, { useMemo, useState } from 'react';
import { LabelBlock } from '../common/label-block';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '../common';

type Inputs = {
  name: string;
  isAttend: boolean;
  guests?: number;
  message?: string;
};

type AttendProps = {
  className?: string;
};

export function Attend({}: AttendProps) {
  const schema = yup
    .object({
      name: yup.string().trim().required('Vui lòng cho chúng tôi biết tên của bạn.'),
      isAttend: yup.boolean().required('Bạn có tham dự được không?'),
      guests: yup.number().optional(),
      message: yup.string().trim().optional()
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const isAttend = watch('isAttend');
  const [isBride, setIsBride] = useState<boolean | undefined>(true);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const renderQR = useMemo(() => {
    if (isBride === undefined) return null;
    if (isBride)
      return (
        <Image
          src="/qr/bride.png"
          width={250}
          height={250}
          alt="bride-qr"
          loading="lazy"
          className="w-[250px] h-[250px] max-w-full aspect-[1/1]"
        />
      );
    return (
      <Image
        src="/qr/groom.png"
        width={250}
        height={250}
        alt="bride-qr"
        loading="lazy"
        className="w-[250px] h-[250px] max-w-full aspect-[1/1]"
      />
    );
  }, [isBride]);

  return (
    <section id="rsvp" className="py-20 px-7 bg-primary">
      <LabelBlock label="Liên hệ" subLabel="location" />
      <div className="flex mt-6 gap-3">
        {/* contact */}
        <div className="flex flex-col gap-6 w-1/2">
          <p className="text-sub">
            Mọi thắc mắc hãy liên hệ ngay với chúng tôi. <br />
            Sự hiện diện của bạn là niềm vinh dự của 2 bên gia đình chúng tôi.
          </p>
          {/* SDT */}
          <div className="flex items-center gap-2">
            <span className="text-black">Số điện thoại</span>
            <span className="w-4 h-[1px] bg-sub"></span>
            <span className="text-sub">+84383007243</span>
          </div>
          {/* Địa chỉ */}
          <div className="flex items-center gap-2">
            <span className="text-black">Địa chỉ</span>
            <span className="w-4 h-[1px] bg-sub"></span>
            <span className="text-sub">Xóm 10, Giao Hà, Giao Thuỷ, Nam Định</span>
          </div>
          {/* Email */}
          <div className="flex items-center gap-2">
            <span className="text-black">Email</span>
            <span className="w-4 h-[1px] bg-sub"></span>
            <span className="text-sub">info@pweddings.com</span>
          </div>
        </div>
        {/* form */}
        <div className="w-1/2">
          <h4 className="text-2xl uppercase">Bạn sẽ tham dự?</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            {/* input */}
            <input
              placeholder="Tên của bạn*"
              {...register('name')}
              className={clsx(
                'w-full outline-none border-solid border border-[#e1e1e1] hover:border-secondary focus:border-secondary bg-[#fbfbfb] py-4 px-3 text-base transition-all ease-linear',
                {
                  '!border-danger': errors.name?.message && errors.name?.message.length > 0
                }
              )}
            />
            {errors.name?.message && (
              <p className="text-danger leading-[1.2] mt-2">{errors.name?.message}</p>
            )}

            {/* is attend */}
            <div className="flex flex-col justify-start items-start mt-5">
              <div className="flex items-start gap-2">
                <input hidden type="radio" id="attendY" {...register('isAttend')} value={1} />
                <label htmlFor="attendY" className="radio-custom mt-[6px]"></label>
                <label htmlFor="attendY" className="text-secondary">
                  Có, tôi sẽ tham gia
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input hidden type="radio" id="attendN" {...register('isAttend')} value={0} />
                <label htmlFor="attendN" className="radio-custom mt-[6px]"></label>
                <label htmlFor="attendN" className="text-secondary">
                  Xin lỗi, tôi không thể đến được
                </label>
              </div>
            </div>
            {errors?.isAttend?.message && (
              <p className="text-danger leading-[1.2] mt-2">{errors?.isAttend?.message}</p>
            )}

            {/* QR */}
            <div
              className={clsx('flex-col justify-start items-start mb-5', {
                flex: isAttend === false || Number(isAttend) === 0,
                hidden:
                  isAttend === null ||
                  isAttend === undefined ||
                  isAttend === true ||
                  Number(isAttend) === 1
              })}
            >
              <div className="flex items-start gap-2">
                <input
                  hidden
                  type="radio"
                  id="isBride"
                  checked={isBride}
                  onClick={() => setIsBride(true)}
                />
                <label htmlFor="isBride" className="radio-custom mt-[6px]"></label>
                <label htmlFor="isBride" className="text-secondary">
                  Bạn là bạn của cô dâu?
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  hidden
                  type="radio"
                  id="isGroom"
                  checked={!isBride}
                  onClick={() => setIsBride(false)}
                />
                <label htmlFor="isGroom" className="radio-custom mt-[6px]"></label>
                <label htmlFor="isGroom" className="text-secondary">
                  Bạn là bạn của chú rể?
                </label>
              </div>

              <div className="flex items-center justify-center mt-3">{renderQR}</div>
            </div>

            {/* select guest */}
            <select
              {...register('guests')}
              className={clsx(
                'w-full outline-none border-solid border border-[#e1e1e1] hover:border-secondary focus:border-secondary bg-[#fbfbfb] py-4 px-3 text-base transition-all ease-linear mt-5',
                {
                  '!border-danger': errors?.guests?.message && errors?.guests?.message.length > 0
                }
              )}
            >
              <option value={0}>Số người đi cùng bạn?</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            {errors?.guests?.message && (
              <p className="text-danger leading-[1.2] mt-2">{errors?.guests?.message}</p>
            )}

            {/* message */}
            <textarea
              {...register('message')}
              rows={5}
              placeholder="Lời chúc của bạn"
              className={clsx(
                'w-full outline-none border-solid border border-[#e1e1e1] hover:border-secondary focus:border-secondary bg-[#fbfbfb] py-4 px-3 text-base transition-all ease-linear mt-5',
                {
                  '!border-danger': errors?.message?.message && errors?.message?.message.length > 0
                }
              )}
            />
            {errors?.message?.message && (
              <p className="text-danger leading-[1.2] mt-2">{errors?.message?.message}</p>
            )}

            <div className="w-full flex items-center justify-start mt-6">
              <Button label="GỬI" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
