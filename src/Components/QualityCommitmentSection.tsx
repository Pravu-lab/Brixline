import Image from 'next/image';
import { Section, SubTitle, Title, Description } from './Tag';

export default function QualityCommitmentSection() {
  return (
    <>
    <Section className="bg-black text-white py-20 px-6 flex flex-col items-center gap-16 !w-full ">
      {/* Titles */}
      <div className="text-center max-w-3xl mx-auto">
        <SubTitle className="text-[#F55252]">OUR SERVICES</SubTitle>
        <Title className="text-white text-center font-bold text-4xl sm:text-5xl leading-snug mt-2 mb-4">
          Unmatched Quality,<br />Unwavering Commitment
        </Title>
        <Description className="text-white opacity-50">
          Your Perfect Home, Designed & Built for You. Hassle-free, On-Time, and Within Budget.
        </Description>
      </div>

      {/* House Image */}
      <div className="relative w-full max-w-[60%]">
        <Image
          src="/house.png" // Replace with your actual path
          alt="Home Render"
          width={1200}
          height={600}
          className="w-full object-contain"
        />
      </div>

      {/* Features Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center w-full max-w-6xl mb-40">
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
            <path d="M27.0667 17.3333C27.0667 23.9999 22.4 27.3333 16.8533 29.2666C16.5629 29.365 16.2474 29.3603 15.96 29.2533C10.4 27.3333 5.73334 23.9999 5.73334 17.3333V7.99995C5.73334 7.64633 5.87381 7.30719 6.12386 7.05714C6.37391 6.80709 6.71305 6.66662 7.06667 6.66662C9.73334 6.66662 13.0667 5.06662 15.3867 3.03995C15.6691 2.79861 16.0285 2.66602 16.4 2.66602C16.7715 2.66602 17.1309 2.79861 17.4133 3.03995C19.7467 5.07995 23.0667 6.66662 25.7333 6.66662C26.087 6.66662 26.4261 6.80709 26.6761 7.05714C26.9262 7.30719 27.0667 7.64633 27.0667 7.99995V17.3333Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: '10-Year Structural Warranty',
            desc: 'It’s a long-lasting quality you can trust.',
          },
          {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M15.4667 13.3335V18.6668H20.8" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.4667 18.6665L17.5133 16.5265C18.2787 15.7909 19.2087 15.2487 20.2259 14.9451C21.2431 14.6414 22.3181 14.5851 23.3615 14.7807C24.4049 14.9763 25.3865 15.4183 26.2246 16.0698C27.0627 16.7214 27.7331 17.5636 28.18 18.5265" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.1333 2.6665V7.99984" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.8 24L26.7533 26.14C25.988 26.8756 25.058 27.4178 24.0408 27.7214C23.0236 28.0251 21.9485 28.0815 20.9052 27.8858C19.8618 27.6902 18.8802 27.2482 18.0421 26.5967C17.204 25.9452 16.5336 25.1029 16.0867 24.14" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.8 29.3333V24H23.4667" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.8 11.3335V8.00016C28.8 7.29292 28.519 6.61464 28.0189 6.11454C27.5188 5.61445 26.8406 5.3335 26.1333 5.3335H7.46665C6.75941 5.3335 6.08113 5.61445 5.58104 6.11454C5.08094 6.61464 4.79999 7.29292 4.79999 8.00016V26.6668C4.79999 27.3741 5.08094 28.0524 5.58104 28.5524C6.08113 29.0525 6.75941 29.3335 7.46665 29.3335H13.2" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.79999 13.3335H10.1333" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.4667 2.6665V7.99984" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: 'Build Now, Pay Later',
            desc: 'Easy EMI and construction finance options.',
          },
          {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M16.2 29.3332C23.5638 29.3332 29.5333 23.3636 29.5333 15.9998C29.5333 8.63604 23.5638 2.6665 16.2 2.6665C8.83617 2.6665 2.86664 8.63604 2.86664 15.9998C2.86664 23.3636 8.83617 29.3332 16.2 29.3332Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <path d="M21.2359 17.1865L23.256 28.5545C23.2786 28.6884 23.2598 28.826 23.2021 28.9489C23.1444 29.0718 23.0506 29.1741 22.9332 29.2423C22.8158 29.3104 22.6803 29.341 22.545 29.3301C22.4097 29.3192 22.2809 29.2673 22.1759 29.1812L17.4026 25.5985C17.1722 25.4264 16.8923 25.3334 16.6046 25.3334C16.317 25.3334 16.0371 25.4264 15.8066 25.5985L11.0253 29.1799C10.9204 29.2658 10.7918 29.3177 10.6566 29.3286C10.5215 29.3395 10.3862 29.309 10.2688 29.241C10.1515 29.1731 10.0577 29.071 9.99984 28.9483C9.94203 28.8256 9.923 28.6883 9.94528 28.5545L11.9639 17.1865" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.6 18.6665C21.0183 18.6665 24.6 15.0848 24.6 10.6665C24.6 6.24823 21.0183 2.6665 16.6 2.6665C12.1817 2.6665 8.59998 6.24823 8.59998 10.6665C8.59998 15.0848 12.1817 18.6665 16.6 18.6665Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
            title: '400+ Quality Checks',
            desc: 'Advanced standards ensuring perfection.',
          },
        ].map((item, i) => (
            <div
            key={i}
            className={`flex flex-col items-start justify-between px-4 py-6
              ${i !== 4 ? 'lg:border-r' : ''} 
              ${i % 2 === 0 && i < 2 ? 'sm:border-r' : ''}
              border-white/10`}
          >
            {item.icon}
            <h4 className="text-white font-semibold text-sm mt-4 text-left">{item.title}</h4>
            <Description className="text-white opacity-70 mt-1 text-left">{item.desc}</Description>
          </div>
          
        ))}
      </div>
    </Section>
    <Section className='!py-0'>
          <div className="bg-[#F55252] m-auto text-white w-full max-w-6xl flex mt-[-125px] flex-col sm:flex-row">
          <div className='grid grid-cols-2 gap-0 rounded-xl w-full'>
          <div className="text-left py-7 pl-15 grid">
            <h3 className="text-3xl font-bold">32k</h3>
            <p className="text-sm mt-1">SQ. FT. DELIVERED</p>
          </div>
          <div className="text-left py-7 pl-15 w-fit">
            <h3 className="text-3xl font-bold">15</h3>
            <p className="text-sm mt-1">ONGOING PROJECTS</p>
          </div>
          <div className="text-left py-7 pl-15 w-fit">
            <h3 className="text-3xl font-bold">10 Months</h3>
            <p className="text-sm mt-1">EXPRESS DELIVERY</p>
          </div>
          <div className="text-left py-7 pl-15 w-fit">
            <h3 className="text-3xl font-bold">470+</h3>
            <p className="text-sm mt-1">QUALITY CHECKS</p>
          </div>
        </div>
        <div className='relative flex items-end'>
                    <Image
                      src="/house2.png"
                      alt="Renovation & Remodeling"
                      height={1000}
                      width={1000}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
        </div>
        </Section>
        </>
  );
}
