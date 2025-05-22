"use client";
import FooterSection from "@/Components/Footer";
import Header from "@/Components/Header";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function JoinUsAsProfessionals() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(2);

  const carouselVariants = {
    active: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    previous: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    next: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const testimonials = [
    {
      quote: "First testimonial content. They have a very different approach with construction technology.",
      name: "Mr. First",
      role: "Contractor with Brixline",
      experience: "+5 Years Experience",
      projects: "+50 Projects"
    },
    {
      quote: "Second testimonial content. Never seen such efficient project management before.",
      name: "Mr. Second",
      role: "Contractor with Brixline",
      experience: "+6 Years Experience",
      projects: "+60 Projects"
    },
    {
      quote: "They have a very different approach with construction technology, making them more trustworthy.",
      name: "Mr. RajShekhar",
      role: "Contractor with Brixline",
      experience: "+8 Years Experience",
      projects: "+85 Projects"
    },
    {
      quote: "Fourth testimonial content. Amazing collaboration and support system.",
      name: "Mr. Fourth",
      role: "Contractor with Brixline",
      experience: "+7 Years Experience",
      projects: "+75 Projects"
    },
    {
      quote: "Fifth testimonial content. Best platform for professional growth.",
      name: "Mr. Fifth",
      role: "Contractor with Brixline",
      experience: "+9 Years Experience",
      projects: "+90 Projects"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.city || !formData.phone) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
      setFormData({ name: "", city: "", phone: "", email: "" });
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };
  return (
    <>
      <AnimatePresence>
        // In your page component
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            backgroundColor: isScrolled
              ? "rgba(255,255,255,1)"
              : "rgba(255,255,255,0)",
          }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 w-full z-[1000] ${
            isScrolled ? "shadow-md" : ""
          } [&_header]:!opacity-100`}
        >
          <Header
            transparent={!isScrolled}
            forceWhiteLogo={!isScrolled}
            whiteText={!isScrolled}
          />
        </motion.div>
      </AnimatePresence>
      <header className="relative bg-[url('/png/join-us.png')] h-[542px] w-full bg-cover bg-center tracking-wide">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative mx-auto max-w-screen-xl grid grid-cols-[2fr_1fr] md:grid-cols-3 gap-x-4 gap-y-4 md:gap-0 justify-items-stretch items-stretch pt-20 px-4 md:px-10 overflow-hidden">
          {/* 1st - Title */}
          <div className="md:col-span-3 text-left md:text-center text-white bitter-font font-normal md:font-medium text-[40px] md:text-[82px] leading-[100%] tracking-[-0.02em] pb-0 pt-12 md:pb-6">
            Join us as a <br className="hidden md:block" />
            <div className="bitter-font hidden md:block">
              Contractor Partner
            </div>
            <div className="bitter-font block md:hidden">professionals</div>
          </div>

          {/* 4th - Symbol */}
          <div className="col-start-2 row-start-1 md:col-start-3 md:row-start-2 flex items-center justify-start md:justify-start w-full h-full">
            <Image
              src="/svg/brixline-sym.svg"
              alt="brixline-sym"
              width={125}
              height={125}
              className="w-[100px] md:w-full max-w-[125px] h-auto object-contain"
            />
          </div>

          {/* 3rd - Text Content */}
          <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2 text-left md:px-6 flex items-center w-full">
            <p className="w-full text-left text-base font-normal md:text-lg md:font-medium leading-[130%] md:leading-[160%] tracking-normal md:tracking-[-0.02em]">
              Work with us as architect or contractor. We are now a team of 260+
              partners and yes, they are best of the best.
            </p>
          </div>

          {/* 2nd - Contractors Image */}
          <div className="col-start-2 row-start-2 md:col-start-1 md:row-start-2 flex items-center justify-start md:justify-end w-full h-full">
            <Image
              src="/svg/onb-contractors.svg"
              alt="onb-contractors"
              width={125}
              height={118}
              className="w-[90px] md:w-full max-w-[125px] h-auto object-contain"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="relative bg-white mx-auto max-w-screen-lg h-[490px] md:h-[212px] shadow-sm mt-5 md:mt-10 px-4 py-6 md:p-8">
            <form
              className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full"
              onSubmit={handleSubmit}
            >
              <div className="md:row-start-1 md:col-span-1">
                <input
                  type="text"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full p-4 !text-black placeholder:text-black font-normal border border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
              </div>
              <div className="md:row-start-1 md:col-span-1 relative">
                <select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  required
                  className="w-full p-4 border !text-black placeholder:text-black font-normal border-black/10 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-100"
                >
                  <option value="">City*</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                </select>
                <div className="absolute inset-y-0 right-5 bottom-2 flex items-center pointer-events-none">
                  <Image
                    src="/svg/arrow-down.svg"
                    alt="arrow-down"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div className="md:row-start-1 md:col-span-1">
                <input
                  type="tel"
                  placeholder="Phone*"
                  value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-4 border !text-black placeholder:text-black font-normal border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-100"
                  required
                />
              </div>
              <div className="md:row-start-1 md:col-span-1">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}

                  className="w-full p-4 border !text-black placeholder:text-black font-normal border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
              </div>

              <div className="md:row-start-2 md:col-span-2 flex items-center order-2 md:order-1">
                <label className="flex items-center space-x-3">
                  <span className="text-sm text-black leading-[140%] font-medium">
                    By proceeding, you are indicating that you have read and
                    agree to our <span className="underline">terms of use</span>{" "}
                    & <span className="underline">privacy policy</span>
                  </span>
                </label>
              </div>

              <div className="md:row-start-2 md:col-span-2 flex items-center justify-end order-1 md:order-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#F55252] text-white px-8 py-3.5 h-full transition-colors text-sm font-medium ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <div className="bg-[#F7F7F7] w-full">
        <section className="max-w-screen-xl mx-auto px-3 md:px-10 pb-16 pt-80 md:pt-56 tracking-wide">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="uppercase text-[#F55252] text-sm md:text-base font-bold leading-[140%] text-center">
              discover
            </p>
            <h2 className="text-black text-3xl md:text-5xl leading-[120%] font-medium text-center">
              Reasons To Love Working <br /> With Us
            </h2>
            <p className="text-[#131313] text-sm md:text-base font-medium leading-[140%] text-center">
              We guarantee a hassle free experience for our <br /> contractors
              as well.
            </p>
          </div>
          <div className="overflow-x-auto snap-x snap-mandatory md:overflow-x-visible">
            <div className="flex flex-nowrap justify-start md:justify-center items-center gap-5 mt-10">
              <div className="bg-[#F55252] py-[39px] px-[13px] h-[430px] md:h-[535px] w-[306px] md:w-[381px] flex-shrink-0 shadow-[0px_34px_64px_0px_rgba(0,0,0,0.09)] snap-start flex justify-center items-center flex-col">
                <div className="flex flex-col items-center justify-center gap-4">
                  <Image
                    src="/svg/brixline-red.svg"
                    alt="brixline-red"
                    width={167}
                    height={32}
                    className="w-[134px] h-[25px] md:w-[167px] md:h-[32px]"
                  />
                  <h3 className="text-white font-sm md:font-base font-bold leading-[140%]">
                    EXPERIENCE
                  </h3>
                </div>
                <div className="flex justify-center items-center mt-6 px-4">
                  <ul className="list-disc list-outside space-y-2">
                    <li className="text-white text-xs md:text-base font-normal leading-[160%]">
                      The lead passed to professionals only from verified
                      clients
                    </li>
                    <li className="text-white text-xs md:text-base font-normal leading-[160%]">
                      We act as Escrow Account and provide payment facilitation
                    </li>
                    <li className="text-white text-xs md:text-base font-normal leading-[160%]">
                      Smart Working through online contracts through out
                      contractor app.
                    </li>
                    <li className="text-white text-xs md:text-base font-normal leading-[160%]">
                      We have our forum page where you can post answers
                      and Expand your Reach.
                    </li>
                    <li className="text-white text-xs md:text-base font-normal leading-[160%]">
                      Construction material supplied across Bangalore on credit
                      for our projects.
                    </li>
                    <li className="text-white text-xs md:text-base font-normal leading-[160%]">
                      Get a continues supply of projects based on your project
                      execution.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white py-[29px] md:py-[39px] px-[13px] h-[430px] md:h-[535px] w-[306px] md:w-[381px] flex-shrink-0 shadow-[0px_34px_64px_0px_rgba(0,0,0,0.09)] snap-start">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h3 className="text-black text-[29px] md:text-[35px] font-bold leading-[120%]">
                    Typical
                  </h3>
                  <h3 className="text-black text-sm md:text-base font-bold leading-[140%]">
                    EXPERIENCE
                  </h3>
                </div>
                <div className="flex justify-center items-center mt-6 px-4">
                  <ul className="list-disc list-outside space-y-2">
                    <li className="text-black text-xs md:text-base font-normal leading-[160%]">
                      No guarantee of genuine clients. High chances of bad
                      experience.
                    </li>
                    <li className="text-black text-xs md:text-base font-normal leading-[160%]">
                      Heavy delay in payment, contractors have to keep asking.
                    </li>
                    <li className="text-black text-xs md:text-base font-normal leading-[160%]">
                      No digital tracking of work. No contractor app for smooth
                      working.
                    </li>
                    <li className="text-black text-xs md:text-base font-normal leading-[160%]">
                      No Quick Growth. Can take years to achieve recognition in
                      the market.
                    </li>
                    <li className="text-black text-xs md:text-base font-normal leading-[160%]">
                      Local contractors do not get good quality materials in the
                      new areas.
                    </li>
                    <li className="text-black text-xs md:text-base font-normal leading-[160%]">
                      There is no guarantee of projects even if you do great
                      work.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     
      <section className="mx-auto max-w-screen-xl text-black px-3 md:px-10 py-16 tracking-wide">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] md:gap-[68px]">
          <div className="flex flex-col justify-center items-center md:items-start gap-3">
            <p className="uppercase text-[#F55252] text-sm md:text-base font-bold leading-[140%]">
              professionals
            </p>
            <h2 className="text-black text-3xl md:text-5xl leading-[120%] font-medium text-center md:text-left">
              Meet Our <br /> Professionals
            </h2>
            <p className="text-[#131313] text-sm md:text-base font-medium leading-[140%] text-center md:text-left">
              We guarantee a hassle free experience for our contractors as well.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-start items-center gap-7 h-full">
            {/* Image Carousel */}
            <div className="relative w-[216px] h-[269px] md:w-[277px] md:h-[345px] overflow-hidden">
          {testimonials.map((_, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={
                idx === currentSlide ? 'active' :
                idx < currentSlide ? 'previous' : 'next'
              }
              variants={carouselVariants}
              className="absolute inset-0"
            >
              <Image
                src="/svg/worker-image.svg"
                alt="worker-image"
                fill
                className="object-contain"
                style={{ transform: 'translateZ(0)' }} // Force GPU acceleration
              />
            </motion.div>
          ))}
        </div>

            {/* Text Carousel */}
            <div className="flex flex-col gap-10 md:gap-20 w-full md:w-[380px]">
              <div className="relative h-[200px] overflow-hidden">
              {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={false}
                animate={
                  idx === currentSlide ? 'active' :
                  idx < currentSlide ? 'previous' : 'next'
                }
                variants={carouselVariants}
                className="absolute inset-0"
              >
                <div className="flex justify-center md:justify-start items-start">
                  <Image
                    src="/svg/quotes.svg"
                    alt="quotes"
                    width={38}
                    height={27}
                    className="w-[38px] h-[27px]"
                  />
                </div>
                <p className="text-black text-center md:text-left text-base font-medium leading-[160%] pt-5 md:pt-2 px-5 md:px-0">
                  {testimonial.quote}
                </p>
                <div className="flex flex-row justify-center md:justify-start items-start gap-2 md:gap-5 text-black text-xs leading-[160%] font-normal pt-5 md:pt-2 h-12">
                  <div className="flex flex-col gap-1">
                    <p>{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="w-px border-r border-black/10 self-stretch" />
                  <div className="flex flex-col gap-1">
                    <p>{testimonial.experience}</p>
                    <p>{testimonial.projects}</p>
                  </div>
                </div>
              </motion.div>
            ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center md:justify-start items-center gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentSlide === 0}
                  className={`${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <Image
                    src="/svg/left-button.svg"
                    alt="left-button"
                    width={52}
                    height={52}
                    className="w-[52px] h-[52px]"
                  />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentSlide === testimonials.length - 1}
                  className={`${currentSlide === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <Image
                    src="/svg/right-button.svg"
                    alt="right-button"
                    width={52}
                    height={52}
                    className="w-[52px] h-[52px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#F552520D] w-full">
        <section className="max-w-screen-xl mx-auto px-3 md:px-10 py-16 md:py-40 tracking-wide">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="uppercase text-[#F55252] text-sm md:text-base font-bold leading-[140%] text-center">
              process
            </p>
            <h2 className="text-black text-3xl md:text-5xl leading-[120%] font-medium text-center">
              Simple Steps To Get You <br /> Onboard
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/svg/progress-component.svg"
              alt="progress-component"
              width={1288}
              height={419}
              className="hidden md:block w-[1288px] h-[419px] md:w-full md:h-auto object-contain mx-auto mt-10"
            />
            <Image
              src="/svg/progress-component-mobile.svg"
              alt="progress-component"
              width={1288}
              height={419}
              className="block md:hidden w-[1288px] h-[419px] md:w-full md:h-auto object-contain mx-auto mt-10"
            />
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
}
