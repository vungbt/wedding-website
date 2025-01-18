import React from 'react';
import { Button, ButtonLink } from '../common';
import { RenderIcon } from '../icons';
import { LabelBlock } from '../common/label-block';

export function Location() {
  return (
    <section
      id="location"
      className="location py-20"
      data-aos="fade-up" // Animation for the section
      data-aos-duration="1000" // Duration of the animation
    >
      <div
        className="container flex items-center justify-center flex-col mb-16"
        data-aos="fade-down" // Animation for the label and line
        data-aos-duration="1000"
      >
        <LabelBlock
          label="Địa chỉ"
          subLabel="Location"
          classLabel="text-[30px]"
          classSubLabel="text-[46px] top-[-28px]"
        />
        <RenderIcon name="line" className="!w-[189px] !h-6 text-secondary mt-4" />
      </div>

      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        {/* map info */}
        <div className="map-info-container">
          {/* map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871.4118110921531!2d106.44602619837609!3d20.26614840403858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313601c9273233fb%3A0xd93ca7f687404104!2zQW5oIMSQw6BvIEJlYXV0eSAmIFNwYQ!5e0!3m2!1sen!2s!4v1737219250476!5m2!1sen!2s"
            width="600"
            height="450"
            className="w-full h-auto col-span-12"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            data-aos="zoom-in" // Animation for the map iframe
            data-aos-duration="1000"
          ></iframe>

          {/* info */}
          <div className="info-wrapper" data-aos="fade-up" data-aos-duration="1000">
            <div className="location-info">
              <div className="neela-style text-black">
                <span className="h-lines"></span>
                <span className="v-lines"></span>

                <div className="flex items-start justify-center gap-4">
                  <RenderIcon name="church" className="!w-[66px] !h-[82px] text-gray-100" />
                  <div className="mt-4 text-[18pt] text-black font-secondary font-bold leading-[1.2]">
                    <p>Night Party</p>
                    <p className="text-[16pt] font-normal w-fit">17:30 pm</p>
                  </div>
                </div>
                <h5 className="text-[13pt] mt-2">Sweet Party</h5>
                <p className="italic font-light">Giao Hà, Giao Thủy, Nam Định</p>
                <p className="italic font-light">
                  <a href="tel:0383007243">038.300.7243</a> -{' '}
                  <a href="tel:0334681389">033.468.1389</a>
                </p>

                <div className="flex items-center justify-center w-full my-7">
                  <RenderIcon
                    name="line"
                    className="!w-[146px] !h-[19px] text-gray-100"
                    strokeWidth={2}
                  />
                </div>

                <div className="flex items-start justify-center gap-4">
                  <RenderIcon name="cheers" className="!w-[66px] !h-[82px] text-gray-100" />
                  <div className="mt-4 text-[18pt] text-black font-secondary font-bold leading-[1.2]">
                    <p>Save Our Date</p>
                    <p className="text-[16pt] font-normal w-fit">10:30 am</p>
                  </div>
                </div>
                <h5 className="text-[13pt] mt-2">Save Our Date</h5>
                <p className="italic font-light">Giao Hà, Giao Thủy, Nam Định</p>
                <p className="italic font-light">
                  <a href="tel:0383007243">038.300.7243</a> -{' '}
                  <a href="tel:0334681389">033.468.1389</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <div
          className="flex items-center justify-center relative z-[1] "
          data-aos="fade-up" // Animation for the button
          data-aos-duration="1000"
        >
          <ButtonLink href="#rsvp" label="RSVP" />
        </div>
      </div>
    </section>
  );
}
