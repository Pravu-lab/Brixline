"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Description, Section } from "./Tag";
import Image from "next/image";
import CareerSteppedBox from "./CareerSteppedBox";

export default function CareerTextAnimation() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ["start 1.2", "center 0.7"] : ["start end", "end start"],
  });

  const text =
  "We believe deep technology and amazing processes can only fix this hugely broken and massive Industry. If you are problem-solver or want to understand how we are disrupting this Industry - let's chat over a cup of coffee!"
    // "We believe deep technology and amazing processes can only fix this hugely broken and massive space. If you are problem-solver or want to understand how we are disrupting this space - let's chat over a cup of coffee !";

  

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);


  return (
    <div>
      <div className="flex justify-center">
        <img
          src="/quotation.png"
          alt="Thank you illustration"
        />
      </div>
      
      {/* Text section with bricks animation */}
      <div className="px-3 md:px-10 py-8 sm:py-12 relative w-full md:w-[90%] mx-auto m-auto">
        <div
          ref={ref}
          className="flex flex-wrap gap-x-2 p-0 md:p-8 text-xl leading-relaxed justify-center mt-12 md:mt-0"
        >
          {text.split(" ").map((word, index) => {
            // Calculate staggered animation values
            const start = index * (isMobile ? 0.007 : 0.01);
            const end = start + (isMobile ? 0.06 : 0.05);
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const y = useTransform(scrollYProgress, [start, end], [isMobile ? 5 : 30, 0]);
            
            return (
              <motion.div
                key={index}
                style={{ opacity, y }}
                className="mb-1 md:mb-2" // Add some margin between "bricks"
              >
                <motion.h1
                  className="text-black  text-[22px]  lg:text-5xl tracking-normal md:tracking-[-4px] leading-[1.2] inline-block px-1"
                  style={{
                    fontWeight: 400, 
                    fontFamily: 'Bitter, serif',
                    fontVariationSettings: '"wght" 400',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional: give bricks a background
                    borderRadius: '4px', // Optional: slight rounding
                  }}
                >
                  {word}
                </motion.h1>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Rest of your existing components */}
      <div className="bg-[url('/career22bg.png')] bg-cover h-[1050px] tracking-wide m-0 p-0">
        <div className="text-white pt-156 flex flex-col justify-center items-center px-2 md:px-40 ">
          <div className="font-bold text-red-500">
            WHY US?
          </div>
          <div className="text-xl md:text-5xl font-bold md:p-5 text-center">
            At Brixline, passion meets purpose <br/> where every idea helps shape how <br/> the world plays, watches, and lives <br/>sports.
          </div>
        </div>
      </div>

      <div className="bg-[url('/playbuild2.png')] bg-cover h-[750px] tracking-wide m-0 p-0 -mt-[2px]">
        <div className="flex justify-center pt-54">
          <img src="/dot.png" alt="dot" />
        </div>
        
          <div className="flex justify-center pt-10 text-6xl font-extrabold font-['Inter_Tight']">
            DREAM IT <br/> BUILD IT <br/> LIVE IT
          </div>

        <div className="flex justify-center pt-14">
          <img src="/dot.png" alt="dot" />
        </div>
      </div>

      <div className="bg-[url('/playbuild2.png')] bg-cover h-[1050px] tracking-wide flex flex-col pt-6 -mt-[1px]">
        <div className="flex flex-col items-center texts-center pt-10">
          <div className="font-bold text-xl md:text-4xl">Perks Of Working @Brixline </div>
          <div className="text-center pt-4">Join us as we tackle complex challenges, Build what’s never been Built before and  <br/> Transform the Broken Construction Industry.
</div>
        </div>

        <div className="flex items-center justify-center pt-28">
          <CareerSteppedBox/>
        </div>
      </div>
    </div>
  );
}