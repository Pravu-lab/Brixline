"use client";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    year: 2024,
    image: "/service1.png",
    text: "Launched 5 New Projects. Expanded Our Real Estate Reach.",
  },
  {
    year: 2023,
    image: "/service1.png",
    text: "Crossed 600 Units Mark. We Have Booked Projects Which Will Provide Home To 600+ Families.",
  },
  {
    year: 2022,
    image: "/service1.png",
    text: "Launched 5 New Projects. Expanded Our Real Estate Reach.",
  },
];

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-4 flex items-center justify-center shadow-md">
      <span className="text-lg font-bold">›</span>
    </div>
  </div>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-4 flex items-center justify-center shadow-md">
      <span className="text-lg font-bold">‹</span>
    </div>
  </div>
);

const AboutUsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentYear = String(slides[activeSlide].year);
  const previousYear = String(
    slides[(activeSlide - 1 + slides.length) % slides.length].year
  );

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className="flex flex-col items-center gap-1 group">
        <div className="dot-indicator w-4 h-4 border-2 rounded-full transition-colors duration-200 bg-black" />
      </div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-6">
        <ul className="flex justify-center gap-6">{dots}</ul>
      </div>
    ),
  };

  const getAnimatedYear = () => {
    return currentYear.split("").map((digit, idx) => {
      const prevDigit = previousYear[idx];
      const changed = digit !== prevDigit;

      return (
        <span key={idx} className="inline-block overflow-hidden h-12 w-8 relative">
          <AnimatePresence>
            <motion.span
              key={digit}
              initial={{ y: changed ? 40 : 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-0"
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </span>
      );
    });
  };

  return (
    <div className="w-full text-center slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              width={400}
              height={288}
              className="mx-auto object-cover rounded-xl shadow"
            />
          </div>
        ))}
      </Slider>

      <div className="flex justify-between">
        <div className="text-red-500 font-extrabold text-5xl mt-6 tracking-wider">
          {getAnimatedYear()}
        </div>

        <div className="mt-4 px-6">
          <AnimatePresence>
            <motion.p
              key={activeSlide}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gray-700 text-lg"
            >
              {slides[activeSlide].text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSlider;
