import Image from 'next/image';
import { Description, MainTitle, Section, SubTitle } from './Tag';

export default function OurServicesSection() {
  return (
    <Section className="bg-black text-white flex flex-col gap-12 px-6 py-16 !w-full">
      {/* Top Content */}
      <div className='w-[85%] m-auto flex gap:10 sm:gap-28 flex-col sm:flex-row'>
        <div className="w-full">
          <SubTitle className="text-left">OUR SERVICES</SubTitle>
          <MainTitle className="text-left text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Flawless<br />
            construction powered<br />
            by deep<br />
            expertise.
          </MainTitle>
        </div>
        {/* Card 1 */}
        <div className="relative rounded-lg w-full">
          <div className='relative'>
            <Image
              src="/service1.png"
              alt="Renovation & Remodeling"
              height={1000}
              width={1000}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="absolute bottom-0 flex justify-between items-center mb-4 px-5 w-full">
            <h3 className="text-[32px]/[120%] font-semibold text-white">
              Renovation &<br /> Remodeling
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" fill="#F55252" />
              <rect x="7" y="7" width="13" height="3" fill="white" />
              <rect x="20" y="23" width="13" height="3" transform="rotate(-90 20 23)" fill="white" />
            </svg>
          </div>

        </div>
      </div>


      {/* Bottom Cards (matching style) */}
      <div className='w-[85%] m-auto flex gap-10 sm:gap-28 flex-col sm:flex-row'>
        {/* Card 2 */}
        <div className="relative rounded-lg sm:w-[50%] h-fit">
        <div className='relative'>
           <Image
            src="/service2.png"
            alt="Turn-Key Construction"
            height={1000}
              width={1000}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          </div>
          <div className="absolute bottom-0 mx-auto flex justify-between items-center px-5 mb-4 w-full ">
            <h3 className="text-[32px]/[120%] font-semibold text-white">Turn-Key <br/>Construction</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" fill="#F55252" />
              <rect x="7" y="7" width="13" height="3" fill="white" />
              <rect x="20" y="23" width="13" height="3" transform="rotate(-90 20 23)" fill="white" />
            </svg>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-lg overflow-hidden group w-full md:mt-28">
          <Image
            src="/service3.png"
            alt="Commercial Constructions"
            height={1000}
              width={1000}
            className="object-cover group-hover:scale-105 transition-transform duration-300 aspect-square md:aspect-auto"
          />
          <div className="absolute bottom-0 px-5 mb-4 w-full">
          <h3 className="text-[32px]/[120%] font-semibold text-white">
              Commercial <br/>Constructions
            </h3>
            <Description className='text-white'>
            Crafting efficient, asthetically pleasing spaces for offices, retail outlets, and business hubs.
            </Description>
          </div>
        </div>
      </div>
    </Section>
  );
}
