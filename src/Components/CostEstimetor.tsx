import React from 'react'
import { Description, MainTitle, Section } from './Tag'
import Image from "next/image";


const CostEstimetor = () => {
    return (
        <Section className="flex flex-col md:flex-row items-center justify-between py-12 bg-white gap-8">
            {/* Left Side */}
            <div className='text-left w-full'>
                <MainTitle className="text-black text-left">
                    Free House Construction Cost Calculator
                </MainTitle>
                <Description className="mt-6 text-gray-700 text-base md:text-lg">
                    Fill out the form below to get an estimate of house construction costs.
                    Speak to our technical expert for a more accurate pricing.
                </Description>
            </div>

            {/* Right Side */}
            <div className="justify-center w-full hidden sm:flex">
                <Image
                    src="/png/costestimator.png"
                    alt="bookwithus"
                    width={634}
                    height={100}
                    className="block h-full w-full object-cover"
                />
            </div>
        </Section>
    )
}

export default CostEstimetor