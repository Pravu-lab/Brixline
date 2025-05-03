"use client";
import { useRef, useState } from "react";
// import { Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GetQuote from "./GetQuote";
import { Button, Description, MainTitle } from "./Tag";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("BENGALURU");

  const cities = ["BENGALURU", "CHENNAI", "HYDERABAD"];

  const toggleCity = (city: string) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  const ref = useRef(null);
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
      });
    
      const stripeScale = useTransform(scrollYProgress, [0,1], [0,1]);

      
  return (
    <div className="tracking-wide min-h-screen h-[1050px] md:h-full w-full bg-[url('/image%204.png')] bg-cover bg-center relative">
      <div ref={ref} className="absolute top-0 left-0 h-full overflow-hidden z-[9999] flex w-full pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              scaleX: stripeScale,
              originX: 0,
              pointerEvents: "none",
            }}
            className=" hidden md:flex flex-1 bg-white h-full w-0"
          />
        ))}
      </div>

      <header
            className={`bg-black md:bg-transparent p-8 relative ${mobileOpen ? 'h-[100dvh] mobileHeader' : 'h-auto bg-transparent'
              } sm:h-auto transition-all duration-300  z-[999] w-full `}
          >
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              {/* Logo + City */}
              <div className="flex flex-col sm:flex-row md:items-baseline sm:items-start gap-4">
                <h1 className="text-2xl font-bold tracking-tight flex items-center">
                  {/* Logo SVG */}
                  <Link href="/">
                    <Image
                    width={400}
                    height={400}
                    src="/brixlinewhite.png"
                    className="object-cover w-[142px]"
                    alt="decorative-shape"
                    />
                  </Link>
                </h1>
    
                {/* City Dropdown */}
                <div className="">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 px-4 py-1 bg-[rgba(245,82,82,0.1)] text-red-600 text-xs font-semibold rounded"
                  >
                    {selectedCity}
                    {dropdownOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                        <rect width="12" height="10" transform="matrix(-1 0 0 1 12 0.5)" fill="#F55252" />
                        <rect width="5.2" height="1.2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10.5254 7.7)" fill="white" />
                        <rect width="5.2" height="1.2" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.323 8.54853)" fill="white" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                        <rect width="12" height="10" transform="matrix(-1 0 0 1 12 0.5)" fill="#F55252" />
                        <rect width="5.2" height="1.2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.7 4.5)" fill="white" />
                        <rect width="5.2" height="1.2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.5 4.5)" fill="white" />
                      </svg>
                    )}
                  </button>
    
                  {dropdownOpen && (
                    <div className="absolute mt-1 bg-[rgba(245,82,82,0.10)] backdrop-blur-2xl shadow-md w-42 min-w-40 text-right z-[10001]">
                      {cities
                      .filter(city => city != selectedCity)
                      .map((city) => (
                        <div
                          key={city}
                          onClick={() => toggleCity(city)}
                          className={`px-3 py-2 text-xs cursor-pointer border-b-1 border-b-[rgba(255,255,255,.2)] text-right flex align-middle gap-2.5 justify-end ${selectedCity === city ? 'font-bold text-white' : 'text-white'
                            } hover:bg-gray-100 hover:text-black`}
                        >
    
                          {city !== "BENGALURU" && (
                            <div className="bg-[#F55252] text-white p-1 flex align-middle justify-center">
                              <span className="text-white text-[6px]">COMING SOON</span>
                            </div>
                          )}
                          {city}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
    
              {/* Desktop Navigation */}
              
              <nav className="hidden md:flex gap-6 items-center text-sm font-semibold text-black uppercase">
                <Link href="/" className="flex items-center gap-1 text-red-500">
                  <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                  HOME
                </Link>
                <Link className="text-white" href="/about">ABOUT US</Link>
                <Link className="text-white" href="/how-it-works">HOW IT WORKS</Link>
                <Link className="text-white" href="/cost-estimator">COST ESTIMATOR</Link>
                <Link className="text-white" href="/contact-us">CONTACT US</Link>
                {/* <span className="flex items-center gap-1 text-black">
                            <Zap className="w-4 h-4 text-red-500" />
                            ZERO COST EMI
                        </span> */}
              </nav>
    
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button onClick={() => setMobileOpen(!mobileOpen)}>
                  {mobileOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" viewBox="0 0 45 38" fill="none">
                      <path d="M44.2734 37.4619H0V9.44824L10.5137 0.632812H44.2734V37.4619Z" fill="#F55252" />
                      <path d="M30.3672 12.7539L16.2246 26.8965L14.1035 24.7754L28.2461 10.6328L30.3672 12.7539Z" fill="white" />
                      <path d="M30.4707 24.5264L28.3867 26.6846L14 12.791L16.084 10.6328L30.4707 24.5264Z" fill="white" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" viewBox="0 0 45 38" fill="none">
                      <path d="M44.2735 37.1965H0V9.1827L10.5133 0.367188H44.2735V37.1965Z" fill="#F55252" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 12H33V15H13V12ZM13 18H33V21H13V18ZM33 24H13V27H33V24Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </button>
              </div>
    
            </div>
    
            {/* Mobile Nav Menu */}
            {mobileOpen && (
              <div className="md:hidden p-4 text-lg font-semibold text-white uppercase space-y-4 py-20">
                <div className="flex items-center justify-between gap-1 text-red-500">
                  HOME
                  <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                </div>
                <Link href="/about" className=" block">ABOUT US</Link>
                <Link href="/how-it-works" className=" block">HOW IT WORKS</Link>
                <Link href="/cost-estimator" className=" block">COST ESTIMATOR</Link>
                <Link href="/contact-us" className=" block">CONTACT US</Link>
                {/* <span className="flex items-center gap-1 ">
                  <Zap className="w-4 h-4 text-red-500 block" />
                  <span className="text-black">
                                ZERO COST EMI
                            </span>
                </span> */}
                <div className='flex justify-between flex-col pt-10 gap-[18px]'>
                <h4 className="text-[10px]/[140%] text-white opacity-60 font-semibold sm:mb-3 py-3">FOLLOW US</h4>
                <div className="flex space-x-4 text-xl">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M22 4.82815C22 4.82815 21.3 6.92815 20 8.22815C21.6 18.2281 10.6 25.5281 2 19.8281C4.2 19.9281 6.4 19.2281 8 17.8281C3 16.3281 0.5 10.4281 3 5.82815C5.2 8.42815 8.6 9.92815 12 9.82815C11.1 5.62815 16 3.22815 19 6.02815C20.1 6.02815 22 4.82815 22 4.82815Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M16 8.82812C17.5913 8.82812 19.1174 9.46027 20.2426 10.5855C21.3679 11.7107 22 13.2368 22 14.8281V21.8281H18V14.8281C18 14.2977 17.7893 13.789 17.4142 13.4139C17.0391 13.0388 16.5304 12.8281 16 12.8281C15.4696 12.8281 14.9609 13.0388 14.5858 13.4139C14.2107 13.789 14 14.2977 14 14.8281V21.8281H10V14.8281C10 13.2368 10.6321 11.7107 11.7574 10.5855C12.8826 9.46027 14.4087 8.82812 16 8.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 9.82812H2V21.8281H6V9.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 6.82812C5.10457 6.82812 6 5.93269 6 4.82812C6 3.72356 5.10457 2.82812 4 2.82812C2.89543 2.82812 2 3.72356 2 4.82812C2 5.93269 2.89543 6.82812 4 6.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M18 2.82812H15C13.6739 2.82813 12.4021 3.35491 11.4645 4.29259C10.5268 5.23027 10 6.50204 10 7.82812V10.8281H7V14.8281H10V22.8281H14V14.8281H17L18 10.8281H14V7.82812C14 7.56291 14.1054 7.30855 14.2929 7.12102C14.4804 6.93348 14.7348 6.82812 15 6.82812H18V2.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M17 2.82812H7C4.23858 2.82812 2 5.0667 2 7.82812V17.8281C2 20.5895 4.23858 22.8281 7 22.8281H17C19.7614 22.8281 22 20.5895 22 17.8281V7.82812C22 5.0667 19.7614 2.82812 17 2.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.9997 12.1984C16.1231 13.0307 15.981 13.8806 15.5935 14.6274C15.206 15.3742 14.5929 15.9798 13.8413 16.3581C13.0898 16.7364 12.2382 16.868 11.4075 16.7344C10.5768 16.6007 9.80947 16.2085 9.21455 15.6136C8.61962 15.0187 8.22744 14.2513 8.09377 13.4206C7.96011 12.59 8.09177 11.7383 8.47003 10.9868C8.84829 10.2353 9.45389 9.62217 10.2007 9.23467C10.9475 8.84717 11.7975 8.70501 12.6297 8.82843C13.4786 8.95431 14.2646 9.34989 14.8714 9.95673C15.4782 10.5636 15.8738 11.3495 15.9997 12.1984Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.5 7.32812H17.51" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-auto"> <Image
                                   src="/mobileimage.png"
                                   alt="decorative-shape"
                                   height={500}
                                   width={500}
                                   className="object-cover w-full  z-10 block sm:hidden"
                                 />
                                 </div>
            
              </div>
            )}
          </header>

      <section className="relative z-10 h-full max-w-screen-7xl mx-auto w-full flex flex-col lg:flex-row lg:justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 lg:pt-10">
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-fit">
          {/* Desktop Content */}
          <div className="hidden sm:block">
            <MainTitle className="leading-[100%] text-left text-white">
              You dream it,
              <br/>
              we build it
            </MainTitle>
            <Description className="text-[18px] leading-[160%] mt-[11px] text-left text-white">
              Crafting timeless spaces through innovative architecture, premium
              materials,
              <br />
              and a commitment to enduring excellence.
            </Description>
          </div>

          {/* Mobile Content */}
          <div className=" sm:hidden flex">
            <div className="flex-1">
              <MainTitle className="leading-[100%] text-left tracking-[-0.02em] text-white">
                You dream it,
                <br  className="hidden md:block"/>{" "}
                we build it
              </MainTitle>
              <Description className="text-xs sm:text-[18px] leading-[160%] mt-[11px] text-left text-white">
                Crafting timeless spaces through innovative architecture,
                premium materials, and a commitment to enduring excellence.
              </Description>
            </div>
            <Image
              src="/Frame 2147225342.png"
              alt="decorative-shape"
              height={140}
              width={141}
              className="h-fit w-full max-w-[141px]"
            />
          </div>

          <Button className="bg-[#F55252] flex justify-evenly items-center w-[282px] border-[#F55252] mt-[50px]">
            <span className="text-sm text-white leading-[100%] font-bold">
              DOWNLOAD THE BROCHURE
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <g clipPath="url(#clip0_266_1416)">
                <path
                  d="M24.0416 17L16.9706 24.0711L9.89951 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9706 9.92893V24.0711"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_266_1416">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(33.9411 17) rotate(135)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>

        {/* Decorative Image for Desktop */}
        <div className="absolute left-0 right-0 top-1/2 z-10 w-full hidden xl:flex justify-center items-center h-full pb-[210px]">
          <Image
            src="/svg/10-years-logo.svg"
            alt="decorative-shape"
            height={135}
            width={135}
            className="h-[195px] w-[195px] transform -translate-y-1/2 "
          />
        </div>

        {/* GetQuote SVG */}
        <div className="mt-[20px] sm:mt-0">
          <GetQuote />
        </div>

        {/* Background Image */}
      </section>

     
      {/* <div className="absolute bottom-0 left-0 w-screen h-screen">
        <Image
          src="/image 4.png"
          alt="house-image-2"
          fill
          className="object-cover"
        />
        </div> */}
    </div>
  );
};

export default Hero;
