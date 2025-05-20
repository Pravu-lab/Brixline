"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Section, SubTitle, Title } from "./Tag";
import Image from "next/image";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const totalPositions = 6;
  const images = [
    "/pngs/Raise a reques.png",
    "/pngs/meet experts.png",
    "/pngs/workwithus2.png",
    "/pngs/receive details plans.png",
    "/pngs/workbegins.png",
    "/pngs/settle in.png",
  ];

  const headings = [
    "Raise A Request",
    "Meet Our Expert",
    "Work With Us",
    "Receive Detailed Plans",
    "Work Begins",
    "Settle-In",
  ];

  const infoTexts = [
    "Submit a Home construction service request.",
    "Schedule a meeting with our technical expert to learn more about our offerings.",
    "Receive a clear, no-hidden-cost quotation with price protection.",
    "Begin your dream home journey with a 5% booking of the estimated project cost.",
    "Our in-house architects create innovative designs, refined until you're fully satisfied.",
    "Settle into your dream home with a 20-year structural warranty"
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
    <Section className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-0">
    
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
             <div
              onClick={() => currentIndex > 0 && handlePrev()}
              className="flex-none whitespace-nowrap relative max-w-[120px] md:max-w-[200px] overflow-hidden cursor-pointer">
              <div className="text-black text-[12px] md:text-[20px] text-center font-normal">
                {leftText}
              </div>
              <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-white to-transparent" />
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
            className="w-4 md:w-9 h-2 md:h-5"
          />

          <div className="flex-none whitespace-nowrap text-[#F55252] text-[16px] md:text-[24px] text-center font-semibold uppercase">
            {midText}
          </div>

          <Image
            src="/svg/righttoleft.svg"
            alt="right-to-left"
            width={36}
            height={22}
            className="w-4 md:w-9 h-2 md:h-5"
          />

           {rightText ? (
             <div
             onClick={() => currentIndex < totalPositions - 1 && handleNext()}
             className="flex-none whitespace-nowrap relative max-w-[120px] md:max-w-[200px] overflow-hidden cursor-pointer">
              <div className="text-black text-[12px] md:text-[20px] text-center font-normal">
                 {rightText}
              </div>
             <div className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-white to-transparent" />
             </div>
              ) : (
                <div className="text-black text-[12px] md:text-[20px] text-center font-normal invisible">
                  placeholder sample
                </div>
              )}
        </motion.div>
      </div>

      {/* Image carousel with relative positioning for desktop buttons */}
      <div className="relative">
        {/* Desktop-only navigation buttons */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="disabled:opacity-50 group"
          >
          <svg 
          className="group-hover:hidden"
  width="40" 
  height="40" 
  viewBox="0 0 60 60" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="60" height="60" rx="3" transform="matrix(-1 0 0 1 60 0)" fill="#FEEEEE"/>
  <path d="M23.2217 26.2549L26.9746 30.0078L23.2217 33.7607L33.2422 43.7812L37 40.0234L26.9844 30.0078L37 19.9922L33.2422 16.2344L23.2217 26.2549Z" fill="#F55252"/>
</svg>

            <svg 
            className="hidden group-hover:block"
  width="40" 
  height="40" 
  viewBox="0 0 60 60" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="60" height="60" rx="3" transform="matrix(-1 0 0 1 60 0)" fill="#F55252"/>
  <path d="M23.2217 26.2549L26.9746 30.0078L23.2217 33.7607L33.2422 43.7812L37 40.0234L26.9844 30.0078L37 19.9922L33.2422 16.2344L23.2217 26.2549Z" fill="white"/>
</svg>
          </button>
       </div>

        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10">
          <button
            onClick={handleNext}
            disabled={currentIndex === totalPositions - 1}
            className="disabled:opacity-50 group"
          >
          <svg
          className="group-hover:hidden"
          width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" rx="3" fill="#FEEEEE"/>
  <path d="M36.7783 26.2549L33.0254 30.0078L36.7783 33.7607L26.7578 43.7812L23 40.0234L33.0156 30.0078L23 19.9922L26.7578 16.2344L36.7783 26.2549Z" fill="#F55252"/>
</svg>

<svg
className="hidden group-hover:block"
width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="60" rx="3" fill="#F55252"/>
  <path d="M36.7783 26.2549L33.0254 30.0078L36.7783 33.7607L26.7578 43.7812L23 40.0234L33.0156 30.0078L23 19.9922L26.7578 16.2344L36.7783 26.2549Z" fill="white"/>
</svg>
          </button>
        </div>

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
                  className="w-[280px] h-[180px] sm:w-[321px] sm:h-[219px] md:w-[700px] md:h-[480px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Info text */}
      <div className="overflow-hidden h-[80px] md:h-[100px] flex items-center mt-3 md:-mt-4">
        <motion.div
          key={currentIndex}
          initial={{ x: direction * 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <p className="text-black text-center text-md md:text-xl px-0 md:px-0">
            {infoTexts[currentIndex]}
          </p>
        </motion.div>
      </div>

{/* dots */}
{/* <div className="flex gap-3 mt-2 md:-mt-5 mb-6 md:mb-8 justify-center">
          {Array.from({ length: totalPositions }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 transition-colors duration-300 ${
                idx === currentIndex ? "bg-[#F55252]" : "bg-gray-300"
              }`}
            />
          ))}
       </div> */}
      



      {/* Call-to-action */}
      <div className="flex justify-center items-center mt-3 md:-mt-2 -mb-4">
        <div className="border px-8 md:px-10 py-3 md:py-4 text-white bg-[#F55252]">
          LET'S BUILD NOW
        </div>
      </div>

      {/* Mobile navigation buttons & dots */}
      <div className="flex flex-col items-center gap-5 mt-8 md:mt-4">
        {/* Mobile buttons (hidden on desktop) */}
        <div className="flex gap-5 md:hidden">
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

       
      </div>
    </Section>
  );
};

export default Work;