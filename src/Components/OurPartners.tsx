import React from 'react'
import { Section, SubTitle, Title } from './Tag'
import Image from 'next/image'
const OurPartners = () => {
  return (
    <Section className='!w-full flex flex-col items-center '>
      <SubTitle className='text-center'>
        OUR PARTNERS
      </SubTitle>
      <Title className='text-center text-black'>
        Winning collaborations that<br/>
        produce winning homes.
      </Title>
      <div className="flex gap-10 sm:gap-[120px] overflow-auto w-full justify-self-start sm:justify-center">
        <Image
          src="/partner1.png"
          alt="house-image-2"
          width={500}
          height={500}
          className="max-w-[122px] w-full"
        />
        <Image
          src="/partner2.png"
          alt="house-image-2"
          width={500}
          height={500}
          className="max-w-[122px] w-full"
        />
        <Image
          src="/partner3.png"
          alt="house-image-2"
          width={500}
          height={500}
          className="max-w-[122px] w-full"
        />
        <Image
          src="/partner4.png"
          alt="house-image-2"
          width={500}
          height={500}
          className="max-w-[122px] w-full"
        />
        <Image
          src="/partner5.png"
          alt="house-image-2"
          width={500}
          height={500}
          className="max-w-[122px] w-full"
        />
        <Image
          src="/partner6.png"
          alt="house-image-2"
          width={500}
          height={500}
          className="max-w-[122px] w-full"
        />
      </div>

    </Section>
  )
}

export default OurPartners