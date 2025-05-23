"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Description, MainTitle, Section, SubTitle } from './Tag';



export default function OurServicesSection() {
  // Initialize state for each card's visibility
  const [visibleDescriptions, setVisibleDescriptions] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  type CardKey = keyof typeof visibleDescriptions;

  const handleClick = (card: CardKey) => {
    setVisibleDescriptions(prevState => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <Section className="bg-black text-white flex flex-col gap-12 px-6 py-16 !w-full tracking-wide">
      {/* Top Content */}
      <div className='w-[85%] m-auto flex gap-10 sm:gap-28 flex-col sm:flex-row'>
        <div className="w-full">
          <h6 className="text-left text-[#F55252] text-[14px] sm:text-[16px] font-bold uppercase font-[Bitter]">OUR SERVICES</h6>
          {/* <MainTitle className="flex-col py-4 text-left text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-[0.8] mb-6">
            Flawless<br />
            construction, powered<br />
            by deep<br />
            expertise.
          </MainTitle> */}
          <MainTitle className="font-[Bitter] flex-col py-4 text-left text-white text-4xl sm:text-5xl lg:text-6xl mb-6">
  <span className="block leading-[1]">Flawless</span>
  <span className="block leading-[1]">construction, powered</span>
  <span className="block leading-[1]">by deep</span>
  <span className="block leading-[1]">expertise.</span>
</MainTitle>
        </div>

        {/* Card 1 */}
        <div className="relative rounded-lg w-full">
          <div className='relative'>
            <Image
              src="/service1.png"
              alt="Renovation & Remodeling"
              height={1000}
              width={1000}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between gap-6 items-center w-[90%] mb-4">
            <div>
              <h3 className="text-[24px] font-medium leading-[120%] text-white">
                Innovative &<br /> Modern Designs
              </h3>

              {/* Conditional rendering of Description */}
              <Description
                className={`mt-2 text-sm leading-[140%] text-white font-bold description-slide ${visibleDescriptions.card1 ? 'description-slide-visible' : ''}`}
              >
             Dedicated in-house architects crafting standout, innovative designs with speed, precision, and creative excellence.
              </Description>
            </div>
            {/* Button to toggle description visibility */}
            <button
              className={`min-w-[30px] ${visibleDescriptions.card1 ? 'hidden' : 'block'}`}
              onClick={() => handleClick('card1')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" fill="#F55252" />
                <rect x="7" y="7" width="13" height="3" fill="white" />
                <rect x="20" y="23" width="13" height="3" transform="rotate(-90 20 23)" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Cards (matching style) */}
      <div className='w-[85%] m-auto flex gap-10 sm:gap-28 flex-col sm:flex-row'>
        {/* Card 2 */}
        <div className="relative rounded-lg sm:w-[50%] h-fit">
          <div className='relative'>
            <Image
              src="/service2.png"
              alt="Turn-Key Construction"
              height={1000}
              width={1000}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[90%] mb-4">
            <div>
              <h3 className="text-[24px] font-medium text-white">Turn-Key <br />Construction</h3>
              <Description
                className={`mt-2 text-sm leading-[140%] text-white font-bold description-slide ${visibleDescriptions.card2 ? 'description-slide-visible' : ''}`}
              >
              Seamless turnkey solutions that handle every detail—so you avoid the hassle and enjoy total peace of mind

              </Description>
            </div>
            {/* Button to toggle description visibility */}
            <button
              className={`min-w-[30px] ${visibleDescriptions.card2 ? 'hidden' : 'block'}`}
              onClick={() => handleClick('card2')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" fill="#F55252" />
                <rect x="7" y="7" width="13" height="3" fill="white" />
                <rect x="20" y="23" width="13" height="3" transform="rotate(-90 20 23)" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-lg overflow-hidden group w-full md:mt-28">
          <Image
            src="/service3.png"
            alt="Commercial Constructions"
            height={1000}
            width={1000}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[90%] mb-4">
            <div>
              <h3 className="text-[24px] font-medium text-white">
                Commercial <br />Constructions
              </h3>
              <Description
                className={`mt-2 text-sm leading-[140%] text-white font-bold description-slide ${visibleDescriptions.card3 ? 'description-slide-visible' : ''}`}
              >
                Crafting efficient, aesthetically pleasing spaces for offices, retail outlets, and business hubs.
              </Description>
            </div>
            {/* Button to toggle description visibility */}
            <button
              className={`min-w-[30px] ${visibleDescriptions.card3 ? 'hidden' : 'block'}`}
              onClick={() => handleClick('card3')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" fill="#F55252" />
                <rect x="7" y="7" width="13" height="3" fill="white" />
                <rect x="20" y="23" width="13" height="3" transform="rotate(-90 20 23)" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}