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
    <Section className="w-full md:w-[90%] mx-auto m-auto md:px-[5%]">
      {/* <div className="flex md:p-8 gap-4 justify-between items-center p-6"> */}
      <div className="flex flex-col md:flex-row items-center justify-center py-4 gap-4 ">
        <h2 className="my-0 clamp-description font-medium text-lg leading-[160%] text-black w-full md:w-1/2 md:p-4 py-48 md:py-10 md:mx-auto mx-auto">
          It all started with an idea, that changed the way we look at
          construction <br /> today. We started with the aim of making the construction
          simple, <br /> transparent and reliable
        </h2>
        <Image
          src="/aboutLogo.png"
          alt="house-image-2"
          width={700}
          height={700}
          className="max-w-[160px] w-full h-fit mx-auto my-auto"
        />
      </div>
      <div
        ref={ref}
        className="flex flex-wrap gap-x-2 p-8 text-xl leading-relaxed justify-center"
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
                className="text-black text-[32px] md:text-7xl tracking-[-4px] leading-[1.2]"
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
    </Section>
  );
}
