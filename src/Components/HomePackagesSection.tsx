"use client"
import MobileQuotePopup from './Popup';
import { Title, SubTitle, Description, Section } from './Tag';
import Image from 'next/image';
import { useState } from 'react';

const packages = [
    { price: "1,760", label: "BASIC PACKAGE" },
    { price: "1,970", label: "STANDARD PACKAGE" },
    { price: "2,120", label: "PREMIUM PACKAGE" },
    { price: "2,350", label: "ELITE PACKAGE" },
];

export default function HomePackagesSection() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
    }
    return (
        <Section className='flex pr-0 sm:!w-full items-center gap-[10%]'>
            {/* Left Section */}
            <div className='sm:ml-[5%]'>
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
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-black">Residential</span>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                            <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Commercial</span>
                    </div>
                </div>

                {/* Package Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6 w-full">
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
                            <div onClick={handleClick} role="button" aria-label="Open Quote Popup">

                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                    <rect y="0.5" width="30" height="30" fill="white" />
                                    <rect x="7" y="7.5" width="13" height="3" fill="#F55252" />
                                    <rect x="20" y="23.5" width="13" height="3" transform="rotate(-90 20 23.5)" fill="#F55252" />
                                </svg>
                            </div>
                        </div>
                    ))}
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


            {open && <MobileQuotePopup setOpen={setOpen} />}
        </Section>
    );
}
