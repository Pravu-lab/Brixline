import React from 'react';
import Image from 'next/image';
import { Section, Title } from './Tag';
import GetQuote from './GetQuote';

const AboutHero = () => {
    return (
        <Section className="relative h-[100vh] w-full !py-0">
            <div className="relative z-10 h-full flex w-[90%] sm:w-11/12 mx-auto items-start sm:items-center  flex-col sm:flex-row justify-end sm:justify-between">

                {/* Text Section */}
                <div className="flex justify-end items-start sm:items-end w-fit h-fit sm:h-full">

                    {/* Desktop Content */}
                        <Title className="leading-[100%] text-left !text-[40px] sm:!text-[82px] font-normal">
                            Building Dreams for<br />
                            Bengaluru People
                        </Title>


                </div>

                {/* GetQuote SVG */}
                <div className='mt-[20px] sm:mt-0 '>
                <GetQuote classname="justify-start" />
                </div>
            </div>

            {/* Background Image */}
            <div className="absolute bottom-0 left-0 w-full h-full">
                <Image
                    src="/about-us.png"
                    alt="house-image-2"
                    fill
                    className="object-cover object-left"
                />
            </div>
        </Section>
    );
};

export default AboutHero;
