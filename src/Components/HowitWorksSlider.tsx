"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PageFillAnimation from "./PageFillAnimation";
import React from "react"; 

const slidesData = [
  {
    image: "/Raise1.png",
    title: "Raise a request",
    content: (
      <ul>
        <li>
          Raise a house construction service request or call us at +91 7505 205
          205. Our team will get in touch with you to understand your
          requirements in more detail
        </li>
        <li>They will arrange the meeting with our technical expert.</li>
      </ul>
    ),
  },
  {
    image: "/Raise2.png",
    title: "Meet our Expert",
    content: (
      <p>
        Experts will guide you in selecting the right package for house
        construction and solve any queries that you may have.
      </p>
    ),
  },
  {
    image: "/Raise3.png",
    title: "Book with Us",
    content: (
      <p>
        Good to go ! You pay 8% of the estimated project cost as the booking
        amount
      </p>
    ),
  },
  {
    image: "/Raise4.png",
    title: "Receive Detailed Plans",
    content: (
      <ul>
        <li>
          Our architects will provide exhaustive drawings and designs till you
          are completely satisfied.
        </li>
        <li>
          House construction Designs include floor plans, 3D elevations,
          electrical, plumbing and structural designs.
        </li>
        <li>
          Project manager is allotted and project management team works on your
          contract.
        </li>
        <li>
          All project details like specifications, work and payment schedules
          etc are fed into the system.
        </li>
      </ul>
    ),
  },
  {
      image: "/workstart.png",
      title: "",
      content: (
        <div>
    
        </div>
      ),
      unnumbered: true
  },
  
  {
    image: "/lap.png",
    title: "Track & Transact",
    content: (
      <p>
        To ensure absolute trust, Brixline provides an escrow model where you transfer the amount for every stage of the project. 
Only on successful completion of a stage, amount is transferred to the contractor. 
Our project management team tracks and monitors your project through our system and processes - through regular site visits. 
You get the project updates through our customer application.
      </p>
    ),
  },
  {
    image: "/Raise6.png",
    title: "Settle in",
    content: (
      <p>
        The last and final stage. We make sure you are well settled in your newly constructed home. Our journey together doesn't end here. We provide 10 years of warranty.
      </p>
    ),
  },
  {
    image: "/workend.png",
    title: "",
    content: (
      <div>
  
      </div>
    ),
    unnumbered: true
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
    const slideIndex = Math.min(
      slidesData.length,
      Math.max(1, Math.ceil(latest * slidesData.length))
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

  const sliderY = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["500vh", "-500vh"]
  );
  const slideProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0,1]
  );
  const mobileH1 = useTransform(scrollYProgress, [0, 0.3], ["0vw", "-100vw"]);
  const mobileSlider = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    ["430vw", "-300vw"]
  );

  return (
    <div ref={ref} className="h-[400vh] w-screen relative">
      {!isMobile ? (
        <div className="sticky top-0 h-screen w-full overflow-hidden mx-auto">
          {/* Progress bar with number below */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-50">
            {/* Progress bar */}
            <div className="h-64 w-2 bg-gray-300 rounded-full overflow-hidden relative">
              <motion.div
                style={{ scaleY: slideProgress }}
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
            We make your dream home possible.
          </motion.h1>

          {/* Logo */}
          <motion.div
            className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 lg:w-12 md:w-9 lg:h-12 md:h-9 z-20"
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
              We make your dream home possible.
            </motion.h1>

          {/* Slides Section */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-screen flex items-center justify-center z-10"
            style={{ y: sliderY }}
          >
            <div className="flex flex-col gap-10">
              {slidesData.map((slide, index) => (
                <div
                  className="p-6 rounded-lg lg:w-[500px] md:w-[400px] mx-auto"
                  key={index}
                >
                  <img
                    src={slide.image}
                    alt="Slide 1"
                    className="w-[300px] mx-auto object-cover mb-4"
                  />
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
            We make your dream home possible.
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
                  <img
                    src={slide.image}
                    alt="Slide 1"
                    className="w-[150px] mx-auto object-cover mb-4"
                  />
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
