'use client'; // Marking this file as a Client Component

import { useState } from 'react';
import { Button } from './Tag';
import { PackageDetails as AllPackages } from '@/lib/PackageDetails';


export default function MobileQuotePopup({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [selectedPackageKey, setSelectedPackageKey] = useState<'basic_package' | 'standard_package' | 'premium_package' | 'elite_package'>('basic_package');
  const data = AllPackages[selectedPackageKey];

  const handleClose = () => {
    setOpen(false);
  };

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackageKey(e.target.value as 'basic_package' | 'standard_package' | 'premium_package' | 'elite_package');
    setOpenIndex(0); // Reset accordion when package changes
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-black to-neutral-900 text-white flex w-full">
      <div className="flex flex-col sm:flex-row h-full w-full relative">
        {/* Form Section */}
        <div className="relative w-full sm:w-[70%]">
          <div className="flex justify-end p-4 absolute top-0 right-0">
            <button onClick={handleClose} className="text-2xl font-bold">×</button>
          </div>
          <div className="m-auto w-[90%] py-8 sm:py-0 sm:w-[70%] flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-medium text-center mb-10">
              Connect with our <br /> architectural experts.
            </h2>

            <div className="w-full grid grid-cols-2 gap-4 mb-10">
              <input className="bg-white text-black p-3 rounded" placeholder="First Name" />
              <input className="bg-white text-black p-3 rounded" placeholder="Contact Number" />
              <input className="bg-white text-black p-3 rounded" placeholder="Email Address" />
              <input className="bg-white text-black p-3 rounded" placeholder="Location of Plot" />
            </div>

            <Button className="bg-[#F55252] text-white !py-5 px-6 rounded font-semibold border-[#F55252]">
              GET A FREE QUOTE
            </Button>

            <p className="text-xs mt-8 text-gray-400 text-center">
              By proceeding, you are indicating that you have read and agree to our{' '}
              <a href="#" className="underline">terms of use</a> &{' '}
              <a href="#" className="underline">privacy policy</a>.
            </p>
          </div>
        </div>

        {/* Pricing Accordion Section */}
        <div className="bg-[#1a1a1a] text-white p-4 w-full max-w-md mx-auto rounded-md overflow-y-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{data.price}</h2>
            <p className="text-sm">/sq.ft (Incl. GST)</p>

            {/* Dropdown to select package */}
            <div className="mt-2 px-3 py-1 inline-block text-xs font-semibold rounded bg-[#F55252]">
              <select
                value={selectedPackageKey}
                onChange={handlePackageChange}
                className="bg-transparent text-white text-xs font-semibold appearance-none focus:outline-none"
              >
                <option value="basic_package">BASIC PACKAGE</option>
                <option value="standard_package">STANDARD PACKAGE</option>
                <option value="premium_package">PREMIUM PACKAGE</option>
                <option value="elite_package">ELITE PACKAGE</option>
              </select>
              <span className="ml-1 inline-block align-middle">▼</span>
            </div>
          </div>

          <div className="mt-6 divide-y divide-gray-700">
            {data.data.map((section, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={section.title} className="py-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <button
                      className={`w-6 h-6 text-sm font-bold rounded-sm ${
                        isOpen ? 'bg-[#F55252]' : 'bg-[#F55252]'
                      }`}
                    >
                      {isOpen ? '–' : '+'}
                    </button>
                  </div>
                  {isOpen && (
                    <ul className="mt-3 text-sm text-gray-300 space-y-1 pl-2">
                      {section.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
