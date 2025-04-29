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

    <div className='flex w-[90%] m-auto items-center justify-center flex-col pb-16'>
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
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M27.0665 17.3333C27.0665 23.9999 22.3998 27.3333 16.8532 29.2666C16.5627 29.365 16.2472 29.3603 15.9598 29.2533C10.3998 27.3333 5.73315 23.9999 5.73315 17.3333V7.99995C5.73315 7.64633 5.87363 7.30719 6.12368 7.05714C6.37373 6.80709 6.71287 6.66662 7.06649 6.66662C9.73315 6.66662 13.0665 5.06662 15.3865 3.03995C15.669 2.79861 16.0283 2.66602 16.3998 2.66602C16.7714 2.66602 17.1307 2.79861 17.4132 3.03995C19.7465 5.07995 23.0665 6.66662 25.7332 6.66662C26.0868 6.66662 26.4259 6.80709 26.676 7.05714C26.926 7.30719 27.0665 7.64633 27.0665 7.99995V17.3333Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: '10-Year Structural Warranty',
            desc: 'It’s a long-lasting quality you can trust.',
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M15.4668 13.3335V18.6668H20.8001" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.4668 18.6665L17.5135 16.5265C18.2788 15.7909 19.2088 15.2487 20.226 14.9451C21.2432 14.6414 22.3183 14.5851 23.3616 14.7807C24.405 14.9763 25.3866 15.4183 26.2247 16.0698C27.0628 16.7214 27.7332 17.5636 28.1801 18.5265" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.1333 2.6665V7.99984" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.8 24L26.7533 26.14C25.988 26.8756 25.058 27.4178 24.0408 27.7214C23.0236 28.0251 21.9485 28.0815 20.9052 27.8858C19.8618 27.6902 18.8802 27.2482 18.0421 26.5967C17.204 25.9452 16.5336 25.1029 16.0867 24.14" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.8001 29.3333V24H23.4668" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.8 11.3335V8.00016C28.8 7.29292 28.5191 6.61464 28.019 6.11454C27.5189 5.61445 26.8406 5.3335 26.1334 5.3335H7.46672C6.75947 5.3335 6.08119 5.61445 5.5811 6.11454C5.081 6.61464 4.80005 7.29292 4.80005 8.00016V26.6668C4.80005 27.3741 5.081 28.0524 5.5811 28.5524C6.08119 29.0525 6.75947 29.3335 7.46672 29.3335H13.2" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.80005 13.3335H10.1334" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.4668 2.6665V7.99984" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: 'Build Now, Pay Later',
            desc: 'Easy EMI and construction finance options.',
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M16.2 29.3332C23.5638 29.3332 29.5334 23.3636 29.5334 15.9998C29.5334 8.63604 23.5638 2.6665 16.2 2.6665C8.83624 2.6665 2.8667 8.63604 2.8667 15.9998C2.8667 23.3636 8.83624 29.3332 16.2 29.3332Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 10H20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13.3335H20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16.6665L17.6667 21.9998" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16.6665H14" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 16.6667C18.4447 16.6667 18.4447 10 14 10" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: 'Zero Cost Overruns',
            desc: 'Transparent pricing with no hidden fees.',
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M21.2363 17.1865L23.2563 28.5545C23.2789 28.6884 23.2601 28.826 23.2024 28.9489C23.1447 29.0718 23.0509 29.1741 22.9335 29.2423C22.8161 29.3104 22.6806 29.341 22.5453 29.3301C22.41 29.3192 22.2812 29.2673 22.1763 29.1812L17.4029 25.5985C17.1725 25.4264 16.8926 25.3334 16.6049 25.3334C16.3173 25.3334 16.0374 25.4264 15.8069 25.5985L11.0256 29.1799C10.9207 29.2658 10.7921 29.3177 10.6569 29.3286C10.5218 29.3395 10.3865 29.309 10.2691 29.241C10.1518 29.1731 10.058 29.071 10.0001 28.9483C9.94234 28.8256 9.9233 28.6883 9.94559 28.5545L11.9643 17.1865" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.6001 18.6665C21.0184 18.6665 24.6001 15.0848 24.6001 10.6665C24.6001 6.24823 21.0184 2.6665 16.6001 2.6665C12.1818 2.6665 8.6001 6.24823 8.6001 10.6665C8.6001 15.0848 12.1818 18.6665 16.6001 18.6665Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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