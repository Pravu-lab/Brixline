import Image from "next/image"
import { Title } from "./Tag"

const ZeroCostWhy = () => {
    return (
        <div>
            <div className="bg-gray-200 font-sans min-h-screen p-1 md:p-5">
                <div className="max-w-[1200px] mx-auto p-5 md:ml-2  lg:ml-25">
                    <h1 className="text-center text-gray-700 mb-2.5 font-semibold">
                        WHY CHOOSE US
                    </h1>
                    <div className="text-center mb-10">
                        <Title className="text-gray-700 mb-2.5 text-2xl font-bold">
                            The Brixline Advantage
                        </Title>
                        <p className="text-gray-600 font-medium text-[0.9rem]">
                            India's most trusted home loan platform with 200+ happy customers
                        </p>
                        <hr className="w-[100px] border border-gray-300 my-5 mx-auto" />
                    </div>

                    {/* Centered Table Container - Mobile scrollable */}
                    <div className="w-full md:min-w-full lg:w-[1225px] overflow-x-auto">
                        <table className="min-w-[600px] bg-white text-black font-bold">
                            <thead>
                                <tr>
                                    <th className="w-1/2 py-3 px-4 text-left font-semibold">
                                        <span className="inline-block bg-red-500 text-white px-3 py-1 font-medium">
                                            Assured
                                        </span>
                                    </th>
                                    <th className="bg-black text-white w-1/4 py-3 px-4 font-semibold text-center">BRIXLINE</th>
                                    <th className="w-1/4 py-3 px-4 font-semibold border-b border-gray-200 text-center">Others</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-dashed border-white">
                                    <td className="py-3 px-4">LOWEST INTEREST RATE OFFERS</td>
                                    <td className="bg-black text-white py-3 px-4 text-center">YES</td>
                                    <td className="py-3 px-4 text-center">NO</td>
                                </tr>
                                <tr className="border-b border-dashed border-white">
                                    <td className="py-3 px-4">APPROVAL TIME</td>
                                    <td className="bg-black text-white py-3 px-4 text-center">1-2 WEEKS</td>
                                    <td className="py-3 px-4 text-center">3-5 WEEKS</td>
                                </tr>
                                <tr className="border-b border-dashed border-white">
                                    <td className="py-3 px-4">LIFETIME SUPPORT</td>
                                    <td className="bg-black text-white py-3 px-4 text-center">YES</td>
                                    <td className="py-3 px-4 text-center">NO</td>
                                </tr>
                                <tr className="border-b border-dashed border-white">
                                    <td className="py-3 px-4">FUNDING</td>
                                    <td className="bg-black text-white py-3 px-4 text-center">UPTO 100%</td>
                                    <td className="py-3 px-4 text-center">UPTO 85%</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4">PROCESS</td>
                                    <td className="bg-black py-3 px-4 text-white text-center">SIMPLE AND DIGITAL</td>
                                    <td className="py-3 px-4 text-center">LOADS OF PAPERWORK & BRANCH VISITS</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile responsive grid - stacked on mobile */}
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-x-15 mt-20">
  {/* Box 1 - Keep as is */}
  <div className="bg-white p-6 border border-gray-200 w-full md:w-[350px] lg:w-[400px] h-[250px] relative">
    <div className="absolute top-20 md:top-10 left-6 w-[60%]">
      <h3 className="font-bold text-xl text-black mb-2">Zero <br/>Interest Rates</h3>
      <p className="text-gray-600 text-sm md:text-lg">Save more with every EMI</p>
    </div>
    <div className="absolute bottom-2 right-1 md:right-3 w-[180px] h-[180px]">
      <Image
        src="/Zero/Box11.png"
        alt="Box1"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
  </div>

  {/* Box 2 - Now matching Box 1 */}
  <div className="bg-white p-6 border border-gray-200 w-full md:w-[350px] lg:w-[400px] h-[250px] relative">
    <div className="absolute top-20 md:top-10 left-6 w-[60%]">
      <h3 className="font-bold text-xl text-black mb-2">Simple <br/>& Digital process</h3>
      <p className="text-gray-600 text-sm md:text-lg">hassle free experience</p>
    </div>
    <div className="absolute bottom-2 right-3 w-[180px] h-[180px]">
      <Image
        src="/Zero/Box22.png"
        alt="Box2"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
  </div>

  {/* Box 3 - Now matching Box 1 */}
  <div className="bg-white p-6 border border-gray-200 w-full md:w-[350px] lg:w-[400px] h-[250px] relative">
    <div className="absolute top-20 md:top-10 left-6 w-[60%]">
      <h3 className="font-bold text-xl text-black mb-2">Guaranteed <br/>Fast Approval</h3>
      <p className="text-gray-600 text-sm md:text-lg">Quick disbursals, No delay</p>
    </div>
    <div className="absolute bottom-2 right-0 w-[180px] h-[180px]">
      <Image
        src="/Zero/Box33.png"
        alt="Box3"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
  </div>

  {/* Box 4 - Keep original styling */}
  <div className="bg-white p-6 border border-gray-200 w-full md:w-[350px] lg:w-[400px] h-[250px] relative">
    <div className="absolute top-20 md:top-10 left-6 w-[60%]">
      <h3 className="font-bold text-xl text-black mb-2">Guaranteed <br/>Fast Approval</h3>
      <p className="text-gray-600 text-sm md:text-lg">Quick disbursals, No delay</p>
    </div>
    <div className="absolute bottom-2 right-3 w-[180px] h-[180px]">
      <Image
        src="/Zero/Box44.png"
        alt="Box3"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
  </div>

  {/* Box 5 - Wider box - Kept original styling */}
  <div className="bg-white border border-gray-200 p-4 flex flex-col md:flex-row md:col-span-2 h-full md:h-[250px] w-full md:w-[710px] lg:w-[813px]">
    {/* Mobile: stacked content */}
    <div className="flex flex-col order-2 md:order-1 md:flex-1">
      {/* Circles - centered on mobile */}
     <div className="flex justify-center my-4 md:hidden">
  <div className="flex relative">
    <div className="w-12 h-12 rounded-full border-2 border-white relative z-0 overflow-hidden">
      <img 
        src="/png/pthree.png" 
        alt="Expert 1"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-12 h-12 rounded-full border-2 border-white relative z-10 -ml-4 overflow-hidden">
      <img 
        src="/png/ptwo.png"
        alt="Expert 2"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-12 h-12 rounded-full border-2 border-white relative z-20 -ml-4 overflow-hidden">
      <img 
        src="/png/pone.png"
        alt="Expert 3"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
      
      <div className="p-2 text-black text-xl md:text-2xl font-bold text-center md:text-left">
        Be a part of the Brixline Advantage<br/>We handle everything for you 
      </div>

      <div className="grid grid-cols-2 gap-4 my-4 w-full max-w-md mx-auto md:mx-0">
        <img src="/support.png" alt="support" className="w-20 h-10 object-contain" />
        <img src="/offer.png" alt="offer" className="w-29 md:w-32 h-10 object-contain" />
        <img src="/Doc.png" alt="doc" className="w-29 md:w-32 h-auto max-h-16 object-contain" />
        <img src="/funding.png" alt="funding" className="w-29 md:w-34 h-auto max-h-16 object-contain" />
      </div>
    </div>

    {/* Button - centered on mobile */}
    <div className="flex flex-col justify-center order-3 md:order-2 md:flex-1 md:items-end md:justify-end">
  <div className="hidden md:flex justify-end mb-16 mr-3">
    <div className="flex relative">
      <div className="w-12 h-12 rounded-full border-2 border-white relative z-0 overflow-hidden">
        <img 
          src="/png/pthree.png" 
          alt="Expert 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-12 h-12 rounded-full border-2 border-white relative z-10 -ml-4 overflow-hidden">
        <img 
          src="/png/ptwo.png"
          alt="Expert 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-12 h-12 rounded-full border-2 border-white relative z-20 -ml-4 overflow-hidden">
        <img 
          src="/png/pone.png"
          alt="Expert 3"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
          
  <button className="text-white text-sm font-bold bg-red-500 p-3 w-full md:w-auto md:mb-12 md:mr-3">
    CONNECT WITH OUR EXPERT
  </button>
</div>
  </div>
</div>
                </div>
            </div>

            {/* offerings */}
            <div>
                <h1 className="text-center text-red-600 mb-2.5 font-semibold mt-28">
                    OUR OFFERINGS
                </h1> 
                <div className="text-center mb-10">
                    <Title className="text-gray-700 mb-2.5 text-xl font-bold">
                        How Can We Help You
                    </Title>           
                </div>
            </div>

            {/* Mobile responsive offerings table */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 mx-auto w-full md:w-[90vw] lg:w-[70vw] mb-15 px-4 md:px-0">
        
<div className="flex flex-col md:flex-row bg-black px-6 py-4 md:col-span-2 ">

  <div className="w-full md:w-2/3 py-4 md:py-8 pr-4">
    <div className="text-white text-xl md:text-2xl font-bold text-center md:text-left">
      Home Loan
    </div>
    <p className="text-white mt-2 text-center md:text-left">
      Get the best home loan at lowest interest rates with a hassle free process.
    </p>
    <div className="flex justify-center md:justify-start gap-4 mt-0">
      <img src="/Zero/offere2.png" alt="support" className="w-30 md:w-38 h-16 md:h-18 object-contain" />
      <img src="/Zero/sup2.png" alt="offer" className="w-27 md:w-35 h-16 md:h-18 object-contain" />
    </div>
    <div className="flex justify-center md:justify-start">
      <button className="text-white text-sm font-bold bg-red-500 p-3 mt-4">
        CONNECT WITH OUR EXPERT
      </button>
    </div>
  </div>
  
  {/* Image - bottom on mobile, right on desktop */}
  <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end mt-4 md:mt-0 -mb-4 md:-mb-12">
    <img 
      src="/damily.png"
      alt="family"
      className="max-w-[200px] h-auto object-contain md:max-w-none "
    />
  </div>
</div>

                {/* Mortgage - Mobile: image right, text left */}
              <div className="bg-red-50 p-4">
  <div className="flex flex-row items-center">
    {/* Text Container - Left */}
    <div className="flex-1 pr-1 md:pr-4 py-4"> {/* Added right padding and vertical padding */}
      <h3 className="font-bold text-lg md:text-xl text-black mb-6 md:mb-3">Mortgage Loan</h3>
      <p className="text-gray-600 text-sm md:text-base">
        Take a loan against your property at attractive rates for your personal or business needs
      </p>
    </div>
    
    {/* Image Container - Right */}
    <div className="ml-6 "> {/* Added left margin and top padding */}
      <div className="h-50 md:h-55 w-50 md:w-55 -mr-7  md:-mr-2 pb-6 md:pb-0 rounded-md flex items-center justify-center"> {/* Fixed size container */}
        <Image
          src="/svg/help22.svg"
          alt="Balance Transfer"
          width={200}
          height={200}
          className="object-contain"
          style={{marginBottom: '-40px', marginRight:'8px'}}
        />
      </div>
    </div>
  </div>
</div>

                {/* Balance Transfer - Mobile: image right, text left */}
                <div className="bg-red-50 p-4">
  <div className="flex flex-row items-center">
    {/* Text Container - Left */}
    <div className="flex-1 pr-1 md:pr-4 py-4"> {/* Added right padding and vertical padding */}
      <h3 className="font-bold text-lg md:text-xl text-black mb-6 md:mb-3">Balance Transfer</h3>
      <p className="text-gray-600 text-sm md:text-base">
        Shift to lower interest rates and reduce your EMI's. Get top-up loans, repay faster and save in Lakhs
      </p>
    </div>
    
    {/* Image Container - Right */}
    <div className="ml-6"> {/* Added left margin and top padding */}
      <div className="h-50 md:h-60 w-50 md:w-60 -mr-7 md:-mr-2 -mb-5 rounded-md flex items-center justify-center"> {/* Fixed size container */}
        <Image
          src="/png/help202.png"
          alt="Balance Transfer"
          width={200}
          height={200}
          className="object-contain h-full w-full"
        />
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}

export default ZeroCostWhy