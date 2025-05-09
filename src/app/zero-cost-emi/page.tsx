import Image from "next/image";

export default function ZeroCostEMI() {
  return (
    <header className="relative bg-[url('/png/join-us.png')] h-[542px] w-full bg-cover bg-center tracking-wide">
      <div className="absolute inset-0 bg-black/10"></div>

      {/* vishwajit please add header between this  */}

      {/* and this  */}

      <div className="relative mx-auto max-w-screen-xl grid grid-cols-[2fr_1fr] md:grid-cols-3 gap-x-4 gap-y-4 md:gap-0 justify-items-stretch items-stretch pt-20 px-3 md:px-10 overflow-hidden">
        {/* 1st - Title */}
        <div className="md:col-span-3 text-left md:text-center text-white bitter-font font-normal md:font-medium text-[40px] md:text-[82px] leading-[100%] tracking-[-0.02em] pb-0 pt-12 md:pb-6">
          Join us as a <br className="hidden md:block" />
          <div className="bitter-font hidden md:block">Contractor Partner</div>
          <div className="bitter-font block md:hidden">professionals</div>
        </div>

        {/* 4th - Symbol */}
        <div className="col-start-2 row-start-1 md:col-start-3 md:row-start-2 flex items-center justify-start md:justify-start w-full h-full">
          <Image
            src="/svg/brixline-sym.svg"
            alt="brixline-sym"
            width={125}
            height={125}
            className="w-[100px] md:w-full max-w-[125px] h-auto object-contain"
          />
        </div>

        {/* 3rd - Text Content */}
        <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2 text-left md:px-6 flex items-center w-full">
          <p className="w-full text-left text-base font-normal md:text-lg md:font-medium leading-[130%] md:leading-[160%] tracking-normal md:tracking-[-0.02em]">
            Work with us as architect or contractor. We are now a team of 260+
            partners and yes, they are best of the best.
          </p>
        </div>

        {/* 2nd - Contractors Image */}
        <div className="col-start-2 row-start-2 md:col-start-1 md:row-start-2 flex items-center justify-start md:justify-end w-full h-full">
          <Image
            src="/svg/onb-contractors.svg"
            alt="onb-contractors"
            width={125}
            height={118}
            className="w-[90px] md:w-full max-w-[125px] h-auto object-contain"
          />
        </div>
      </div>
      <div className="px-3">
        <div className="relative bg-white mx-auto max-w-screen-lg h-[490px] md:h-[212px] shadow-sm mt-5 md:mt-10 px-4 py-6 md:p-8">
          <form className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
            <div className="md:row-start-1 md:col-span-1">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-4 !text-black placeholder:text-black font-normal border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:row-start-1 md:col-span-1 relative">
              <select className="w-full p-4 border !text-black placeholder:text-black font-normal border-black/10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">City*</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>
              <div className="absolute inset-y-0 right-5 bottom-2 flex items-center pointer-events-none">
                <Image
                  src="/svg/arrow-down.svg"
                  alt="arrow-down"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div className="md:row-start-1 md:col-span-1">
              <input
                type="tel"
                placeholder="Phone*"
                className="w-full p-4 border !text-black placeholder:text-black font-normal border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:row-start-1 md:col-span-1">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border !text-black placeholder:text-black font-normal border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:row-start-2 md:col-span-2 flex items-center order-2 md:order-1">
              <label className="flex items-center space-x-3">
                <span className="text-sm text-black leading-[140%] font-medium">
                  By proceeding, you are indicating that you have read and agree
                  to our <span className="underline">terms of use</span> & <span className="underline">privacy policy</span>
                </span>
              </label>
            </div>

            <div className="md:row-start-2 md:col-span-2 flex items-center justify-end order-1 md:order-2">
              <button className="w-full bg-[#F55252] text-white px-8 py-3.5 h-full hover:bg-blue-700 transition-colors text-sm font-medium">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
