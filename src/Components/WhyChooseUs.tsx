"use client"
import React from "react";
import { Description, SubTitle, Title } from "./Tag";
import {motion} from 'framer-motion';
// import { motion } from "framer-motion/dist/es/index.mjs";


const uspPoints = [
  { 
    icon: ( // ontime delivery image
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 18V30" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 30V42" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 6V18" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 30H42" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 18H42" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 30V42" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6V18" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "Your home, delivered on time, or we pay you a penalty. No excuses.",
  },
  {
    icon: ( //fixed pricing
      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
        <path d="M24.25 44C35.2957 44 44.25 35.0457 44.25 24C44.25 12.9543 35.2957 4 24.25 4C13.2043 4 4.25 12.9543 4.25 24C4.25 35.0457 13.2043 44 24.25 44Z" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9501 15H29.9501" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9501 20H29.9501" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9501 25L26.4501 33" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9501 25H20.9501" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.9501 25C27.6171 25 27.6171 15 20.9501 15" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Fixed Pricing",
    desc: "Transparent pricing ensures you pay only what was agreed upon.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
        <path d="M31.454 25.78L34.484 42.832C34.5179 43.0328 34.4898 43.2392 34.4032 43.4235C34.3167 43.6079 34.176 43.7614 33.9999 43.8636C33.8237 43.9658 33.6206 44.0118 33.4176 43.9954C33.2146 43.9791 33.0215 43.9011 32.864 43.772L25.704 38.398C25.3583 38.1398 24.9384 38.0003 24.507 38.0003C24.0755 38.0003 23.6556 38.1398 23.31 38.398L16.138 43.77C15.9806 43.8989 15.7877 43.9767 15.585 43.9931C15.3822 44.0095 15.1793 43.9637 15.0033 43.8618C14.8273 43.7598 14.6865 43.6067 14.5998 43.4227C14.5131 43.2387 14.4846 43.0327 14.518 42.832L17.546 25.78" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.5 28C31.1274 28 36.5 22.6274 36.5 16C36.5 9.37258 31.1274 4 24.5 4C17.8726 4 12.5 9.37258 12.5 16C12.5 22.6274 17.8726 28 24.5 28Z" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Unmatched Quality",
    desc: "431+ quality checks with 3-layered audit system. ",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
        <path d="M22.75 20V28H30.75" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.75 28L25.82 24.79C26.9681 23.6866 28.3631 22.8734 29.8889 22.4179C31.4147 21.9624 33.0272 21.8778 34.5923 22.1713C36.1573 22.4647 37.6297 23.1277 38.8869 24.105C40.144 25.0823 41.1496 26.3457 41.82 27.79" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32.75 4V12" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42.7501 36L39.6801 39.21C38.532 40.3134 37.137 41.1267 35.6112 41.5822C34.0854 42.0377 32.4729 42.1222 30.9078 41.8288C29.3427 41.5353 27.8703 40.8723 26.6132 39.895C25.356 38.9177 24.3504 37.6544 23.6801 36.21" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42.75 44V36H34.75" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42.75 17V12C42.75 10.9391 42.3286 9.92172 41.5784 9.17157C40.8283 8.42143 39.8109 8 38.75 8H10.75C9.68913 8 8.67172 8.42143 7.92157 9.17157C7.17143 9.92172 6.75 10.9391 6.75 12V40C6.75 41.0609 7.17143 42.0783 7.92157 42.8284C8.67172 43.5786 9.68913 44 10.75 44H19.35" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.75 20H14.75" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.75 4V12" stroke="#F55252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Easy EMI Options",
    desc: "Start building today with easy EMI during the construction phase.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white pb-24 md:py-32 px-6 sm:px-10 text-center flex flex-col mx-auto justify-center items-center">
      <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // 'easeOutCubic' feel
      }}
      >
      <SubTitle className="">How are we different?</SubTitle>
      <Title className=" text-black leading-snug mb-4">
        Built
        
        On Trust, Delivered <br /> With
        Excellence
      </Title>
      <Description className="text-black opacity-50 mb-10">
        Your Perfect Home, Designed & Built for You. Hassle-free, On-Time,{" "}
        <br /> and Within Budget.
      </Description>
      </motion.div>
     

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-0">
        {/* {uspPoints.map((point, index) => (
          <div
            key={index}
            className={`flex flex-col items-start p-2 sm:p-6 text-left ${index !== 3 && "lg:border-r" // only add right border on first 3 cards in desktop
              } ${index % 2 === 0 && index < 2 ? "sm:border-r" : ""
              } border-r-gray-200`}
          >
            <div className="mb-4">{point.icon}</div>
            <h4 className="text-lg font-semibold text-black mb-2">
              {point.title}
            </h4>
            <p className="text-sm text-gray-500 font-semibold">{point.desc}</p>
          </div>
        ))} */}

{uspPoints.map((point, index) => (
  <motion.div
    key={index}
    className="p-2 md:p-6 flex flex-col items-center text-center space-y-4"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    // viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div>{point.icon}</div>
    <h3 className="font-semibold text-lg text-black">{point.title}</h3>
    <p className="text-sm text-gray-600">{point.desc}</p>
  </motion.div>
))}

      </div>
    </section>
  );
};

export default WhyChooseUs;