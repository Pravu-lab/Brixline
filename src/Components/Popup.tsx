"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from './Tag';

type PackageKey = 'basic_package' | 'standard_package' | 'premium_package' | 'elite_package';

interface PackageData {
  price: string;
  data: Section[];
}
interface Section {
  title: string;
  items: string[];
}

interface MobileQuotePopupProps {
  setOpen: (open: boolean) => void;
  setSelectedPackageKey: (key: PackageKey) => void;
  selectedPackageKey: PackageKey;
  AllPackages: Record<PackageKey, PackageData>;
}

export default function MobileQuotePopup({
  setOpen,
  setSelectedPackageKey,
  selectedPackageKey,
  AllPackages
}: MobileQuotePopupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  // Hiding navbar when popup opens
  useEffect(() => {
    const navbar = document.querySelector('nav') as HTMLElement | null;
    if (navbar) navbar.style.display = 'none';
    document.body.style.overflow = 'hidden';

    return () => {
      if (navbar) navbar.style.display = '';
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => setOpen(false);

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackageKey(e.target.value as PackageKey);
    setOpenIndex(0);
  };

  const data = AllPackages[selectedPackageKey];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center backdrop-blur-md bg-black/30">
      {/* Desktop Layout */}
      <div className="hidden md:flex relative flex-row h-[80vh] w-full max-w-7xl bg-gradient-to-b from-black to-neutral-900 text-white rounded-xl overflow-hidden border border-gray-700">
        {/* Form Section */}
        <div className="relative w-[60%] p-10 overflow-y-auto">
          <button 
            onClick={handleClose}
            // className="absolute top-5 right-5 z-50 text-xl font-medium text-white hover:text-gray-200 bg-black/40 hover:bg-black/60 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
            className="absolute top-6 right-6 z-50 text-3xl font-bold text-white hover:text-gray-200 bg-black/70 hover:bg-black/90 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg"
            aria-label="Close popup"
          >
            ×
          </button>
          <div className="w-[80%] mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-md md:text-3xl font-bold text-center mb-10">
              Connect with our <br /> architectural experts.
            </h2>

            <div className="w-half grid grid-cols-2 gap-6 mb-10">
              <input className="bg-white text-black p-3 rounded focus:outline-none" placeholder="First Name" />
              <input className="bg-white text-black p-3 rounded focus:outline-none" placeholder="Contact Number" />
              <input className="bg-white text-black p-3 rounded focus:outline-none" placeholder="Email Address" />
              <input className="bg-white text-black p-3 rounded focus:outline-none" placeholder="Location of Plot" />
            </div>

            <Button className="bg-[#F55252] text-white !py-2 px-8 rounded-lg font-semibold hover:bg-[#e04a4a] transition-colors">
              GET A FREE QUOTE
            </Button>

            <p className="text-xs mt-8 text-gray-400 text-center">
              By proceeding, you agree to our{' '}
              <a href="#" className="underline hover:text-gray-300">terms</a> &{' '}
              <a href="#" className="underline hover:text-gray-300">privacy policy</a>.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="w-[40%] bg-[#5b5a5a] p-8 overflow-y-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">₹ {data.price}</h2>
            <p className="text-sm text-gray-100 mb-6">/sq.ft (Incl. GST)</p>

            <div className="inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-[#884e4e] mb-8 relative">
              <select
                ref={selectRef}
                value={selectedPackageKey}
                onChange={handlePackageChange}
                className="bg-transparent text-white focus:outline-none cursor-pointer appearance-none"
              >
                <option value="basic_package" className='bg-[#9b4e4e] font-bold'>Basic Package</option>
                <option value="standard_package" className='bg-[#9b4e4e] font-bold'>Standard Package</option>
                <option value="premium_package" className='bg-[#9b4e4e] font-bold'>Premium Package</option>
                <option value="elite_package" className='bg-[#9b4e4e] font-bold'>Elite Package</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="11" 
                  height="11" 
                  viewBox="0 0 11 11" 
                  fill="none"
                >
                  <rect 
                    x="10.2676" 
                    y="10.2637" 
                    width="9.58333" 
                    height="9.58333" 
                    transform="rotate(-180 10.2676 10.2637)" 
                    fill="#F55252"
                  />
                </svg>
              </div>
            </div>

            <div className="divide-y divide-gray-700">
              {data.data.map((section, index) => (
                <div key={index} className="py-4">
                  <div
                    className="flex justify-between items-center cursor-pointer group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="font-semibold text-lg group-hover:text-[#F55252] transition-colors">
                      {section.title}
                    </h3>
                    <button className="w-7 h-7 text-sm font-bold rounded-sm bg-[#F55252]">
                      {openIndex === index ? '–' : '+'}
                    </button>
                  </div>
                  {openIndex === index && (
                    <ul className="mt-3 text-sm text-gray-300 space-y-2 pl-4 text-left">
                      {section.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-full w-full bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden">
        {/* Form Section - Top Half */}
        <div className="relative h-[60vh] min-h-[60vh] p-6 flex flex-col">
          <button 
            onClick={handleClose}
            // className="absolute top-5 right-5 z-50 text-xl font-medium text-white hover:text-gray-200 bg-black/40 hover:bg-black/60 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200"
            className="absolute top-6 right-6 z-50 text-3xl font-bold text-white hover:text-gray-200 bg-black/70 hover:bg-black/90 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg"
            aria-label="Close popup"
          >
            ×
          </button>
          
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              Connect with our architectural experts.
            </h2>

            <div className="w-full grid grid-cols-1 gap-4 mb-6">
              <input className="bg-white text-black p-3 rounded focus:outline-none" placeholder="First Name" />
              <input className="bg-white text-black p-3 rounded focus:outline-none" placeholder="Contact Number" />
              <input className="bg-white text-black p-3 rounded focus:outline-none" placeholder="Email Address" />
              <input className="bg-white text-black p-3 rounded focus:outline-none" placeholder="Location of Plot" />
            </div>

            <Button className="bg-[#F55252] text-white !py-2 px-8 rounded-lg font-semibold hover:bg-[#e04a4a] transition-colors w-full max-w-xs">
              GET A FREE QUOTE
            </Button>

            <p className="text-xs mt-6 text-gray-400 text-center">
              By proceeding, you agree to our{' '}
              <a href="#" className="underline hover:text-gray-300">terms</a> &{' '}
              <a href="#" className="underline hover:text-gray-300">privacy policy</a>.
            </p>
          </div>
        </div>

        {/* Accordion Section - Bottom Half with Scroll */}
        <div className="h-[40vh] bg-[#5b5a5a] p-6 overflow-y-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold">₹ {data.price}</h2>
            <p className="text-sm text-gray-100 mb-4">/sq.ft (Incl. GST)</p>

            <div className="inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-[#884e4e] mb-6 relative">
              <select
                ref={selectRef}
                value={selectedPackageKey}
                onChange={handlePackageChange}
                className="bg-transparent text-white focus:outline-none cursor-pointer appearance-none"
              >
                <option value="basic_package" className='bg-[#9b4e4e] font-bold'>Basic Package</option>
                <option value="standard_package" className='bg-[#9b4e4e] font-bold'>Standard Package</option>
                <option value="premium_package" className='bg-[#9b4e4e] font-bold'>Premium Package</option>
                <option value="elite_package" className='bg-[#9b4e4e] font-bold'>Elite Package</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="11" 
                  height="11" 
                  viewBox="0 0 11 11" 
                  fill="none"
                >
                  <rect 
                    x="10.2676" 
                    y="10.2637" 
                    width="9.58333" 
                    height="9.58333" 
                    transform="rotate(-180 10.2676 10.2637)" 
                    fill="#F55252"
                  />
                </svg>
              </div>
            </div>

            <div className="divide-y divide-gray-700">
              {data.data.map((section, index) => (
                <div key={index} className="py-3">
                  <div
                    className="flex justify-between items-center cursor-pointer group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="font-semibold text-base group-hover:text-[#F55252] transition-colors">
                      {section.title}
                    </h3>
                    <button className="w-6 h-6 text-xs font-bold rounded-sm bg-[#F55252]">
                      {openIndex === index ? '–' : '+'}
                    </button>
                  </div>
                  {openIndex === index && (
                    <ul className="mt-2 text-xs text-gray-300 space-y-1 pl-4 text-left">
                      {section.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

