import Image from 'next/image';
import { Description, SubTitle, Title } from './Tag';

export default function FooterSection() {
  const stats = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12V20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3333 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3333 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6667 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6667 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      value: '65+',
      label: 'HOMES',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12V20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3333 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3333 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6667 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6667 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      value: '30k+',
      label: 'Sq. Ft. Delivered',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12V20" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3333 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.3333 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12H28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6667 20V28" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6667 4V12" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      value: '400+',
      label: 'Quality Checks',
    },
  ];
  return (
    <footer>
      <div>
        <div className="grid lg:grid-cols-2 gap-8 pl-0 sm:pl-12">
          {/* Left Content */}
          <div className='px-4 py-16'>
            <Title className="text-black mb-4 text-left">
              Hire The Best House Construction Service
            </Title>
            <SubTitle className="text-gray-600 mb-8 text-left">
              Backed by renowned investors who believe in our vision to revolutionize the sports ecosystem.
            </SubTitle>

            <div className="flex  items-center justify-between mt-12">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-start w-full gap-[20px]`}
                >
                  {item.icon}
                  <div>
                  <h4 className="font-bold text-lg mt-2 text-black">{item.value}</h4>
                  <Description className="text-sm mt-1 text-center text-black opacity-70">{item.label}</Description>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center items-end">
            <Image
              src="/footerImg.png" // make sure this image exists in /public folder
              alt="House Illustration"
              width={600}
              height={400}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
    <div className=' text-white pt-16 bg-black'>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Address */}
          <div className='col-span-2 sm:col-span-1'>
            <div className="text-2xl font-bold flex items-center space-x-2 max-w-[261px]">
              <Image
                src="/logo.png"
                alt="house-image-2"
                fill
                className="object-cover object-left !static"
              />
            </div>
            <p className="text-xs opacity-80 mt-[42px] leading-relaxed">
              FRANCISCO TECHNOLOGY PRIVATE LIMITED. <br />
              154, 19TH B MAIN RD, KHB COLONY, 6TH BLOCK, <br />
              KORAMANGALA, BENGALURU, KARNATAKA 560095
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 sm:ml-20">
            <a href="#" className="hover:text-gray-400 text-[16px]">Home</a>
            <a href="#" className="hover:text-gray-400 text-[16px]">About Us</a>
            <a href="#" className="hover:text-gray-400 text-[16px]">How It Works</a>
          </div>

          <div className="flex flex-col space-y-3 sm:ml-20">
            <a href="#" className="hover:text-gray-400 text-[16px]">Cost Estimator</a>
            <a href="#" className="hover:text-gray-400 text-[16px]">Contact Us</a>
          </div>

          {/* Social Links */}
          <div className='flex sm:flex-col sm:items-end col-span-2 sm:col-span-1 sm:justify-normal justify-between items-center'>
            <h4 className="text-[20px] text-white opacity-60 font-semibold sm:mb-3 ">FOLLOW US</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M22 4.82815C22 4.82815 21.3 6.92815 20 8.22815C21.6 18.2281 10.6 25.5281 2 19.8281C4.2 19.9281 6.4 19.2281 8 17.8281C3 16.3281 0.5 10.4281 3 5.82815C5.2 8.42815 8.6 9.92815 12 9.82815C11.1 5.62815 16 3.22815 19 6.02815C20.1 6.02815 22 4.82815 22 4.82815Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M16 8.82812C17.5913 8.82812 19.1174 9.46027 20.2426 10.5855C21.3679 11.7107 22 13.2368 22 14.8281V21.8281H18V14.8281C18 14.2977 17.7893 13.789 17.4142 13.4139C17.0391 13.0388 16.5304 12.8281 16 12.8281C15.4696 12.8281 14.9609 13.0388 14.5858 13.4139C14.2107 13.789 14 14.2977 14 14.8281V21.8281H10V14.8281C10 13.2368 10.6321 11.7107 11.7574 10.5855C12.8826 9.46027 14.4087 8.82812 16 8.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9.82812H2V21.8281H6V9.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 6.82812C5.10457 6.82812 6 5.93269 6 4.82812C6 3.72356 5.10457 2.82812 4 2.82812C2.89543 2.82812 2 3.72356 2 4.82812C2 5.93269 2.89543 6.82812 4 6.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M18 2.82812H15C13.6739 2.82813 12.4021 3.35491 11.4645 4.29259C10.5268 5.23027 10 6.50204 10 7.82812V10.8281H7V14.8281H10V22.8281H14V14.8281H17L18 10.8281H14V7.82812C14 7.56291 14.1054 7.30855 14.2929 7.12102C14.4804 6.93348 14.7348 6.82812 15 6.82812H18V2.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M17 2.82812H7C4.23858 2.82812 2 5.0667 2 7.82812V17.8281C2 20.5895 4.23858 22.8281 7 22.8281H17C19.7614 22.8281 22 20.5895 22 17.8281V7.82812C22 5.0667 19.7614 2.82812 17 2.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.9997 12.1984C16.1231 13.0307 15.981 13.8806 15.5935 14.6274C15.206 15.3742 14.5929 15.9798 13.8413 16.3581C13.0898 16.7364 12.2382 16.868 11.4075 16.7344C10.5768 16.6007 9.80947 16.2085 9.21455 15.6136C8.61962 15.0187 8.22744 14.2513 8.09377 13.4206C7.96011 12.59 8.09177 11.7383 8.47003 10.9868C8.84829 10.2353 9.45389 9.62217 10.2007 9.23467C10.9475 8.84717 11.7975 8.70501 12.6297 8.82843C13.4786 8.95431 14.2646 9.34989 14.8714 9.95673C15.4782 10.5636 15.8738 11.3495 15.9997 12.1984Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 7.32812H17.51" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 py-6 text-sm px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto">
        <span className="opacity-60">BENGALURU</span>
        <span className="opacity-60">BRIXLINE ©ALL RIGHTS RESERVED 2025</span>
        <span className="opacity-60">ENGLISH / HINDI</span>
      </div>

      {/* Large Brixline Text */}
      <div className="text-[18vw] font-bold text-white/5 tracking-tighter text-center leading-none">
        <Image
          src="/large-logo.png"
          alt="house-image-2"
          height={2000}
          width={2000}
          className="object-cover object-left !static"
        />
      </div>
      </div>
    </footer>
  );
}
