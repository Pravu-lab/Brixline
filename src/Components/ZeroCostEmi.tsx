"use client";
import { useThankYou } from "@/contexts/ThankYouContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Description, MainTitle } from "./Tag";

const ZeroCostEmi = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const { showThankYouWithTimeout } = useThankYou();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    city: ""
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

      try {
      // const response = await fetch("/api/submit", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) throw new Error("Submission failed");

      setFormData({ name: "", contact: "", city: "" });
      // if (response.ok) {
        showThankYouWithTimeout();
      // }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

   const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, contact: numericValue });
  };

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
        className="tracking-wide min-h-screen h-[1050px] md:h-full w-full bg-[url('/imagebg.png')] bg-cover bg-center bg-no-repeat"
      >
        <section 
          className="relative z-10 w-full max-w-screen-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pt-30 lg:pt-20"
        >
          {/* Text Section */}
          <div className="flex flex-col items-start justify-center w-fit">
            {/* Desktop Content */}
            <div >
              <MainTitle className="leading-[100%] text-left text-white">
                Simple 
                <br/>
                Home Loans
              </MainTitle>
              <Description className="text-sm leading-[160%] mt-[11px] text-left text-white">
                Get exclusive low interest rates from top banks, highest 
                <br />
                funding, and dedicated home loan experts.
              </Description>

              <div className="stats-container">
  <div className="stat-item">
    <div className="stat-value">Zero</div>
    <div className="stat-label">INTEREST RATES</div>
  </div>
  
  <div className="stat-item">
    <div className="stat-value">85 +</div>
    <div className="stat-label">LENDING PARTNERS</div>
  </div>
  
  <div className="stat-item">
    <div className="stat-value">92% +</div>
    <div className="stat-label">APPROVAL RATES</div>
  </div>
</div>
            </div>

            {/* Mobile Content */}
            {/* <div className="sm:hidden flex"> */}
            {/* <div className="hidden">
              <div className="stats-container">
                <MainTitle className="leading-[100%] text-left tracking-[-0.02em] text-white">
                 Simple 
                  <br className="hidden md:block"/>{" "}
                   Home Loans
                </MainTitle>
                <Description className="text-xs sm:text-[18px] leading-[160%] mt-[11px] text-left text-white">
                 Get exclusive low interest rates from top banks, highest 
                 funding, and dedicated home loan experts.
                </Description>
              </div> */}
              {/* <Image
                src="/Frame 2147225342.png"
                alt="decorative-shape"
                height={140}
                width={141}
                className="h-fit w-full max-w-[141px]"
              /> */}
            {/* </div> */}




          </div>

          {/* Decorative Image for Desktop */}
          {/* <div className="absolute left-0 right-0 top-1/2 z-10 w-full hidden xl:flex justify-center items-center h-full pb-[210px]"> */}
          <div className="absolute right-0 xl:right-[390px] top-[50%] xl:top-[25%] z-10 flex justify-center items-center">
            <Image
              src="/svg/10-years-logo.svg"
              alt="decorative-shape"
              height={120}
              width={120}
              className="h-[110px] w-[110px] sm:h-[120px] sm:w-[120px] xl:h-[140px] xl:w-[140px] transform -translate-y-1/2"
            />
          </div>

          {/* GetQuote Component */}
          {/* <div className="mt-[20px] sm:mt-0"> */}
            {/* <GetQuote /> */}



 <div className="relative w-max flex justify-end mt-[20px] sm:mt-0">
            <div className='max-w-[390px] relative max-h-[532px]'>
              <div className='absolute px-7 pt-[50px] md:pt-[72px] z-20 w-full'>
                {/* <span className='absolute bg-[#F55252] text-xs px-5 py-[7px] font-bold top-0 left-1/4 rounded-bl-2xl rounded-br-2xl'>
                  FREE CONSULTATION
                </span> */}
                <h3 className="font-['Helvetica Neue'] text-center text-[28px] md:text-3xl font-light text-white mt-0 md:mt-2">
                  Join the waitlist by <br/> filling out the form.                   
                </h3>
                <form className="mt-2 md:mt-8 space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="First Name"
                    aria-label="First Name"
                    className="w-full p-4 border border-[#DADBE4] outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    aria-label="Contact Number"
                    className="w-full p-4 border border-[#DADBE4] outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
                    value={formData.contact}
                    onChange={handleContactChange}
                  />
                  <div className="relative">
                     <select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  required
                  className="bg-white w-full p-4 border !text-black placeholder:text-black font-normal border-black/10 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-100 "
                >
                  <option value="">Choose Location</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
                       <Image
                    src="/svg/ArrowD.svg"
                    alt="arrow-down"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#F55252] text-sm text-white py-4 font-bold transition flex justify-center items-center gap-2.5 mt-4 md:mt-7 disabled:opacity-50"
                  >
                    GET A FREE QUOTE
                  </button>
                </form>
                <p className="text-center font-normal text-xs text-[#fff] mt-0 md:mt-3 pt-4">
                  By proceeding, you are indicating that you have read and agree to our
                  <a href="#" className="font-normal underline"> terms of use </a>
                  &amp;
                  <a href="#" className="font-normal underline"> privacy policy</a>.
                </p>
              </div>
              {/* <svg className='w-full h-full z-10' xmlns="http://www.w3.org/2000/svg" width="390" height="566" viewBox="0 0 390 566" fill="none">
                <foreignObject x="-74" y="-74" width="538" height="714"><div
                  style={{
                    backdropFilter: 'blur(37px)',
                    clipPath: 'url(#bgblur_0_244_270_clip_path)',
                    height: '100%',
                    width: '100%',
                  }}></div></foreignObject><g data-figma-bg-blur-radius="74">
                  <path d="M0 566H390V64L307.5 0H0V566Z" fill="black" fillOpacity="0.8" />
                  <path d="M0 566H390V64L307.5 0H0V566Z" fill="white" fillOpacity="0.1" />
                  <path d="M307.328 0.5L389.5 64.2451V565.5H0.5V0.5H307.328Z" stroke="white" strokeOpacity="0.2" />
                </g>
                <defs>
                  <clipPath id="bgblur_0_244_270_clip_path" transform="translate(74 74)"><path d="M0 566H390V64L307.5 0H0V566Z" />
                  </clipPath></defs>
              </svg> */}

               <svg className='w-full h-full z-10' xmlns="http://www.w3.org/2000/svg" width="390" height="566" viewBox="0 0 390 466" fill="none">
    <rect width="390" height="566" fill="black" fillOpacity="0.8" />
    <rect width="390" height="566" fill="white" fillOpacity="0.1" />
    <rect x="0.5" y="0.5" width="389" height="565" stroke="white" strokeOpacity="0.2" />
  </svg>
              
            </div>
          </div>


          {/* </div> */}
        </section>
      </div>
    </div>
  );
};

export default ZeroCostEmi;