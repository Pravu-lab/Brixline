'use client';

import React from 'react';
import { Section, SubTitle, Title } from './Tag';
import Image from 'next/image';
import Slider from 'react-slick';

const OurPartners = () => {
  const settings = {
    infinite: true,
    speed: 4000, // duration of each scroll
    autoplay: true,
    autoplaySpeed: 0, // no delay between scrolls
    cssEase: "linear", // linear = smooth
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  const partnerLogos = [
    '/partner1.png',
    '/partner2.png',
    '/partner3.png',
    '/partner4.png',
    '/partner5.png',
    '/partner6.png',
  ];

  return (
    <Section className="!w-full flex flex-col items-center !px-0">
      <SubTitle className="text-center">OUR PARTNERS</SubTitle>
      <Title className="text-center text-black capitalize">
        Winning collaborations that
        <br />
        produce winning homes.
      </Title>

      <div className="w-full mt-14 px-4 sm:px-0">
        <Slider {...settings}>
          {partnerLogos.map((src, i) => (
            <div key={i} className="flex justify-center items-center">
              <Image
                src={src}
                alt={`partner-${i + 1}`}
                width={100}
                height={100}
                className="w-full h-auto max-w-[122px] mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default OurPartners;