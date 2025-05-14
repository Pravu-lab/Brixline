"use client";

import MobileQuotePopup from './Popup';
import { Title, SubTitle, Description, Section } from './Tag';
import Image from 'next/image';
import { useState } from 'react';
import { PackageDetails as AllPackages } from '@/lib/PackageDetails';
import PageFillAnimation from './PageFillAnimation';

const packages = [
  { price: "1,799", label: "BASIC PACKAGE", key: 'basic_package' },
  { price: "1,970", label: "STANDARD PACKAGE", key: 'standard_package' },
  { price: "2,120", label: "PREMIUM PACKAGE", key: 'premium_package' },
  { price: "2,350", label: "ELITE PACKAGE", key: 'elite_package' },
] as const;

type PackageKey = typeof packages[number]['key'];

export default function HomePackagesSection() {
  const [open, setOpen] = useState(false);
  const [selectedPackageKey, setSelectedPackageKey] = useState<PackageKey>('basic_package');
  const [isCommercial, setIsCommercial] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("BENGALURU");

  const cities = ["BENGALURU", "CHENNAI", "HYDERABAD"];

  const handleClick = (key: PackageKey) => {
    setSelectedPackageKey(key);
    setOpen(true);
  };

  const handleToggle = () => {
    setIsCommercial((prev) => !prev);
  };

  const toggleCity = (city: string) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  return (
    <div className='px-3 md:px-10 py-8 sm:py-12 flex sm:!w-full items-center gap-[10%] relative tracking-wide'>
      {/* Left Section */}
      <div className=' w-full'>
        <h2 className='text-[#F55252] text-[14px] sm:text-[16px] font-bold uppercase mb-1 pl-2 font-helvectica-css'>Discover</h2>
        <Title className="text-black text-left">Our Home Construction Packages</Title>
        <Description className="text-black opacity-50">
          Best in the Industry packages that deliver value without compromising quality.
        </Description>

        {/* Location and Toggle */}
        <div className="mt-6 flex items-center gap-6 flex-wrap">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 px-4 py-1 bg-black text-white text-xs font-semibold rounded"
          >
            {selectedCity}
            {dropdownOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                <rect width="12" height="12" transform="matrix(-1 0 0 1 12 0.5)" fill="#F55252" />
                <rect width="5.2" height="1.2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10.5254 7.7)" fill="white" />
                <rect width="5.2" height="1.2" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.323 8.54853)" fill="white" />
              </svg>
            ) : (
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="12" height="12" transform="matrix(-1 8.74228e-08 8.74228e-08 1 12 0.5)" fill="black"/>
<rect width="5.2" height="1.2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10.5255 7.69995)" fill="white"/>
<rect width="5.2" height="1.2" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.32305 8.54858)" fill="white"/>
</svg>

            )}
          </button>

          {dropdownOpen && (
            <div className="absolute mt-1 bg-black backdrop-blur-2xl shadow-md w-32 min-w-40 text-right z-[1000]">
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => toggleCity(city)}
                  className={`px-3 py-2 text-xs cursor-pointer border-b border-b-[rgba(255,255,255,.2)] text-right flex align-middle gap-2.5 justify-end ${selectedCity === city ? 'font-bold text-white' : 'text-white font-bold'} hover:bg-gray-100 hover:text-black`}
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

          <div className="flex items-center gap-6 flex-wrap p-2">
            <span className={`text-xs font-medium ${isCommercial ? 'text-gray-400' : 'text-black'} transition-all duration-300`}>
              Residential
            </span>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input
                id="toggle"
                type="checkbox"
                checked={isCommercial}
                onChange={handleToggle}
                className="peer absolute w-6 h-6 rounded-full bg-[#F55252] border-4 border-transparent appearance-none cursor-pointer transition-transform duration-300 ease-in-out checked:translate-x-6"
              />
              <label
                htmlFor="toggle"
                className="block h-6 bg-[#feeeee] rounded-full transition-colors duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <span className={`text-xs font-medium ${isCommercial ? 'text-black' : 'text-gray-400'} transition-all duration-300`}>
              Commercial
            </span>
          </div>
        </div>


        {/* Package Cards */}
        <div className="mt-6 w-full">
          {!isCommercial ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {packages.map((pkg, i) => (
                <div
                  key={i}
                  className="bg-[#F55252] text-white p-6 w-full flex flex-col sm:flex-row justify-between md:items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold">₹ {pkg.price}</h3>
                    <p className="text-sm">/sq.ft (Incl. GST)</p>
                    <div className="mt-4 text-sm font-semibold">{pkg.label}</div>
                  </div>
                  <div onClick={() => handleClick(pkg.key)} role="button" aria-label="Open Quote Popup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <rect y="0.5" width="30" height="30" fill="white" />
                      <rect x="7" y="7.5" width="13" height="3" fill="#F55252" />
                      <rect x="20" y="23.5" width="13" height="3" transform="rotate(-90 20 23.5)" fill="#F55252" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-40 bg-gray-100 rounded-lg md:min-h-[280px]">
              <span className="text-lg font-semibold text-gray-500">Coming Soon 🚧</span>
            </div>
          )}
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="relative w-full h-[100vh] hidden md:flex justify-end">
        <Image
          src="/download 1.png"
          alt="house-image-2"
          fill
          className="!h-full object-contain object-right"
        />
      </div>

      {/* Popup */}
      {open && (
        <MobileQuotePopup
          selectedPackageKey={selectedPackageKey}
          setSelectedPackageKey={setSelectedPackageKey}
          setOpen={setOpen}
          AllPackages={AllPackages}
        />
      )}
      <PageFillAnimation />
    </div>
  );
}
