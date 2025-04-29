"use client";

import MobileQuotePopup from './Popup';
import { Title, SubTitle, Description, Section } from './Tag';
import Image from 'next/image';
import { useState } from 'react';
import { PackageDetails as AllPackages } from '@/lib/PackageDetails';
import PageFillAnimation from './PageFillAnimation';

const packages = [
  { price: "1,760", label: "BASIC PACKAGE", key: 'basic_package' },
  { price: "1,970", label: "STANDARD PACKAGE", key: 'standard_package' },
  { price: "2,120", label: "PREMIUM PACKAGE", key: 'premium_package' },
  { price: "2,350", label: "ELITE PACKAGE", key: 'elite_package' },
] as const;

type PackageKey = typeof packages[number]['key'];

export default function HomePackagesSection() {
  const [open, setOpen] = useState(false);
  const [selectedPackageKey, setSelectedPackageKey] = useState<PackageKey>('basic_package');

  const handleClick = (key: PackageKey) => {
    setSelectedPackageKey(key);
    setOpen(true);
  };

  const [isCommercial, setIsCommercial] = useState(false);

  const handleToggle = () => {
    setIsCommercial((prev) => !prev);
  };

  return (
    <Section className='flex sm:!w-full items-center gap-[10%] relative'>
      {/* Left Section */}
      <div className=' w-full'>
        <SubTitle>Discover</SubTitle>
        <Title className="text-black text-left">Our Home Construction Packages</Title>
        <Description className="text-black opacity-50">
          Your Perfect Home, Designed & Built for You. Hassle-free,<br />On-Time, and Within Budget.
        </Description>

        {/* Location and Toggle */}
        <div className="mt-6 flex items-center gap-6 flex-wrap">
          <button className="bg-red-100 text-[#F55252] font-bold px-4 py-2 rounded text-xs flex gap-1 items-center">
            <span>BENGALURU</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
              <rect x="12" y="12.5" width="12" height="12" transform="rotate(-180 12 12.5)" fill="#F55252" />
              <rect x="10.5255" y="5.30005" width="5.2" height="1.2" transform="rotate(135 10.5255 5.30005)" fill="white" />
              <rect x="2.32306" y="4.45142" width="5.2" height="1.2" transform="rotate(45 2.32306 4.45142)" fill="white" />
            </svg>
          </button>
          <div className="flex items-center gap-6 flex-wrap">
          {/* Residential */}
          <span className={`text-xs font-medium ${isCommercial ? 'text-gray-400' : 'text-black'} transition-all duration-300`}>
            Residential
          </span>

          {/* Toggle Button */}
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

          {/* Commercial */}
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
            <div className="flex justify-center items-center h-40 bg-gray-100 rounded-lg">
              <span className="text-lg font-semibold text-gray-500">Coming Soon 🚧</span>
            </div>
          )}
        </div>

      </div>

      {/* Right Image */}
      <div className="relative w-full h-[100vh] hidden md:flex justify-end">
        <Image
          src="/download 1.png"
          alt="house-image-2"
          fill
          className="!h-auto object-cover object-right"
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
      <PageFillAnimation/>
    </Section>
  );
}
