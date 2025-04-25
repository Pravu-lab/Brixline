import React from 'react';
import Image from 'next/image';
import { Button, Description, MainTitle } from './Tag';
import GetQuote from './GetQuote';

const Hero = () => {
  return (
    <section className="relative h-[100vh]">
      <div className="relative z-10 h-full flex w-[90%] sm:w-11/12 mx-auto py-8 sm:py-12 flex-col sm:flex-row justify-between">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center w-fit">
          
          {/* Desktop Content */}
          <div className="hidden sm:block">
            <MainTitle className="leading-[100%] text-left">
              You dream it,<br />we build it
            </MainTitle>
            <Description className="text-[18px] leading-[160%] mt-[11px] text-left">
              Crafting timeless spaces through innovative architecture, premium materials,<br />
              and a commitment to enduring excellence.
            </Description>
          </div>

          {/* Mobile Content */}
          <div className=" sm:hidden flex">
            <div className="flex-1">

              <MainTitle className="leading-[100%] text-left tracking-[-0.02em]">
                You dream it,<br />we build it
              </MainTitle>
              <Description className="text-xs sm:text-[18px] leading-[160%] mt-[11px] text-left">
                Crafting timeless spaces through innovative architecture, premium materials,
                and a commitment to enduring excellence.
              </Description>
            </div>
            <Image
              src="/Frame 2147225342.png"
              alt="decorative-shape"
              height={140}
              width={141}
              className="h-fit w-full max-w-[141px]"
            />
          </div>

          <Button className="bg-[#F55252] flex justify-evenly items-center w-[282px] border-[#F55252] mt-[20px]">
            <span className="text-sm text-white leading-[100%]">DOWNLOAD THE BROCHURE</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <g clipPath="url(#clip0_266_1416)">
                <path d="M24.0416 17L16.9706 24.0711L9.89951 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.9706 9.92893V24.0711" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_266_1416">
                  <rect width="24" height="24" fill="white" transform="translate(33.9411 17) rotate(135)" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>

        {/* Decorative Image for Desktop */}
        <div className="relative z-10 w-full max-w-[192px] hidden sm:flex justify-center items-end">
          <Image
            src="/Frame 2147225342.png"
            alt="decorative-shape"
            height={135}
            width={135}
            className=""
          />
        </div>

        {/* GetQuote SVG */}
       <div  className='mt-[20px] sm:mt-0'>
       <GetQuote />
        </div> 
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <Image
          src="/image 4.png"
          alt="house-image-2"
          fill
          className="object-cover object-left"
        />
      </div>
    </section>
  );
};

export default Hero;
