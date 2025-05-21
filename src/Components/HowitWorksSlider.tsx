"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PageFillAnimation from "./PageFillAnimation";
import React from "react"; 
import Image from "next/image";

const slidesData = [
  {
    image: "/pngs/Raise a reques.png",
    title: "Raise a request",
    content: (
      <ul>
        <li>
         Submit a home construction service request or call us at +91-8618960406.
        </li>
        <li> Our team will connect with you to understand your requirements in detail and arrange a meeting with our technical expert.
  </li>
      </ul>
    ),
  },
  {
    image: "/pngs/meet experts.png",
    title: "Meet our Expert",
    content: (
      <p>
       Our experts will help you choose the right house construction package and address any questions or concerns you may have.
 
      </p>
    ),
  },
  {
    image: "/pngs/work with us.png",
    title: "Work With Us",
    content: (
      <p>
       Ready to get started? Simply pay 5% of the estimated project cost as a booking amount to begin your journey with us.
      </p>
    ),
  },
  {
    image: "/pngs/receive details plans.png",
    title: "Receive Detailed Plans",
    content: (
      <ul>
        <li>
          Our architects deliver complete designs — floor plans, 3D elevations, electrical, plumbing, and structural layouts.
        </li>
        <li>
          A project manager is assigned, and all project details are logged for smooth execution.
        </li>
      </ul>
    ),
  },
  {
      image: "/workstart.png",
      title: "",
      content: (
        <div className="flex justify-center items-center gap-4 bg-black text-white text-[18px] py-4 px-8 leading-[120%] font-medium w-[465px]">
           <Image
              src="/svg/red-tick.svg"
              alt="red-tick"
              width={45}
              height={45}
              className="h-[43px] w-[43px]"
            />
        Amazing Construction work starts now
        </div>
      ),
      unnumbered: true
  },
  
  {
    image: "/pngs/workbegins.png",
    title: "Work begins on your site",
    content: (
      <p>
       Top-rated contractors begin work on your site, supervised by our expert team.
Sit back and relax—we ensure quality execution and on-time delivery.

      </p>
    ),
  },
  {
    image: "/pngs/settle in.png",
    title: "Settle in",
    content: (
      <p>
        The final step—move into your beautifully constructed home.<br/>
Our journey doesn’t end here; we back our work with a 20-year warranty for your peace of mind.
      </p>
    ),
  },
];

export default function HowitWorksSlider() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [glow, setGlow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.3) {
      setGlow(true);
    } else {
      setGlow(false);
    }
      // only start counting after 30% scroll, and speed it up 1.5×
      const startOffset = 0.3;
      const speedMultiplier = 1.5;
      const normalized = latest <= startOffset
        ? 0
        : (latest - startOffset) / (1 - startOffset);
      const rawCount = normalized * slidesData.length * speedMultiplier;
      const slideIndex = Math.min(
        slidesData.length,
        Math.max(1, Math.ceil(rawCount))
      );
    setCurrentSlide(slideIndex);
  });

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile;
  };

  const isMobile = useIsMobile();
  const titleX = useTransform(scrollYProgress, [0, 0.3], ["0vw", "-28vw"]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], ["0vh", "0vh"]);
  const logoX = useTransform(scrollYProgress, [0, 0.3], ["0vw", "35vw"]);
  const logoY = useTransform(scrollYProgress, [0.3, 0.35], ["125%", "0%"]);
  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5]);

  const startOffset = 0.3;
  const speedMultiplier = 1.5;
  const sliderY = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["500vh", "-500vh"]
  );
  const fillProgress = useTransform(
      scrollYProgress,
      [startOffset, 1],
      [0, 2 * speedMultiplier],
      { clamp: true }
    );
    const fillProgressSpring = useSpring(fillProgress, {
      stiffness: 50,
      damping: 20
    });
  const mobileH1 = useTransform(scrollYProgress, [0, 0.3], ["0vw", "-100vw"]);
  const mobileSlider = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    ["430vw", "-300vw"]
  );

  return (
    <div ref={ref} className="h-[250vh] w-screen relative">
      {!isMobile ? (
        <div className="sticky top-0 h-screen w-full overflow-hidden mx-auto">
          {/* Progress bar with number below */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-50">
            {/* Progress bar */}
            <div className="h-64 w-2 bg-gray-300 rounded-full overflow-hidden relative">
              <motion.div
          style={{ scaleY: fillProgressSpring }}
                className="bg-red-500 w-full h-full origin-bottom absolute bottom-0 left-0"
              />
            </div>
            {/* Slide Number */}
            <div className="mt-4 text-black text-sm font-bold rotate-[270deg]">
              {String(currentSlide).padStart(2, "0")} / {slidesData.length.toString().padStart(2, "0")}
            </div>
          </div>

          {/* Heading */}
          <motion.h1
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-[48px]/[120%] md:text-[38px]/[120%] font-black z-20 lg:w-[450px] md:w-[350px] text-left text-black"
            style={{ x: titleX, y: titleY }}
          >
          Making your dream home a reality.
          </motion.h1>

          {/* Logo */}
          <motion.div
            className="absolute top-86 right-158 transform translate-x-1/2 -translate-y-1/2 lg:w-12 md:w-9 lg:h-12 md:h-9 z-20"
            style={{ x: logoX, y: logoY, scale: logoScale }}
          >
            <div className="pulse-wrapper">
              {glow && (
                <>
                  <div className="pulse-ring"></div>
                  <div className="pulse-ring"></div>
                </>
              )}
              <img
                src="/favLogo.png"
                alt="Logo"
                className={`relative  lg:w-12 md:w-9 lg:h-12 md:h-9`}
              />
            </div>
            </motion.div>
            <motion.h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-[48px]/[120%] md:text-[38px]/[120%] font-black z-20 lg:w-[450px] md:w-[350px] text-left text-black"
              style={{ x: titleX, y: titleY }}
            >
                Making your dream home a reality.
            </motion.h1>

          {/* Slides Section */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-screen flex items-center justify-center z-10"
            style={{ y: sliderY }}
          >
            <div className="flex flex-col gap-20">
              {slidesData.map((slide, index) => (
                <div
                  className="p-6 rounded-lg lg:w-[500px] md:w-[400px] mx-auto"
                  key={index}
                >
                  {!slide.unnumbered && (
                    <img
                      src={slide.image}
                      alt="Slide 1"
                      className="w-[300px] mx-auto object-cover mb-4"
                    />
                  )}
                  <div className=" flex items-end gap-[15px]">
                    {!slide.unnumbered && (
                       <span className="text-[#F55252] text-[32px]/[120%] font-bold">{`0${
                        index + 1
                      }`}</span>
                    )}
                    <div>
                      <h3 className="mb-[12px] text-[#F55252] text-[32px]/[120%] font-[600] ">
                        {slide.title}
                      </h3>
                      <span className="text-black text-[24px]/[120%] font-black">
                        {slide.content}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <PageFillAnimation/>
        </div>
      ) : (
        <div className="sticky top-0 left-0 h-screen w-full overflow-hidden mx-auto">
          <motion.h1
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[38px]/[120%] font-black z-20 text-left text-black"
            style={{ x: mobileH1 }}
          >
            Making your dream home a reality.
            <span className="w-9 h-9 z-20">
              <img
                src="/favLogo.png"
                alt="Logo"
                className={`relative w-9 h-9`}
              />
            </span>
          </motion.h1>

          <motion.div
            className="absolute right-0 w-full h-screen flex items-center justify-center z-10"
            style={{ x: mobileSlider, 
                     paddingTop: '80px'
            }}
          >
            <div className="flex gap-10">
              {slidesData.map((slide, index) => (
                <div className="p-6 rounded-lg w-screen mx-auto" key={index}>
                    {!slide.unnumbered && (
                    <img
                      src={slide.image}
                      alt="Slide 1"
                      className="w-[150px] mx-auto object-cover mb-4"
                    />
                  )}
                  <div className={`flex items-end ${slide.unnumbered ? 'justify-center items-center' : 'gap-[15px]'}`}>
                    {!slide.unnumbered && (
                      <span className="text-[#F55252] text-[18px]/[120%] font-bold">{`0${
                        index + 1
                      }`}</span>
                    )}
                    
                    <div className={slide.unnumbered ? 'text-center justify-between w-full' : ''}>
                      <h3 className="mb-[12px] text-[#F55252] text-[18px]/[120%] font-[600]">
                        {slide.title}
                      </h3>
                      <span className="text-black text-[14px]/[120%] font-black">
                        {slide.content}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <PageFillAnimation/>
        </div>
      )}
    </div>
  );
}
