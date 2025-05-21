import React from 'react';

const CareerSteppedBox: React.FC = () => {
  // Content for each box (8 items for 8 boxes)
  const boxContents = [
    { top: "Comprehensive Health Coverage", bottom: "We have got you covered—with medical, dental, and everything in between." },
    { top: "Equity Ownership (ESOPs)", bottom: "Grow with us and own a piece of what you help build." },
    { top: "Team Offsites & Retreats", bottom: "Recharge, connect, and align—together, beyond the desk and site." },
    { top: "Flexible Work Environment", bottom: "Whether you're in the field or online, we support how you work best." },
    { top: "Learning & Development", bottom: "Get access to courses, tools, and mentorship to level up continuously." },
    { top: "Paid Time Off", bottom: "Take the time you need to rest, reset, or explore." },
    { top: "Modern Work Tools", bottom: "We invest in the best tech to help you do your best work—without friction." },
    { top: "Mission-Driven Team", bottom: "Join a crew of builders, coders, and creators passionate about impact." }
  ];

  return (
    <div className="p-4 w-full md:pl-50">
      {/* Desktop View (2 rows of 4 boxes) */}
      <div className="hidden md:flex flex-col  mb-20"> {/* Reduced gap and added bottom margin */}
        {/* First Row - Boxes 1-4 */}
        <div className="flex relative">
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={`first-${index}`}
              className={`
                w-[260px] h-[260px] bg-red-50 text-gray-800
                flex flex-col justify-between p-4 mr-2.5
                font-bold shadow-md relative cursor-pointer
                transition-all duration-300
                hover:bg-red-400 hover:text-white hover:scale-105
                ${index === 1 ? 'mt-5' : ''}
                ${index === 2 ? 'mt-10' : ''}
                ${index === 3 ? 'mt-15' : ''}
              `}
            >
              <div className="text-lg">{boxContents[index].top}</div>
              <div className="text-sm font-medium">{boxContents[index].bottom}</div>
            </div>
          ))}
        </div>
        
        {/* Second Row - Boxes 5-8 */}
        <div className="flex relative">
          {[4, 5, 6, 7].map((index) => (
            <div 
              key={`second-${index}`}
              className={`
                w-[260px] h-[260px] bg-red-50 text-gray-800
                flex flex-col justify-between p-4 mr-2.5
                font-bold shadow-md relative cursor-pointer
                transition-all duration-300
                hover:bg-red-400 hover:text-white hover:scale-105
                ${index === 5 ? 'mt-5' : ''}
                ${index === 6 ? 'mt-10' : ''}
                ${index === 7 ? 'mt-15' : ''}
              `}
            >
              <div className="text-lg">{boxContents[index].top}</div>
              <div className="text-sm font-medium">{boxContents[index].bottom}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View (horizontal scroll) */}
      <div className="md:hidden w-full overflow-x-auto pb-4 mt-25">
        <div className="flex space-x-4 w-max">
          {boxContents.map((content, index) => (
            <div 
              key={`mobile-${index}`}
              className="
                w-[280px] h-[280px] bg-red-50 text-gray-800
                flex flex-col justify-between p-4
                font-bold shadow-md cursor-pointer flex-shrink-0
                transition-all duration-300
                hover:bg-red-400 hover:text-white
              "
            >
              <div className="text-lg">{content.top}</div>
              <div className="text-sm">{content.bottom}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerSteppedBox;