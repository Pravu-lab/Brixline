import React from 'react'
import GetQuote from './GetQuote'
import Image from 'next/image'

const HowItWorks = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-start sm:px-8 md:px-16 py-12 md:py-20 gap-y-10 md:gap-[91px]">
            {/* Left Section */}
            <div className="w-full md:w-[65%] order-1 md:order-0 px-4 md:px-0">
                <h1 className="text-black text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-medium leading-tight tracking-tight">
                    Constructing Spaces You’ll Love to Call Home
                </h1>
                <p className="text-black text-base sm:text-lg mt-4 mb-6 max-w-[90%]">
                    We blend industry expertise with your vision to build homes that reflect your lifestyle. Our team combines youthful energy with experienced insight for balanced, innovative execution. From start to finish, we ensure a smooth, transparent, and stress-free construction journey.
                </p>
                <Image
                    src="/howitworks.png"
                    alt="house-image-2"
                    width={456}
                    height={585}
                    className="w-full hidden md:block"
                />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[35%] order-0 md:order-1 px-4 py-16 md:px-0 md:py-0 mobile-background-image">
                <GetQuote />
            </div>
        </div>
    )
}

export default HowItWorks