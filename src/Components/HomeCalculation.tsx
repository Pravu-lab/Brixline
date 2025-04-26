import React from 'react'
import { Button, Description, Title } from './Tag'

const HomeCalculation = () => {
  return (
    <section className='bg-[#000] text-center pt-10 pb-16 flex flex-col gap-2 items-center relative'>
      <Title className='text-white'>
        Home Construction Cost <br />Calculator
      </Title>
      <Description className='text-white mb-14 font-bold leading-[140%]'>
        Your Perfect Home, Designed & Built for You. <br />Hassle-free, On-Time, and Within Budget.
      </Description>
      <Button className='text-white border-white w-[320px]'>
        CALCULATE NOW
      </Button>
      <div className="absolute w-full overflow-hidden bottom-0">
        <div className="ticker flex nowrap align-baseline h-full">
          <img src="/scale.svg" alt="Scale Decoration" className="inline-block h-full" />
          <img src="/scale.svg" alt="Scale Decoration" className="inline-block h-full" />
        </div>
      </div>

    </section>
  )
}

export default HomeCalculation
