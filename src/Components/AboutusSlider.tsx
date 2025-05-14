"use client";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageFillAnimation from "./PageFillAnimation";

const slides = [
  {
    year: 2022,
    image: "/service1.png",
    title: "Laying the Foundation",
    text: "Started with a clear vision to bring quality and structure to commercial construction.",
  },
  {
    year: 2022,
    image: "/service2.png",
    title: "First Milestone Achieved.",
    text: "Secured our first commercial project—marking the beginning of our journey.",
  },
  {
    year: 2023,
    image: "/service1.png",
    title: "Gaining Momentum",
    text: "Successfully closed 20 commercial projects, building strong client trust and credibility.",
  },
  {
    year: 2024,
    image: "/service1.png",
    title: " Major Milestone",
    text: "Celebrated the delivery of our 50th commercial project, reinforcing our commitment to excellence.",
  },
  {
    year: 2024,
    image: "/service2.png",
    title: "New Opportunities Emerge",
    text: "Began receiving inquiries for residential construction, uncovering key challenges faced by homeowners.",
  },
  {
    year: 2025,
    image: "/service1.png",
    title: "Expanding Our Vision",
    text: "Ventured into residential construction to simplify the building experience for people in Bengaluru—bringing reliability, transparency, and customer-first service.",
  },
];

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <Image
      src="/svg/right-button.svg"
      alt="go-next"
      width={60}
      height={60}
      className="w-13 h-13"
    />
  </div>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <Image
      src="/svg/left-button.svg"
      alt="go-previous"
      width={60}
      height={60}
      className="w-13 h-13"
    />
  </div>
);

const AboutUsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentYear = String(slides[activeSlide].year);
  const previousYear = String(
    slides[(activeSlide - 1 + slides.length) % slides.length].year
  );

  const settings = {
    centerMode: true,
    className: "center",
    dots: false,
    arrows: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        // },
        // breakpoint: 600,
        // settings: {
        //   slidesToShow: 2,
        //   slidesToScroll: 2,
        //   initialSlide: 2,
        //   arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          }
      }
    ]
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
  const getAnimatedText =()=>{
    return(
    <span className="block w-full relative text-center mx-auto h-[100px] overflow-hidden">
      <AnimatePresence>
            <motion.div
              key={activeSlide}
              initial={{ x: 100, y:0, opacity: 0 }}
              animate={{ x: 0, y:0, opacity: 1 }}
              exit={{ x: -100, y:0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gray-950 font-medium text-lg w-full h-[100px]"
            >

<p className="text-[#F55252] font-bold">{slides[activeSlide].title}</p>

{slides[activeSlide].text}

</motion.div>

</AnimatePresence>

</span>)

}



return (

<>

<div className=" slider-container p-10 relative">

<Slider {...settings}>

{slides.map((slide, index) => (

<div key={index} className="relative">

<Image

  src={slide.image}

  alt={`Slide ${index}`}

  width={400}

  height={288}

  className="mx-auto object-cover shadow"

/>

<div className="overlay-image"></div>

</div>

))}

</Slider>



<div className="flex flex-col md:flex-row justify-between items-center my-5 relative h-full gap-2">

<div className="text-[#ef4444] font-extrabold text-5xl tracking-wider">

{getAnimatedYear()}

</div>



<div className=" px-6 w-full md:w-1/2 h-full order-1 md:order-0">

{getAnimatedText()}

</div>

<div className="custom-dots">

<ul className="flex gap-2 justify-end items-baseline">

{slides.map((_, index) => (

<li

  key={index}

>

  <div className={`dot-indicator w-2 h-2 ${activeSlide === index ? "bg-[#ef4444] h-4 mb-0.5" : "bg-black"}`}></div>

</li>

))}

</ul>

</div>

</div>

<PageFillAnimation />

</div>

</>

);

};



export default AboutUsSlider;

