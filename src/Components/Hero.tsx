"use client";
import React, { useState } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button, Description, MainTitle } from "./Tag";
import GetQuote from "./GetQuote";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("BENGALURU");

  const cities = ["BENGALURU", "CHENNAI", "HYDERABAD"];

  const toggleCity = (city: string) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };
  return (
    <div className="tracking-wide overflow-hidden w-full">
      <header
        className={`absolute z-100 p-8 lg:bottom-0 ${
          mobileOpen ? "h-[100dvh]" : "h-auto"
        } sm:h-auto transition-all duration-300 overflow-hidden w-full`}
      >
        <div className="flex justify-between items-center mx-0 md:mx-13">
          {/* Logo + City */}
          <div className="flex flex-col justify-end items-center sm:flex-row md:items-center sm:items-start gap-4">
            {/* Logo SVG */}
            <svg
              width="38"
              height="32"
              viewBox="0 0 38 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.266 31.908H0V0.907959H28.4167L37.266 8.32817V31.908ZM4.617 28V6.18455H15.6324C16.9432 6.18455 18.0833 6.41797 19.0529 6.8848C20.0225 7.33368 20.7766 7.98006 21.3152 8.82395C21.8718 9.64988 22.1501 10.6195 22.1501 11.7327C22.1501 12.8638 21.8359 13.8244 21.2075 14.6145C20.5791 15.3865 19.7711 15.9342 18.7836 16.2574V16.3651C19.5915 16.5446 20.3277 16.8768 20.992 17.3616C21.6743 17.8464 22.213 18.4569 22.608 19.193C23.021 19.9292 23.2274 20.8 23.2274 21.8055C23.2274 23.0444 22.9222 24.1307 22.3117 25.0643C21.7192 25.98 20.8843 26.6982 19.807 27.2189C18.7476 27.7396 17.5177 28 16.1172 28H4.617ZM8.73769 24.4449H15.3631C16.5661 24.4449 17.4908 24.1845 18.1372 23.6638C18.7836 23.1252 19.1067 22.3531 19.1067 21.3476C19.1067 20.3601 18.7836 19.615 18.1372 19.1122C17.4908 18.5915 16.5751 18.3312 15.39 18.3312H8.73769V24.4449ZM8.73769 15.0454H15.0669C16.0185 15.0454 16.7457 14.8209 17.2484 14.3721C17.7691 13.9052 18.0294 13.2499 18.0294 12.406C18.0294 11.5262 17.7691 10.8619 17.2484 10.413C16.7457 9.9641 16.0185 9.73966 15.0669 9.73966H8.73769V15.0454ZM24.4043 23.3335H32.9788V27.9505H24.4043V23.3335Z"
                fill="#F55252"
              />
              <rect
                x="30.0106"
                y="18.7164"
                width="5.2766"
                height="4.61702"
                fill="white"
              />
            </svg>

            <svg
              width="169"
              height="33"
              viewBox="0 0 169 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.4898 7.97662H49.5484V4.1319H55.4898V7.97662ZM101.976 7.97662H96.0348V4.1319H101.976V7.97662Z"
                fill="#F55252"
              />
              <path
                d="M46.059 14.0373H43.9135C41.8807 14.0373 40.3496 14.6273 39.3207 15.8068C38.3169 16.9863 37.8148 18.5545 37.8148 20.5119V32.0305H32.2816V15.0539H29.4955V9.44452H35.2172V13.8117H36.7982C37.4256 12.3061 38.3918 11.1639 39.6967 10.3859C41.0015 9.60802 42.4949 9.21899 44.1761 9.21893H46.059V14.0373ZM15.6625 1.383C17.4943 1.38303 19.0877 1.71004 20.4427 2.36249C21.7979 2.98988 22.852 3.89296 23.6049 5.07245C24.3828 6.22685 24.7719 7.58195 24.7719 9.13788C24.7719 10.7189 24.3328 12.062 23.4545 13.1662C22.5762 14.2451 21.4468 15.0104 20.0668 15.4621V15.6125C21.196 15.8635 22.2252 16.3275 23.1537 17.0051C24.1072 17.6826 24.8594 18.5367 25.4115 19.5656C25.9886 20.5945 26.2777 21.8117 26.2777 23.217C26.2776 24.9484 25.8506 26.4668 24.9974 27.7717C24.1693 29.0514 23.0021 30.0547 21.4965 30.7824C20.016 31.5101 18.2974 31.8742 16.3402 31.8742H0.265991V1.383H15.6625ZM55.3724 31.8566H49.764V9.26971H55.3724V31.8566ZM101.825 31.8566H96.2152V9.26971H101.825V31.8566ZM167.874 31.8361H160.884V26.9426H167.874V31.8361ZM70.1937 16.3332L75.6527 9.21893H81.8256L73.431 20.2482L82.2777 31.8049H75.9906L70.1566 24.0881L64.2836 31.8049H58.0726L66.9193 20.2482L58.5248 9.21893H64.7728L70.1937 16.3332ZM146.686 8.29608C148.995 8.29613 150.977 8.74819 152.633 9.65155C154.289 10.5299 155.57 11.81 156.473 13.4914C157.376 15.1477 157.828 17.1179 157.828 19.4016V21.3586H140.437C140.638 23.2657 141.29 24.734 142.394 25.7629C143.523 26.7666 145.017 27.2687 146.873 27.2687C148.254 27.2687 149.371 27.0177 150.224 26.5158C151.102 25.9888 151.717 25.2107 152.069 24.1818H157.715C157.188 26.5659 155.971 28.436 154.064 29.7912C152.182 31.1212 149.797 31.7863 146.911 31.7863C144.477 31.7863 142.369 31.3093 140.587 30.3557C138.805 29.3769 137.425 28.0088 136.447 26.2521C135.493 24.4704 135.016 22.3751 135.016 19.966C135.016 17.5569 135.493 15.4866 136.447 13.7551C137.4 11.9984 138.755 10.6553 140.512 9.72675C142.269 8.77316 144.327 8.29608 146.686 8.29608ZM121.386 8.758C124.473 8.75804 126.857 9.61111 128.538 11.3176C130.245 13.024 131.098 15.2954 131.098 18.131V31.758H125.489V19.1857C125.489 17.4042 125.012 16.0488 124.059 15.1203C123.13 14.1918 121.737 13.7268 119.88 13.7267C118.073 13.7267 116.68 14.1918 115.702 15.1203C114.748 16.0488 114.271 17.4041 114.271 19.1857V31.758H108.662V14.7814H105.876V9.17206H111.636V12.7863H113.217C114.07 11.5064 115.162 10.5144 116.493 9.81171C117.823 9.10919 119.454 8.758 121.386 8.758ZM90.6195 31.6203H85.0101V0.000183105H90.6195V31.6203ZM6.02576 26.9055H15.2855C16.9669 26.9055 18.26 26.5414 19.1635 25.8137C20.0666 25.0608 20.5179 23.9815 20.5179 22.5764C20.5179 21.1964 20.0666 20.155 19.1635 19.4523C18.26 18.7246 16.9798 18.3606 15.3236 18.3605H6.02576V26.9055ZM146.686 12.7766C145.055 12.7766 143.712 13.1906 142.658 14.0187C141.604 14.8469 140.901 16.0262 140.55 17.5568H152.445C152.219 16.001 151.617 14.8218 150.638 14.0187C149.659 13.1906 148.342 12.7766 146.686 12.7766ZM6.02576 13.7678H14.8715C16.2015 13.7678 17.2186 13.4547 17.9213 12.8273C18.6489 12.1749 19.012 11.2586 19.0121 10.0793C19.0121 8.84969 18.6489 7.92054 17.9213 7.29315C17.2186 6.66576 16.2015 6.35272 14.8715 6.35272H6.02576V13.7678Z"
                fill="white"
              />
              <path
                d="M160.82 0.052002H162.098L164.308 5.45187H164.387L166.602 0.052002H167.899V7.00002H166.873V1.9732H166.808L164.751 6.99069H163.921L161.888 1.96854H161.823V7.00002H160.82V0.052002Z"
                fill="white"
              />
              <path
                d="M154.665 0.95198V0.052002H160.046V0.95198H157.882V7.00002H156.838V0.95198H154.665Z"
                fill="white"
              />
            </svg>

            {/* City Dropdown */}
            <div className="flex items-center justify-center">
              <div className="">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-4 py-1 bg-[rgba(245,82,82,0.1)] text-red-600 text-xs font-semibold rounded"
                >
                  {selectedCity}
                  {dropdownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <rect
                        width="12"
                        height="12"
                        transform="matrix(-1 0 0 1 12 0.5)"
                        fill="#F55252"
                      />
                      <rect
                        width="5.2"
                        height="1.2"
                        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10.5254 7.7)"
                        fill="white"
                      />
                      <rect
                        width="5.2"
                        height="1.2"
                        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.323 8.54853)"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <rect
                        width="12"
                        height="12"
                        transform="matrix(-1 0 0 1 12 0.5)"
                        fill="#F55252"
                      />
                      <rect
                        width="5.2"
                        height="1.2"
                        transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.7 4.5)"
                        fill="white"
                      />
                      <rect
                        width="5.2"
                        height="1.2"
                        transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.5 4.5)"
                        fill="white"
                      />
                    </svg>
                  )}
                </button>

                {dropdownOpen && (
                  <div className="absolute mt-1 bg-[rgba(245,82,82,0.10)] backdrop-blur-2xl shadow-md w-32 min-w-40 text-right z-[1000]">
                    {cities.map((city) => (
                      <div
                        key={city}
                        onClick={() => toggleCity(city)}
                        className={`px-3 py-2 text-xs cursor-pointer border-b-1 border-b-[rgba(255,255,255,.2)] text-right flex align-middle gap-2.5 justify-end ${
                          selectedCity === city
                            ? "font-bold text-white"
                            : "text-white"
                        } hover:bg-gray-100 hover:text-black`}
                      >
                        {city !== "BENGALURU" && (
                          <div className="bg-[#F55252] text-white p-1 flex align-middle justify-center">
                            <span className="text-white text-[6px]">
                              COMING SOON
                            </span>
                          </div>
                        )}
                        {city}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex gap-5 xl:gap-8 items-center text-md font-semibold text-white uppercase">
            <span className="flex items-center gap-2 ">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              HOME
            </span>
            <Link href="/about">ABOUT US</Link>
            <Link href="/how-it-works">HOW IT WORKS</Link>
            <Link href="/cost-estimator">COST ESTIMATOR</Link>
            <Link href="/contact-us">CONTACT US</Link>
            {/* <span className="flex items-center gap-1 text-black">
                        <Zap className="w-4 h-4 text-red-500" />
                        ZERO COST EMI
                    </span> */}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex justify-center items-center xl:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="38"
                  viewBox="0 0 45 38"
                  fill="none"
                >
                  <path
                    d="M44.2734 37.4619H0V9.44824L10.5137 0.632812H44.2734V37.4619Z"
                    fill="#F55252"
                  />
                  <path
                    d="M30.3672 12.7539L16.2246 26.8965L14.1035 24.7754L28.2461 10.6328L30.3672 12.7539Z"
                    fill="white"
                  />
                  <path
                    d="M30.4707 24.5264L28.3867 26.6846L14 12.791L16.084 10.6328L30.4707 24.5264Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="38"
                  viewBox="0 0 45 38"
                  fill="none"
                >
                  <path
                    d="M44.2735 37.1965H0V9.1827L10.5133 0.367188H44.2735V37.1965Z"
                    fill="#F55252"
                  />
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
          <div className="md:hidden p-4 text-sm font-semibold text-black uppercase space-y-3">
            <div className="flex items-center gap-1 text-red-500">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              HOME
            </div>
            <Link href="/about" className="text-black block">
              ABOUT US
            </Link>
            <Link href="/how-it-works" className="text-black block">
              HOW IT WORKS
            </Link>
            <Link href="/cost-estimator" className="text-black block">
              COST ESTIMATOR
            </Link>
            <Link href="/contact-us" className="text-black block">
              CONTACT US
            </Link>
            <span className="flex items-center gap-1 text-black">
              <Zap className="w-4 h-4 text-red-500 block" />
              {/* <span className="text-black">
                            ZERO COST EMI
                        </span> */}
            </span>
          </div>
        )}
      </header>

      <section className="relative z-100 h-screen max-w-screen-7xl mx-auto w-full flex flex-col lg:flex-row lg:justify-between pb-10 items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 mt-30 lg:mt-10">
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-fit">
          {/* Desktop Content */}
          <div className="hidden sm:block">
            <MainTitle className="leading-[100%] text-left">
              You dream it,
              <br />
              we build it
            </MainTitle>
            <Description className="text-[18px] leading-[160%] mt-[11px] text-left">
              Crafting timeless spaces through innovative architecture, premium
              materials,
              <br />
              and a commitment to enduring excellence.
            </Description>
          </div>

          {/* Mobile Content */}
          <div className=" sm:hidden flex">
            <div className="flex-1">
              <MainTitle className="leading-[100%] text-left tracking-[-0.02em]">
                You dream it,
                <br />
                we build it
              </MainTitle>
              <Description className="text-xs sm:text-[18px] leading-[160%] mt-[11px] text-left">
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
      <div className="absolute bottom-0 left-0 w-full h-full">
        <Image
          src="/image 4.png"
          alt="house-image-2"
          fill
          className="object-cover object-left"
        />
      </div>
    </div>
  );
};

export default Hero;
