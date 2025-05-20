"use client";
import { useThankYou } from "@/contexts/ThankYouContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Description, MainTitle } from "./Tag";

const Career = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      setIsScrolled(currentScrollY > 50); // Track scroll past threshold
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              backgroundColor: isScrolled ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 w-full z-[1000] ${
              isScrolled ? 'shadow-md' : ''
            }`}
          >
            <Header 
              transparent={!isScrolled} 
              forceWhiteLogo={!isScrolled} 
              whiteText={!isScrolled}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Background */}
      <div 
  className="tracking-wide min-h-screen h-[1050px] md:h-full w-full bg-[url('/careerbg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center"
>
        <section 
    className="relative z-10 w-full max-w-screen-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24"
  >
          {/* Text Section */}
          <div className="flex flex-col items-center justify-between w-full text-center">
            {/* Desktop Content */}
            <div>
              <MainTitle className="bitter-font font-normal leading-[100%] text-center text-white">
                Real Growth
                <br/>
                Real leaders
                <br/>
                Real Impact
              </MainTitle>
              <Description className="text-xl leading-[160%] mt-[11px] text-center text-white">
               Join a team where your work drives results, 
                <br />
                your voice is heard, and your career moves forward.
              </Description>
            </div>
          </div>
          {/* </div> */}
        </section>
      </div>

      
    </div>
  );
};

export default Career;