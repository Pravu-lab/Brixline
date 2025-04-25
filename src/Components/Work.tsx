"use client";
import { useState } from "react";
import { Button, Section, SubTitle, Title } from "./Tag";
import Image from "next/image";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const totalPositions = 5;
  const center = Math.floor(totalPositions / 2); 
  const step = 25;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPositions - 1));
  };

  const getTranslateX = () => {
    return `${(currentIndex - center) * step}%`;
  };

  return (
    <Section className="w-4/5 m-auto py-16">
      <div className="mb-8 text-center">
        <SubTitle className="mb-4">HOW WE WORK</SubTitle>
        <Title className="text-black">
          Seamless Home <br />
          Construction, Step By Step
        </Title>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/svg/bookwithus.svg"
          alt="bookwithus"
          width={634}
          height={34}
          className="hidden md:block h-9 w-[634px]"
        />
        <Image
          src="/svg/bookwithus-mobile.svg"
          alt="bookwithus-mobile"
          width={634}
          height={34}
          className="block md:hidden h-9 w-[634px]"
        />
      </div>
      <div className="mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${getTranslateX()})` }}
        >
          <div className="min-w-full flex justify-center">
            <Image
              src="/png/project-image.png"
              alt="project-image"
              width={600}
              height={413}
              className="w-[321px] h-[219px] md:w-[600px] md:h-[413px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5 md:mt-8">
        <p className="text-black text-center text-md md:text-xl px-10 md:px-0">
          Good to go! You pay 8% of the estimated{" "}
          <br className="hidden md:block" /> project cost as the booking amount
          to start the house construction
        </p>
      </div>

      <div className="flex justify-center items-center mt-7 md:mt-11">
        <Button className="text-white bg-[#F55252] w-[320px]">
          LET’S BUILD NOW
        </Button>
      </div>
      <div className="flex flex-col items-center gap-5 mt-8">
        <div className="flex gap-5">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <Image
              src="/svg/left-button.svg"
              alt="go-previous"
              width={60}
              height={60}
              className="w-13 h-13"
            />
          </button>
          <button onClick={handleNext} disabled={currentIndex === totalPositions - 1}>
            <Image
              src="/svg/right-button.svg"
              alt="go-next"
              width={60}
              height={60}
              className="w-13 h-13"
            />
          </button>
        </div>

        <div className="flex gap-2 mt-4">
          {Array.from({ length: totalPositions }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 transition-colors ${
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
