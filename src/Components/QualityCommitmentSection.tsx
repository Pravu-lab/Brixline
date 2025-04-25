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
          <div className="bg-[#F55252] m-auto text-white w-full max-w-6xl flex mt-[-125px]">
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
