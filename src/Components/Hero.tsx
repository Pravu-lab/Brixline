"use client";
import { useEffect, useRef, useState } from "react";
// import { Zap } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import GetQuote from "./GetQuote";
import Header from "./Header";
import { Button, Description, MainTitle } from "./Tag";


const Hero = () => {
  const ref = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
      });
    
      const stripeScale = useTransform(scrollYProgress, [0,1], [0,1]);

      useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setIsVisible(false); // Hide when scrolling down
          } else {
            setIsVisible(true); // Show when scrolling up
          }
          setIsScrolled(currentScrollY > 50); //track to check scroll past threshold
          
          lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      // useEffect(() => {
      //   // Set a flag when homepage mounts
      //   localStorage.setItem("isHomepage", "true");
      //   return () => {
      //     // Remove flag when leaving homepage
      //     localStorage.removeItem("isHomepage");
      //   };
      // }, []);
      
  return (
    <div className="relative">

<AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              backgroundColor: isScrolled ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
              // height: isScrolled ? "80px" : "60px"
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 w-full z-[1000] ${
              isScrolled ? 'shadow-md' :''
            }`}
          >
            {/* <div className='bg-transparent border-1 text-white'> */}
              <Header transparent={!isScrolled} forceWhiteLogo={!isScrolled} whiteText={!isScrolled}/>
          
          </motion.div>
        )}
      </AnimatePresence>

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
      <section className="relative z-10 w-full max-w-screen-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pt-30 lg:pt-20"
          style={{
            background: "transparent", // Explicit transparency
          }}
      >
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-fit">
          {/* Desktop Content */}
          <div className="hidden sm:block">
            <MainTitle className="leading-[100%] text-left text-white">
              You dream it,
              <br/>
              we build it
            </MainTitle>
            <Description className="text-sm leading-[160%] mt-[11px] text-left text-white">
            Constructing dream homes with innovative design, unmatched quality<br/> and on-time delivery—where excellence meets value.
            </Description>
          </div>

          {/* Mobile Content */}
          <div className=" sm:hidden flex">
            <div className="flex-1">
              <MainTitle className="leading-[100%] text-left tracking-[-0.02em] text-white">
                You dream it,
                <br className="hidden md:block"/>{" "}
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
            height={120}
            width={120}
            className="h-[195px] w-[195px] transform -translate-y-1/2 "
          />
        </div>

        {/* GetQuote SVG */}
        <div className="mt-[20px] sm:mt-0">
          <GetQuote />
        </div>

        {/* Background Image */}
      </section>
    </div>
    </div>
  
  );
};

export default Hero;


