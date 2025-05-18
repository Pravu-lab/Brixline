"use client";
import React, { useState } from 'react';
import { Description, Section, SubTitle, Title } from './Tag';
import { PackageDetails } from '@/lib/PackageDetails';
import Image from 'next/image';

type Package = {
  basic_package: PackageDetails;
  standard_package: PackageDetails;
  premium_package: PackageDetails;
  elite_package: PackageDetails;
};

type PackageDetails = {
  name: string;
  price: string;
  desc: string;
  data: {
    title: string;
    items: string[];
    image?: string;
  }[];
};

interface ConstructionCardProps {
  packageDetails: PackageDetails;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const ConstructionPackage = () => {
  const dataKeys = Object.keys(PackageDetails);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="flex flex-col justify-center bg-[#f7f7f7] !w-full py-32">
      <div className=" m-auto text-center">
        <SubTitle>DISCOVER</SubTitle>
        <Title className="text-black">
          Our Home Construction<br /> Packages
        </Title>
        <Description className="text-black opacity-70 text-center">
          Your Perfect Home, Designed & Built for You. Hassle-free, On-Time,
          <br />
          and Within Budget.
        </Description>

        <div className="flex justify-between gap-6 sm:flex-nowrap flex-wrap">
          {dataKeys.map((sectionKey) => (
            <ConstructionCard
              key={sectionKey}
              packageDetails={PackageDetails[sectionKey as keyof Package]}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const ConstructionCard: React.FC<ConstructionCardProps> = ({ 
  packageDetails, 
  openIndex, 
  setOpenIndex 
}) => {
  return (
    <div className="mt-6 w-full shadow-[0px_34px_64px_0px_#00000017] pb-12 px-4 max-h-[728px] overflow-y-scroll bg-white min-w-[316px] sm:max-w-[316px]">
      <div className="sticky bg-white text-center top-0 pt-12">
        <div className="text-black text-[40px] font-extrabold mb-4">
          {packageDetails.price}
          <br />
          <p className="text-sm text-black">{packageDetails.desc}</p>
        </div>

        <SubTitle>{packageDetails.name}</SubTitle>
      </div>

      {packageDetails.data.map((section, index) => {
        const isOpen = openIndex === index;
        const isCommercialSection = section.title.toLowerCase().includes('commercial');
        return (
          <div key={section.title} className={`py-3 ${packageDetails.data.length-1 === index ? "pb-0":"border-b border-[rgba(0,0,0,0.05)]"}`}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <Description className="text-black">{section.title}</Description>
              <button
                className={`cursor-pointer w-6 h-6 text-sm font-bold rounded-sm flex items-center justify-center ${isOpen ? 'bg-[#FEEEEE]' : 'bg-[#F55252]'}`}
              >
                {isOpen ? 
              <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none"> {/* - */}
              <path d="M2 7H12" stroke="red" strokeWidth="2" strokeLinecap="round" />
              </svg>
                 : 
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
              <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="2"/>
              </svg>
                 }
             </button>
            </div>

            {isOpen && (
              <div className="mt-3">
                {isCommercialSection && section.image ? (
                  <div className="w-full h-auto">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <ul className="text-sm text-black text-left space-y-1 pl-2">
                    {section.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ConstructionPackage;