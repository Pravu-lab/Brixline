'use client'
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

    const text = "Most customer centric company making Construction absolutely simple, transparent and reliable for everyone";

    return (
        <Section className="w-full md:w-[90%] m-auto md:px-[5%]">
            <div className="flex md:p-8 gap-4 justify-between items-center">
                <Description className="text-black max-w-[581px]">
                It all started with an idea, that changed the way we look at construction today. We started with the aim of making the construction simple, transparent and reliable 
                </Description>
                <Image
                    src="/aboutLogo.png"
                    alt="house-image-2"
                    width={500}
                    height={500}
                    className="max-w-[122px] w-full h-fit"
                />
            </div>
            <div ref={ref} className="flex flex-wrap gap-x-2 p-8 text-xl font-bold leading-relaxed justify-center">
                {text.split(" ").map((word, wordIndex) => (
                    <div key={wordIndex} className="whitespace-nowrap flex">
                        {word.split("").map((char, charIndex) => {
                            const index = wordIndex * 10 + charIndex; // unique stagger index
                            const start = index * 0.01;
                            const end = start + 0.01;
                            const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

                            return (
                                <motion.h1 className="text-black text-[32px] md:text-[72px]/[120%] font-normal tracking-[-4px]" key={index} style={{ opacity }}>
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
