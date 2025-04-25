import React from 'react'
import { Description, Section, SubTitle, Title } from './Tag'
import Image from 'next/image'

const Aboutus = () => {
  return (
<Section className='bg-black !w-full overflow-y-hidden'>
    <div className='flex w-[90%] m-auto gap-16 flex-col sm:flex-row'>
        <div className='w-full sm:w-[60%]'>
                    <Image
                      src="/aboutus1.png"
                      alt="house-image-2"
                      width={456}
                      height={585}
                      className="w-full"
                    />
        </div>
        <div className='w-full flex flex-col justify-center'>
            <SubTitle className='text-left'>
                About us
            </SubTitle>
            <Title className='text-left text-white'>
            We are a multifaceted construction company
            </Title>
            <Description className='text-white'>
            We are a multifaceted construction company trusted by hundreds of homeowners Bengaluru. We offer a wide range of construction services from architectural construction to interior renovation.<br/>
            We currently have more than 65+ residential projects under our belt. We take pride in providing unbeatable quality & precision in our turnkey construction service.<br/>
            Our track record is a green flag with 100% on-time project completion.
            </Description>
        </div>
    </div>

    <div className='flex w-[90%] m-auto gap-16 flex-col sm:flex-row justify-end py-16'>
    <Image
                      src="/aboutus2.png"
                      alt="house-image-2"
                      width={456}
                      height={585}
                      className="w-full sm:w-[60%]"
                    />
    </div>

    <div className=' flex w-[90%] m-auto items-center justify-center flex-col pb-16'>
        <SubTitle className='text-center'>
        OUR VISION
        </SubTitle>
        <Title>
        What we focus and strive for
        </Title>
        <Description className='text-center'>
        Your Perfect Home, Designed & Built for You. Hassle-free,<br/> On-Time, and Within Budget.
        </Description>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center w-full mt-12">
        {[
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12V20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: '10-Month Express Delivery',
            desc: 'Dream home delivered in just 10 months.',
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12V20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: '10-Year Structural Warranty',
            desc: 'It’s a long-lasting quality you can trust.',
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12V20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: 'Build Now, Pay Later',
            desc: 'Easy EMI and construction finance options.',
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12V20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: 'Zero Cost Overruns',
            desc: 'Transparent pricing with no hidden fees.',
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12V20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: '400+ Quality Checks',
            desc: 'Advanced standards ensuring perfection.',
          },
        ].map((item, i,arr) => (
            <div
            key={i}
            className={`flex flex-col items-start justify-between px-4 py-6 
                ${
      i === arr.length - 1 ? 'col-span-2 sm:col-span-1' : ''
    }`}
          >
            {item.icon}
            <h4 className="text-white font-semibold text-sm mt-4 text-left">{item.title}</h4>
            <Description className="text-white opacity-70 mt-1 text-left">{item.desc}</Description>
          </div>
          
        ))}
      </div>
    </div>
    <div className='absolute top-0 w-full'>
    <Image
                      src="/union.png"
                      alt="house-image-2"
                      width={456}
                      height={585}
                      className="w-full h-full"
                    />
    </div>
</Section>
)
}

export default Aboutus