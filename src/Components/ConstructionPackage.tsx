"use client";
import React, { useState } from 'react';
import { Description, Section, SubTitle, Title } from './Tag';
import { PackageDetails } from '@/lib/PackageDetails';

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
  }[];
};

interface ConstructionCardProps {
  packageDetails: PackageDetails;
}

const ConstructionPackage = () => {
  const dataKeys = Object.keys(PackageDetails);

  return (
    <Section className="flex flex-col justify-center bg-[#f7f7f7] !w-full">
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
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const ConstructionCard: React.FC<ConstructionCardProps> = ({ packageDetails }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
        return (
          <div key={section.title} className={`py-3 ${packageDetails.data.length-1 === index ? "pb-0":"border-b border-[rgba(0,0,0,0.05)]"}`}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <Description className="text-black">{section.title}</Description>
              <button
                className={`w-6 h-6 text-sm font-bold rounded-sm ${isOpen ? 'bg-[#F55252]' : 'bg-[#F55252]'}`}
              >
                {isOpen ? '–' : '+'}
              </button>
            </div>

            {isOpen && (
              <ul className="mt-3 text-sm text-black text-left space-y-1 pl-2">
                {section.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ConstructionPackage;
