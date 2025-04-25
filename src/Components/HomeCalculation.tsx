import React from 'react'
import { Button, Description, Title } from './Tag'
import Image from 'next/image';


const HomeCalculation = () => {
  return (
    <section className='bg-[#000] text-center py-16 flex flex-col gap-12 items-center relative'>
        <Title className='text-white'>
            Home Construction Cost <br/>Calculator
        </Title>
        <Description className='text-white'>
        Your Perfect Home, Designed & Built for You. <br/>Hassle-free, On-Time, and Within Budget.
        </Description>
        <Button className='text-white border-white w-[320px]'>
        CALCULATE NOW
        </Button>
        <div className=" absolute w-full h-[30px] bottom-0">
        <Image
          src="/Frame 2147225299.png"
          alt="house-image-2"
          fill
          className="object-cover object-left"
        />
        </div>
    </section>
  )
}

export default HomeCalculation