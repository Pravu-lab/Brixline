"use client"
import Image from "next/image";
import { useState } from "react";

const CareerDream = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    
    const testimonials = [
        {
            image: "/profile2.png",
            quote: "Every day feels like game day here — fast-paced, collaborative, and full of purpose",
            name: "Cella Paul",
            position: "Lead Architect"
        },
        {
            image: "/profile2.png",
            quote: "Working here has been the most rewarding experience of my career",
            name: "John Doe",
            position: "Senior Developer"
        },
        {
            image: "/profile2.png",
            quote: "The culture of innovation and teamwork is truly inspiring",
            name: "Jane Smith",
            position: "Product Manager"
        },
        {
            image: "/profile2.png",
            quote: "I've grown more in one year here than five years at my previous job",
            name: "Mike Johnson",
            position: "UX Designer"
        },
        {
            image: "/profile2.png",
            quote: "The opportunities for learning and impact are unparalleled",
            name: "Sarah Williams",
            position: "Data Scientist"
        }
    ];

    const totalPositions = testimonials.length;

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex((i) => i - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < totalPositions - 1) {
            setDirection(1);
            setCurrentIndex((i) => i + 1);
        }
    };

    return (
        <div className="tracking-wide min-h-screen h-[1050px] md:h-full w-full bg-white bg-cover bg-center bg-no-repeat pt-15 md:pt-30">
            <div className="flex flex-col md:flex-row p-4 md:p-18">
                {/* Left text - unchanged for desktop */}
                <div className="flex flex-col justify-start items-start mb-8 md:mb-0 pl-12 text-center md:text-left md:pl-0">
                    <div className="text-black text-2xl md:text-5xl font-bold">
                        Voice Of The Dream Team
                    </div>
                    <div className="text-gray-700 pt-8 text-sm md:text-base">
                        Hear what it's like to build, grow, and <br/> thrive with us — straight from the people <br/> powering the future of sports.
                    </div>
                    
                    {/* Desktop controls - unchanged */}
                    <div className="hidden md:flex flex-col items-center gap-5 mt-8">
                        <div className="flex gap-5">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className="disabled:opacity-50"
                            >
                                <Image
                                    src="/svg/left-button.svg"
                                    alt="go-previous"
                                    width={60}
                                    height={60}
                                    className="w-[50px] h-[50px]"
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === totalPositions - 1}
                                className="disabled:opacity-50"
                            >
                                <Image
                                    src="/svg/right-button.svg"
                                    alt="go-next"
                                    width={60}
                                    height={60}
                                    className="w-[50px] h-[50px]"
                                />
                            </button>
                        </div>
                        <div className="flex gap-2 mt-4">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        idx === currentIndex ? "bg-[#F55252]" : "bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile layout - column order: text -> image -> testimonial -> slider controls */}
                <div className="md:hidden flex flex-col items-center w-full">
                    {/* Image */}
                <div className="relative w-full h-[400px] overflow-hidden my-2">
    {testimonials.map((testimonial, idx) => (
        <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
                idx === currentIndex ? "translate-x-0" : 
                idx < currentIndex ? "-translate-x-full" : "translate-x-full"
            }`}
        >
            <Image
                src={testimonial.image}
                alt="profile"
                fill
                className="object-cover"
                priority={idx === currentIndex}
            />
        </div>
    ))}
</div>

                    {/* Testimonial text */}
                    <div className="relative bg-gray-200 w-full min-h-[300px] text-black flex flex-col justify-between p-6 overflow-hidden">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className={`absolute top-0 left-0 p-6 w-full h-full transition-transform duration-500 ease-in-out ${
                                    idx === currentIndex ? "translate-x-0" : 
                                    idx < currentIndex ? "-translate-x-full" : "translate-x-full"
                                }`}
                            >
                                <div className="font-extrabold text-lg">{testimonial.quote}</div>
                                <div className="mt-40">
                                    <div className="font-bold">{testimonial.name}</div>
                                    <div className="text-sm">- {testimonial.position}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile slider controls - placed after testimonial */}
                    <div className="flex flex-col items-center gap-5 mt-8 w-full">
                        <div className="flex gap-5">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className="disabled:opacity-50"
                            >
                                <Image
                                    src="/svg/left-button.svg"
                                    alt="go-previous"
                                    width={50}
                                    height={50}
                                    className="w-[40px] h-[40px]"
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === totalPositions - 1}
                                className="disabled:opacity-50"
                            >
                                <Image
                                    src="/svg/right-button.svg"
                                    alt="go-next"
                                    width={50}
                                    height={50}
                                    className="w-[40px] h-[40px]"
                                />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                        idx === currentIndex ? "bg-[#F55252]" : "bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop layout - unchanged */}
                <div className="hidden md:flex flex-1 flex-row items-center justify-center ml-50">
                    <div className="relative w-[250px] h-[350px] overflow-hidden">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className={`absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
                                    idx === currentIndex ? "translate-x-0" : 
                                    idx < currentIndex ? "-translate-x-full" : "translate-x-full"
                                }`}
                            >
                                <Image
                                    src={testimonial.image}
                                    alt="profile"
                                    width={250}
                                    height={250}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="relative bg-gray-200 h-[307px] w-[400px] text-black flex flex-col justify-between p-6 -mt-10 overflow-hidden">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className={`absolute top-0 left-0 p-6 w-full h-full transition-transform duration-500 ease-in-out ${
                                    idx === currentIndex ? "translate-x-0" : 
                                    idx < currentIndex ? "-translate-x-full" : "translate-x-full"
                                }`}
                            >
                                <div className="font-extrabold text-xl">{testimonial.quote}</div>
                                <div className="">
                                    <div className="font-bold">{testimonial.name}</div>
                                    <div className="text-sm">- {testimonial.position}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerDream;