"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Section, SubTitle, Title } from "./Tag";
import Image from "next/image";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [direction, setDirection] = useState<1 | -1>(1);
  const totalPositions = 5;
  const images = Array(5).fill("/png/project-image.png");
  const headings = [
    "Meet Our Expert",
    "Meet Our Expert",
    "Book With Us",
    "Receive Designs",
    "Receive Designs",
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalPositions - 1) {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
    }
  };

  const leftText = headings[currentIndex - 1];
  const midText = headings[currentIndex];
  const rightText = headings[currentIndex + 1];

  const getTranslateX = () => `-${currentIndex * 100}%`;

  return (
    <Section className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-0">
    
      <div className="mb-6 md:mb-8 text-center">
        <SubTitle className="mb-4">HOW WE WORK</SubTitle>
        <Title className="text-black">
          Seamless Home <br />
          Construction, Step By Step
        </Title>
      </div>

  
      <div className="overflow-hidden h-10 sm:h-12 mb-6">
        <motion.div
          key={currentIndex}
          initial={{ x: direction * 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-2 md:gap-4"
        >
      
          {leftText ? (
            <div className="flex-none whitespace-nowrap text-black text-[12px] md:text-[20px] text-center font-normal ">
              {leftText}
            </div>
          ) : (
            <div className="text-black text-[12px] md:text-[20px] text-center font-normal invisible">
              placeholder sample
            </div>
          )}

          <Image
            src="/svg/lefttoright.svg"
            alt="left-to-right"
            width={36}
            height={22}
            className="w-6 md:w-9 h-3 md:h-5"
          />

          {/* Mid Text */}
          <div className="flex-none whitespace-nowrap text-[#F55252] text-[16px] md:text-[24px] text-center font-semibold uppercase">
            {midText}
          </div>

          <Image
            src="/svg/righttoleft.svg"
            alt="right-to-left"
            width={36}
            height={22}
            className="w-6 md:w-9 h-3 md:h-5"
          />

          {/* Right Text or placeholder */}
          {rightText ? (
            <div className="flex-none whitespace-nowrap text-black text-[12px] md:text-[20px] text-center font-normal">
              {rightText}
            </div>
          ) : (
            <div className="text-black text-[12px] md:text-[20px] text-center font-normal invisible">
              placeholder samples
            </div>
          )}
        </motion.div>
      </div>

      {/* Image carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${getTranslateX()})` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center"
            >
              <Image
                src={image}
                alt={`project-image-${index}`}
                width={600}
                height={413}
                className="w-[280px] h-[180px] sm:w-[321px] sm:h-[219px] md:w-[600px] md:h-[413px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Info text */}
      <div className="flex justify-center items-center mt-5 md:mt-8">
        <p className="text-black text-center text-md md:text-xl px-0 md:px-0">
          Good to go! You pay 8% of the estimated
          <br className="hidden md:block" /> project cost as the booking amount
          to start the house construction
        </p>
      </div>

      {/* Call-to-action */}
      <div className="flex justify-center items-center mt-3 md:mt-11">
        <div className="border px-8 md:px-10 py-3 md:py-4 text-white bg-[#F55252]">
          LET’S BUILD NOW
        </div>
      </div>

      {/* Prev/Next buttons & dots */}
      <div className="flex flex-col items-center gap-5 mt-8">
        <div className="flex gap-5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="disabled:opacity-50"
          >
            <Image
              src="/svg/left-button.svg"
              alt="go-previous"
              width={60}
              height={60}
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === totalPositions - 1}
            className="disabled:opacity-50"
          >
            <Image
              src="/svg/right-button.svg"
              alt="go-next"
              width={60}
              height={60}
               className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
          </button>
        </div>

        <div className="flex gap-2 mt-4">
          {Array.from({ length: totalPositions }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-3 h-3 transition-colors duration-300 ${
                idx === currentIndex ? "bg-[#F55252]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Work;
