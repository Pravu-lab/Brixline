"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from './Tag';
import Image from 'next/image';
import { useThankYou } from '@/contexts/ThankYouContext';
import Link from 'next/link';
import { LoadingAnimation } from './loader/LoadingAnimation';

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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number:"",
    email: "",
    location: "",
  });
  const { showThankYouWithTimeout } = useThankYou();

  // Hiding navbar when popup opens
  useEffect(() => {
    const navbar = document.querySelector('nav') as HTMLElement | null;
    if (navbar) navbar.style.display = 'none';

    const scrollY = window.scrollY;
  
  // Prevent scrolling on body
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';

 const preventBodyScroll = (e: TouchEvent) => {
    const target = e.target as HTMLElement;
    const isScrollable = target.closest('.scrollable-content') as HTMLElement;
  if (!isScrollable || (isScrollable.scrollHeight <= isScrollable.clientHeight)) {
    e.preventDefault();
  }
  };

    // Wheel event handler
  const handleWheel = (e: WheelEvent) => {
    const target = e.target as HTMLElement;
    const isScrollable = target.closest('.scrollable-content') as HTMLElement;
    if (!isScrollable) {
      e.preventDefault();
    }
  };


  document.addEventListener('touchmove', preventBodyScroll, { passive: false });
  document.addEventListener('wheel', handleWheel, { passive: false });

    // document.documentElement.style.overflow = 'hidden';
    // document.body.style.overflow = 'hidden';

    return () => {
    if (navbar) navbar.style.display = '';

    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
    // Remove touchmove prevention
    document.removeEventListener('touchmove', preventBodyScroll);
    document.removeEventListener('wheel', handleWheel);


      // document.documentElement.style.overflow = '';
      // document.body.style.overflow = '';
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    

    if (!formData.name || !formData.number || !formData.email || !formData.location) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      
      setFormData({ name: "", number: "", email: "", location: ""});
      if (response.ok) {
        showThankYouWithTimeout();
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const numericValue = e.target.value.replace(/\D/g, '');
          if(numericValue.length < 14 ){
              setFormData({ ...formData, number: numericValue });
          }
      };

  const handleClose = () => setOpen(false);

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackageKey(e.target.value as PackageKey);
    setOpenIndex(0);
  };

  const data = AllPackages[selectedPackageKey];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center backdrop-blur-md bg-black/30 overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:flex relative flex-row h-[80vh] w-full max-w-7xl bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border border-gray-700">
        {/* Accordion Section */}
       <div className="w-[65%] bg-neutral-800 relative flex flex-col">
  {/* Fixed Header - Doesn't Scroll */}
  <div className="p-8 pb-0 sticky top-0 z-10 bg-neutral-800">
    <div className="text-center">
      <h2 className="text-4xl font-bold">₹ {data.price}</h2>
      <p className="text-sm text-gray-100 mb-6">/sq.ft (Incl. GST)</p>

      <div className="inline-block px-6 py-2 text-sm font-semibold rounded-lg bg-[rgba(245,82,82,0.1)]  mb-8 relative">
        <select
          ref={selectRef}
          value={selectedPackageKey}
          onChange={handlePackageChange}
          className="bg-transparent text-red-400 focus:outline-none cursor-pointer appearance-none"
        >
          <option value="basic_package" className='bg-neutral-800 font-bold'>Basic Package</option>
          <option value="standard_package" className='bg-neutral-800 font-bold'>Standard Package</option>
          <option value="premium_package" className='bg-neutral-800 font-bold'>Premium Package</option>
          <option value="elite_package" className='bg-neutral-800 font-bold'>Elite Package</option>
        </select>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3">
           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
             <rect width="12" height="12" transform="matrix(-1 0 0 1 12 0.5)" fill="#F55252" />
             <rect width="5.2" height="1.2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.7 4.5)" fill="white" />
             <rect width="5.2" height="1.2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9.5 4.5)" fill="white" />
           </svg>
        </div>
      </div>
    </div>
  </div>

  {/* Scrollable Content accordion */}
  <div className="p-8 pt-0 overflow-y-auto custom-scrollbar flex-grow scrollable-content"
    onWheel={(e) => {
    // Allow wheel events to propagate naturally within scrollable area
    e.stopPropagation();
  }}
  >
    <div className="divide-y divide-gray-700">
      {data.data.map((section, index) => (
        <div key={index} className="py-4">
          <div
            className="flex justify-between items-center cursor-pointer group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="font-semibold text-[20px] group-hover:text-[#F55252] transition-colors">
              {section.title}
            </h3>
            <button className={ ` rounded-sm w-7 h-7 text-sm font-bold flex items-center justify-center cursor-pointer ${openIndex === index ? 'bg-[rgba(245,82,82,0.1)]' : 'bg-red-500'}`}>
              {openIndex === index ?
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none"> {/* - */}
              <path d="M2 7H12" stroke="red" strokeWidth="2" strokeLinecap="round" />
              </svg>
               :
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
              <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="2"/>
              </svg>
                }
            </button>
          </div>
          {openIndex === index && (
            <ul className="mt-3 text-[15px] text-gray-300 space-y-2 pl-4 text-left">
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



{/*new form section*/}
        <div className="relative w-[35%] p-10 overflow-y-auto">
  <button 
    onClick={handleClose}
    className="absolute top-6 right-6 z-50 text-3xl font-bold text-black hover:text-white bg-white hover:bg-black cursor-pointer w-8 h-8 flex items-center justify-center transition-all duration-200 shadow-lg"
    aria-label="Close popup"
  >
    <span className="relative -top-0.5">×</span>
  </button>
  <div className="w-full mx-auto flex flex-col items-center justify-center h-full">
    <h2 className="text-md md:text-2xl font-medium text-center mb-10">
      Connect with our <br /> architectural experts.
    </h2>

    {/* Full-width form inputs */}
    <form className='w-[115%]' onSubmit={handleSubmit}>
    <div className=" grid gap-4 mb-10 ">
      <input
      type="text"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name : e.target.value })} 
      className="w-full bg-white text-black p-3 focus:outline-none" 
      placeholder="Name"
      required
      />
      <input 
      type="tel"
      value={formData.number}
      onChange = {handleContactChange}
      className="w-full bg-white text-black p-3 focus:outline-none" 
      placeholder="Number"
      required
      />
      <input
      value={formData.email}
      onChange= {(e) => setFormData({ ...formData, email: e.target.value})}
      className="w-full bg-white text-black p-3 focus:outline-none" 
      placeholder="Email"
      required
      />
      <input
      value={formData.location}
      onChange={(e) => setFormData({ ...formData, location: e.target.value})} 
        className="w-full bg-white text-black p-3 focus:outline-none" 
        placeholder="Plot Location"
      />
    </div>

    {/* Full-width button */}
    
    <Button
      className="w-[100%] cursor-pointer bg-[#F55252] text-white px-4 py-3 font-bold hover:bg-[#e04a4a] transition-colors border-none"
    >
      {loading ? (
        <>
        <LoadingAnimation className='w-5 h-5 mx-auto'/>
        </>
        ) : "GET A FREE QUOTE"}
    </Button>
    
    </form>

    <p className="text-xs mt-3 text-gray-400 text-center">
      By proceeding, you agree to our{' '}
      <a href="#" className="underline hover:text-gray-300">terms</a> &{' '}
      <a href="#" className="underline hover:text-gray-300">privacy policy</a>.
    </p>
  </div>
</div>
      </div>

    {/* Mobile Layout */}
<div className="md:hidden flex flex-col w-full h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
  {/* Scrollable wrapper */}
  <div className="flex-1 overflow-y-auto scrollable-content">
    {/* Contact Form */}
    <div className="relative p-6">
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-50 text-3xl font-bold text-white hover:text-gray-200 bg-black/70 hover:bg-black/90 w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg"
        aria-label="Close popup"
      >
        ×
      </button>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-6">
          Connect with our architectural experts.
        </h2>
        <form className='w-full' onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-1 gap-4 mb-6">
          <input
           type="text"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name : e.target.value })} 
            className="bg-white text-black p-3 focus:outline-none"
            placeholder="First Name"
            required
          />
          <input
          type="tel"
          value={formData.number}
          onChange = {handleContactChange}
            className="bg-white text-black p-3 focus:outline-none"
            placeholder="Contact Number"
            required
          />
          <input
           value={formData.email}
      onChange= {(e) => setFormData({ ...formData, email: e.target.value})}
            className="bg-white text-black p-3 focus:outline-none"
            placeholder="Email Address"
            required
          />
          <input
           value={formData.location}
      onChange= {(e) => setFormData({ ...formData, location: e.target.value})}
            className="bg-white text-black p-3 focus:outline-none"
            placeholder="Location of Plot"
            required
          />
        </div>
        <Button 
        type="submit"
        className="bg-[#F55252] text-white !py-2 px-8 font-semibold hover:bg-[#e04a4a] transition-colors border-none w-full"
        disabled={loading}>
          {loading ? (
        <>
        <LoadingAnimation className='w-5 h-5 mx-auto'/>
        </>
        ) : "GET A FREE QUOTE"}
        </Button>
        </form>
        <p className="text-xs mt-6 text-gray-400 text-center">
          By proceeding, you agree to our{' '}
          <a href="#" className="underline hover:text-gray-300">terms</a> &{' '}
          <a href="#" className="underline hover:text-gray-300">privacy policy</a>.
        </p>
      </div>
    </div>

    {/* Price & Accordion */}
    <div className="bg-[#5b5a5a] p-6">
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
            <option value="basic_package" className="bg-[#9b4e4e] font-bold">
              Basic Package
            </option>
            <option value="standard_package" className="bg-[#9b4e4e] font-bold">
              Standard Package
            </option>
            <option value="premium_package" className="bg-[#9b4e4e] font-bold">
              Premium Package
            </option>
            <option value="elite_package" className="bg-[#9b4e4e] font-bold">
              Elite Package
            </option>
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
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
                <h3 className="font-semibold text-[20px] group-hover:text-[#F55252] transition-colors">
                  {section.title}
                </h3>
                <button className="w-6 h-6 text-xs font-bold rounded-sm bg-[#F55252]">
                  {openIndex === index ? '–' : '+'}
                </button>
              </div>
              {openIndex === index && (
                <ul className="mt-2 text-sm text-gray-300 space-y-1 pl-4 text-left">
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

    </div>
  );
}
