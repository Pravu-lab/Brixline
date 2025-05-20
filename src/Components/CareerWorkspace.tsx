"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface CareerBox {
  id: number;
  title: string;
  description: React.ReactNode;
  image: string;
}

const CareerWork: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const careerData: CareerBox[] = [
    {
      id: 1,
      title: "Director - DevOps",
      description: (
        <>
      <span className='flex flex-col'>
        <span className='flex-1'>
        <span className="inline-block mr-2">ON SITE</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className="ml-2 mr-2">FULL TIME</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className='ml-2'>MUMBAI</span>
        </span>

        <span className='flex-1 pt-40'>
           <Image 
          src="/arrowx2.png"
          alt="location"
          width={20}
          height={20}
          className="inline-block"
            />
            <span className='pl-2'>Apply Now</span>
        </span>

      </span>
        </>
         
      ),
      image: "/placeholder.png"
    },
    {
      id: 2,
      title: "Data Scientist",
      description: (
        <>
        <span className='flex flex-col'>
        <span className='flex-1'>
        <span className="inline-block mr-2">ON SITE</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className="ml-2 mr-2">FULL TIME</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className='ml-2'>MUMBAI</span>
        </span>

        <span className='flex-1 pt-40'>
           <Image 
          src="/arrowx2.png"
          alt="location"
          width={20}
          height={20}
          className="inline-block"
            />
            <span className='pl-2 font-semibold'>Apply Now</span>
        </span>

      </span>
        </>
      ),
      image: "/placeholder2.png"
    },
    {
      id: 3,
      title: "UX Designer",
      description: (
        <>
        <span className='flex flex-col'>
        <span className='flex-1'>
        <span className="inline-block mr-2">ON SITE</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className="ml-2 mr-2">FULL TIME</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className='ml-2'>MUMBAI</span>
        </span>

        <span className='flex-1 pt-40'>
           <Image 
          src="/arrowx2.png"
          alt="location"
          width={20}
          height={20}
          className="inline-block"
            />
            <span className='pl-2 font-semibold'>Apply Now</span>
        </span>

      </span>
        </>
      ),
      image: "/placeholder.png"
    },
    {
      id: 4,
      title: "Product Manager",
      description: (
        <span className='flex flex-col'>
        <span className='flex-1'>
        <span className="inline-block mr-2">ON SITE</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className="ml-2 mr-2">FULL TIME</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className='ml-2'>MUMBAI</span>
        </span>

        <span className='flex-1 pt-40'>
           <Image 
          src="/arrowx2.png"
          alt="location"
          width={20}
          height={20}
          className="inline-block"
            />
            <span className='pl-2 font-semibold'>Apply Now</span>
        </span>

      </span>
      ),
      image: "/placeholder2.png"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      description: (
        <span className='flex flex-col'>
        <span className='flex-1'>
        <span className="inline-block mr-2">ON SITE</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className="ml-2 mr-2">FULL TIME</span>
        <Image 
          src="/union22.png"
          alt="location"
          width={10}
          height={10}
          className="inline-block"
        />
        <span className='ml-2'>MUMBAI</span>
        </span>

        <span className='flex-1 pt-40'>
           <Image 
          src="/arrowx2.png"
          alt="location"
          width={20}
          height={20}
          className="inline-block"
            />
            <span className='pl-2 font-semibold'>Apply Now</span>
        </span>

      </span>
      ),
      image: "/placeholder.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === careerData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? careerData.length - 1 : prevIndex - 1
    );
  };

  return (
   <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-0 pt-20 text-center pl-0 md:pl-81">
          Explore Career Opportunities
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Left Column - Image (Desktop only) */}
          <div className="hidden md:block w-full md:w-2/5 pr-8 -mt-20 ">
            <img
              src={careerData[currentIndex].image}
              alt={careerData[currentIndex].title}
              className="w-full h-120 object-cover"
            />
            <p></p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/5 relative">
            {/* Mobile View - Horizontal Scrollable Boxes */}
            <div className="md:hidden flex overflow-x-auto space-x-4 scrollbar-hide pb-4 text-black">
              {careerData.map((item) => (
                <div key={item.id} className="min-w-[250px] bg-gray-200 p-4 flex-shrink-0">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-black text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Desktop View - Slider */}
  <div className="hidden md:flex relative h-96 pt-17 overflow-visible">
    <div className="flex space-x-6 pl-12">
      {careerData.map((item, index) => {
        const position = index - currentIndex;
        let boxClass = "w-96 flex-shrink-0 p-8 transition-all duration-300 h-80";

        if (position === 0) {
          boxClass += " bg-red-500 text-white transform scale-105 z-10";
        } else if (position === 1) {
          boxClass += " bg-gray-300 text-black ml-[-5px] z-5";
        } else if (position === 2) {
          boxClass += " bg-gray-300 ml-[-5px] opacity-70 z-0 w-[300px]";
        } else if (position === -1 || position === 3) {
          boxClass += " hidden";
        } else {
          boxClass += " hidden";
        }

                return (
                  <div key={item.id} className={boxClass}>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className={position === 0 ? "text-white" : "text-gray-600"}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
</div>
            {/* Slider Controls - Only on Desktop */}
            <div className="hidden md:flex justify-end mt-8 space-x-4">
              <button onClick={prevSlide} aria-label="Previous">
                <Image
                  src="/svg/left-button.svg"
                  alt="go-previous"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px]"
                />
              </button>
              <button onClick={nextSlide} aria-label="Next">
                <Image
                  src="/svg/right-button.svg"
                  alt="go-next"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerWork;
