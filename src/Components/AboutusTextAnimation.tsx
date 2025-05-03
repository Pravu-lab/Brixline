"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Description, Section } from "./Tag";
import Image from "next/image";

export default function ScrollingTextReveal() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const text =
    "Most customer centric company making Construction absolutely simple, transparent and reliable for everyone";

  return (
    <div className="px-3 md:px-10 py-8 sm:py-12 relative w-full md:w-[90%] mx-auto m-auto">
      {/* <div className="flex md:p-8 gap-4 justify-between items-center p-6"> */}
      <div className="flex md:flex-row items-center justify-center py-0 md:py-4 gap-4">
        <h2 className="my-0 font-semibold text-xs md:text-lg leading-[160%] text-black w-full md:w-1/2 md:p-4 py-2 md:py-10 md:mx-auto mx-auto">
          It all started with an idea, that changed the way we look at
          construction <br className="hidden md:block"/> today. We started with the aim of making the construction
          simple, <br className="hidden md:block"/> transparent and reliable
        </h2>
        <Image
          src="/aboutLogo.png"
          alt="house-image-2"
          width={700}
          height={700}
          className="w-[110px] md:max-w-[160px] md:w-full h-fit mx-auto my-auto"
        />
      </div>
      <div
        ref={ref}
        className="flex flex-wrap gap-x-2 p-0 md:p-8 text-xl leading-relaxed justify-center mt-12 md:mt-0"
      >
        {text.split(" ").map((word, wordIndex) => (
          <div key={wordIndex} className="whitespace-nowrap flex">
            {word.split("").map((char, charIndex) => {
              const index = wordIndex * 9 + charIndex; // unique stagger index
              const start = index * 0.005;
              const end = start + 0.02;
              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.3, 1]
              );

              return (
                <motion.h1
                className="text-black text-[32px] md:text-7xl tracking-normal md:tracking-[-4px] leading-[1.2]"
                key={index}
                style={{
                  opacity,
                  fontWeight: 400, 
                  fontFamily: 'Bitter, serif',
                  fontVariationSettings: '"wght" 400'
                }}
              >
                {char}
              </motion.h1>
              );
            })}
            <span>&nbsp;</span> {/* Add space after each word */}
          </div>
        ))}
      </div>
    </div>
  );
}
