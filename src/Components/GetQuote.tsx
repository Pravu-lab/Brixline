"use client";
import React, { useState } from 'react';

interface GetQuoteProps {
    classname?: string;
  }
  

  const GetQuote: React.FC<GetQuoteProps> = ({ classname }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        location: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Submission failed");

            setFormData({ name: "", contact: "", location: "" });
            alert("Thank you! We'll be in touch soon.");
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className={`relative w-full flex justify-end ${classname}`}>
            <div className='max-w-[390px] relative max-h-[532px]'>
                <div className=' absolute px-7 pt-[72px] z-20'>
                    <span className='absolute bg-[#F55252] text-xs px-5 py-[7px] font-bold top-0 left-1/4 rounded-bl-2xl rounded-br-2xl'>
                        FREE CONSULTATION
                    </span>
                    <h3 className="text-center text-[28px] md:text-3xl font-light text-white mt-2">
                            Connect with our <br/> architectural experts.                    
                    </h3>
                    <form className="mt-8 space-y-4" onSubmit={(e)=>handleSubmit(e)}>
                        <input
                            type="text"
                            placeholder="First Name"
                            aria-label="First Name"
                            className="w-full p-4 border border-[#DADBE4]  outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                            <input
                                type="tel"
                                placeholder="Contact Number"
                                aria-label="Contact Number"
                                className="w-full p-4 border border-[#DADBE4]  outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            />

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Location of Plot"
                                aria-label="Location of Plot"
                                className="w-full p-4 border border-[#DADBE4]  outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.75 15.75L12.525 12.525" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#F55252] text-sm text-white py-4  font-bold transition flex justify-center items-center gap-2.5 mt-7 disabled:opacity-50"
                        >
                                GET A FREE QUOTE
                        </button>
                    </form>
                    <p className="text-center font-normal text-xs text-[#fff] mt-3">
                        By proceeding, you are indicating that you have read and agree to our
                        <a href="#" className="font-normal underline">
                            {" "}
                            terms of use{" "}
                        </a>
                        &amp;
                        <a href="#" className="font-normal underline">
                            {" "}
                            privacy policy
                        </a>
                        .
                    </p>
                </div>
                <svg className='w-full h-full z-10' xmlns="http://www.w3.org/2000/svg" width="390" height="566" viewBox="0 0 390 566" fill="none" >
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
                </svg>
            </div>
        </div>
    );
};

export default GetQuote;
