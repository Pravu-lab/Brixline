import Image from 'next/image';
import { Description, SubTitle, Title } from './Tag';

export default function FooterSection() {
  const stats = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <path d="M20 28.3281V17.6615C20 17.3078 19.8595 16.9687 19.6095 16.7186C19.3594 16.4686 19.0203 16.3281 18.6667 16.3281H13.3333C12.9797 16.3281 12.6406 16.4686 12.3905 16.7186C12.1405 16.9687 12 17.3078 12 17.6615V28.3281" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13.6611C3.99991 13.2732 4.08445 12.8899 4.24772 12.538C4.41099 12.1862 4.64906 11.8742 4.94533 11.6238L14.2787 3.62509C14.76 3.2183 15.3698 2.99512 16 2.99512C16.6302 2.99512 17.24 3.2183 17.7213 3.62509L27.0547 11.6238C27.3509 11.8742 27.589 12.1862 27.7523 12.538C27.9156 12.8899 28.0001 13.2732 28 13.6611V25.6611C28 26.3683 27.719 27.0466 27.219 27.5467C26.7189 28.0468 26.0406 28.3278 25.3333 28.3278H6.66667C5.95942 28.3278 5.28115 28.0468 4.78105 27.5467C4.28095 27.0466 4 26.3683 4 25.6611V13.6611Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      value: '65+',
      label: 'Homes',
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
      value: '3.6L',
      label: 'Sq. Ft. Delivered',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <path d="M20.636 17.5146L22.656 28.8826C22.6786 29.0165 22.6598 29.1541 22.6022 29.277C22.5445 29.3999 22.4507 29.5022 22.3332 29.5704C22.2158 29.6385 22.0804 29.6692 21.9451 29.6583C21.8098 29.6473 21.681 29.5954 21.576 29.5093L16.8027 25.9266C16.5722 25.7545 16.2923 25.6615 16.0047 25.6615C15.717 25.6615 15.4371 25.7545 15.2067 25.9266L10.4253 29.508C10.3204 29.5939 10.1918 29.6458 10.0567 29.6567C9.92151 29.6676 9.78623 29.6371 9.66889 29.5691C9.55154 29.5012 9.45771 29.3991 9.3999 29.2764C9.34209 29.1538 9.32305 29.0164 9.34534 28.8826L11.364 17.5146" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 18.9951C20.4183 18.9951 24 15.4134 24 10.9951C24 6.57684 20.4183 2.99512 16 2.99512C11.5817 2.99512 8 6.57684 8 10.9951C8 15.4134 11.5817 18.9951 16 18.9951Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      value: '431+',
      label: 'Quality Checks',
    },
  ];
  return (
    <footer>
      <div>
        <div className="grid lg:grid-cols-2 gap-8 pl-0 sm:pl-12">
          {/* Left Content */}
          <div className='px-1 py-16'>
            <Title className="text-black mb-4 text-center md:text-left">
              Get the best-in class home construction service:
            </Title>
            <h2 className="px-1 text-[12px] sm:text-[16px] font-bold uppercase text-gray-600 mb-8 text-center md:text-left">
              Backed by top investors committed to our mission of revolutionizing the home construction industry.
            </h2>

            <div className="flex  items-center justify-between mt-12">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-start w-full gap-1 md:gap-[16px] px-0 md:px-2`}
                >
                  <div className='flex justify-center items-center'>
                  {item.icon}
                  </div>
          
                  <div>
                  <h4 className="flex justify-start items-center font-bold text-lg mt-2 text-black">{item.value}</h4>
                  <p className="flex justify-center items-center my-0 font-bold leading-[140%] text-xs text-black opacity-70">{item.label}</p>
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
    <div className='text-white pt-16 bg-black'>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Address */}
          <div className='col-span-2 sm:col-span-1'>
            <div className="text-2xl font-bold flex items-center space-x-2 max-w-[261px]">
              <Image
                src="/Logo.png"
                alt="house-image-2"
                fill
                className="object-cover object-left !static"
              />
            </div>
           <p className="text-xs opacity-80 mt-[42px] leading-relaxed">
              FRANCISCO TECHNOLOGY PRIVATE LIMITED. <br />
              opp To Jyoti Niwas College No: 126, 4th floor, KHB Colony<br />
              5th Block KORAMANGALA, BENGALURU, KARNATAKA 560095 </p>
            {/* <div className='mt-6'>
            <Image
                src="/svg/stars.svg"
                alt="stars"
                height={15}
                width={91}
                className="h-[15px]"
              />
              <p>Rated 4.7/5 Based on  4176 customer ratings</p>
            </div> */}
          
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 sm:ml-20">
            <a href="/" className="hover:text-gray-400 text-[16px]">Home</a>
            <a href="/about" className="hover:text-gray-400 text-[16px]">About Us</a>
            <a href="/how-it-works" className="hover:text-gray-400 text-[16px]">How It Works</a>
             <a href="/cost-estimator" className="hover:text-gray-400 text-[16px]">Cost Estimator</a>
             <a href="/zero-cost-emi" className="hover:text-gray-400 text-[16px]">Zero Cost EMI</a>
          </div>

          <div className="flex flex-col space-y-3 sm:ml-20">
            <a href="/career" className="hover:text-gray-400 text-[16px]">Career</a>
            <a href="/join-us-as-professional" className="hover:text-gray-400 text-[16px]">Join Us As Professional</a>
            <a href="/channel-partner" className="hover:text-gray-400 text-[16px]">Channel Partner</a>
            <a href="/contact-us" className="hover:text-gray-400 text-[16px]">Contact Us</a>
          </div>

          {/* Social Links */}
          <div className='flex sm:flex-col sm:items-end col-span-2 sm:col-span-1 sm:justify-normal justify-between items-center'>
            <h4 className="text-[20px] text-white opacity-60 font-semibold sm:mb-3 ">FOLLOW US</h4>
            <div className="flex space-x-4 text-xl">
              <a href="https://x.com/Brixline_com" target="_blank"> {/*twitter */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                 <path d="M22 4.82815C22 4.82815 21.3 6.92815 20 8.22815C21.6 18.2281 10.6 25.5281 2 19.8281C4.2 19.9281 6.4 19.2281 8 17.8281C3 16.3281 0.5 10.4281 3 5.82815C5.2 8.42815 8.6 9.92815 12 9.82815C11.1 5.62815 16 3.22815 19 6.02815C20.1 6.02815 22 4.82815 22 4.82815Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {/* <a href="#"> linked in */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M16 8.82812C17.5913 8.82812 19.1174 9.46027 20.2426 10.5855C21.3679 11.7107 22 13.2368 22 14.8281V21.8281H18V14.8281C18 14.2977 17.7893 13.789 17.4142 13.4139C17.0391 13.0388 16.5304 12.8281 16 12.8281C15.4696 12.8281 14.9609 13.0388 14.5858 13.4139C14.2107 13.789 14 14.2977 14 14.8281V21.8281H10V14.8281C10 13.2368 10.6321 11.7107 11.7574 10.5855C12.8826 9.46027 14.4087 8.82812 16 8.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9.82812H2V21.8281H6V9.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 6.82812C5.10457 6.82812 6 5.93269 6 4.82812C6 3.72356 5.10457 2.82812 4 2.82812C2.89543 2.82812 2 3.72356 2 4.82812C2 5.93269 2.89543 6.82812 4 6.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a> */}
              <a href="https://www.facebook.com/people/Brixline/61574932005740" target="_blank"> {/*facebook */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M18 2.82812H15C13.6739 2.82813 12.4021 3.35491 11.4645 4.29259C10.5268 5.23027 10 6.50204 10 7.82812V10.8281H7V14.8281H10V22.8281H14V14.8281H17L18 10.8281H14V7.82812C14 7.56291 14.1054 7.30855 14.2929 7.12102C14.4804 6.93348 14.7348 6.82812 15 6.82812H18V2.82812Z" stroke="#F55252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://www.instagram.com/brixline_com/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" target="_blank"> {/*instagram */}
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
