import React from 'react';
import Image from 'next/image';
import { Button, Description, Title } from './Tag';
import Link from 'next/link';

const HomeCalculation = () => {
  return (
    <section className="bg-[#000] text-center pt-10 pb-16 flex flex-col gap-2 items-center relative">
      
      <Title className="text-white">
        Home Construction Cost <br />Calculator
      </Title>

      <Description className="text-white mb-14 font-extralight leading-[140%]">
        Get an estimate of your home construction cost. To help you plan better.
      </Description>

<Link href="/cost-estimator">
 <Button className="text-white border-white w-[320px]"
 disabled>
        COMING SOON
      </Button>
</Link>
     

      {/* Bottom Decoration */}
      <div className="absolute w-full overflow-hidden bottom-0">
        <div className="ticker flex whitespace-nowrap align-baseline h-full">
          <Image
            src="/scale.svg"
            alt="Scale Decoration 1"
            width={500}
            height={100}
            className="inline-block w-full h-full"
          />
          <Image
            src="/scale.svg"
            alt="Scale Decoration 2"
            width={500}
            height={100}
            className="inline-block w-full h-full"
          />
             <Image
            src="/scale.svg"
            alt="Scale Decoration 3"
            width={500}
            height={100}
            className="inline-block w-full h-full"
          />
        </div>
      </div>

    </section>
  );
};

export default HomeCalculation;
