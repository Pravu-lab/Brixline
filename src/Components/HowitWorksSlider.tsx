"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HowitWorksSlider() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // changed this a bit
  });

  // Title and Logo movement — slower and stops earlier
  const titleX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-200%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], ["-50%", "-50%"]);

  const logoX = useTransform(scrollYProgress, [0, 0.3], ["50%", "1500%"]);
  const logoY = useTransform(scrollYProgress, [0, 0.3], ["-50%", "-50%"]);

  const varaiblePosition= useTransform(scrollYProgress, [0,0.4],["absolute","sticky"])
  // Slider movement (smooth)
  const sliderY = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "-100%"]);

  return (
    <div ref={ref} className="h-screen relative w-screen bg-gray-50 overflow-hidden">
      {/* Title */}
      {/* <div className="h-screen w-screen snap-start relative"> */}
      <motion.h1
        className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold z-20 w-1/5 text-left text-black"
        style={{ x: titleX, y: titleY , position:varaiblePosition}}
      >
        We make your dream home possible.
      </motion.h1>

      {/* Logo */}
      <motion.img
        src="/image.png"
        alt="Logo"
        className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-20"
        style={{ x: logoX, y: logoY , position:varaiblePosition}}
      />

      {/* </div> */}

      {/* Slider Section */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10 overflow-hidden"
        style={{ y: sliderY }}
      >
        <div className="flex flex-col gap-10">
          {/* Slides */}
          <div className="bg-white p-6 shadow-lg rounded-lg w-80 text-center">
            <img src="/service1.png" alt="Slide 1" className="w-full h-48 object-cover mb-4" />
            <p>Slide 1 text</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-80 text-center">
            <img src="/service3.png" alt="Slide 2" className="w-full h-48 object-cover mb-4" />
            <p>Slide 2 text</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-80 text-center">
            <img src="/service1.png" alt="Slide 1" className="w-full h-48 object-cover mb-4" />
            <p>Slide 1 text</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-80 text-center">
            <img src="/service3.png" alt="Slide 2" className="w-full h-48 object-cover mb-4" />
            <p>Slide 2 text</p>
          </div>
          {/* Add more slides if needed */}
        </div>
      </motion.div>
    </div>
  );
}
