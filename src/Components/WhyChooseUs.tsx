import React from "react";
import { Description, SubTitle, Title } from "./Tag";

const uspPoints = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 18V30"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 30V42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 6V18"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 30H42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 18H42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 30V42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6V18"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "Your home, delivered on time, or we pay you a penalty. No excuses.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 18V30"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 30V42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 6V18"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 30H42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 18H42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 30V42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6V18"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Fixed Pricing",
    desc: "Transparent pricing ensures you pay only what was agreed upon.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 18V30"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 30V42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 6V18"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 30H42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 18H42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 30V42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6V18"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Unmatched Quality",
    desc: "7-stage quality checks and 400+ tests guarantee perfection.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 18V30"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 30V42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 6V18"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 30H42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 18H42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 30V42"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6V18"
          stroke="#F55252"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Zero EMI Cost",
    desc: "Start building today with zero EMI during the construction phase.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20 text-center flex flex-col max-w-7xl mx-auto justify-center items-center gap-4">
      <SubTitle className="">How are we different?</SubTitle>
      <Title className=" text-black leading-snug mb-4">
        Brixline Zero Policy: Built
        <br />
        On Trust, Delivered With
        <br />
        Excellence
      </Title>
      <Description className="text-black opacity-50 mb-10">
        Your Perfect Home, Designed & Built for You. Hassle-free, On-Time,{" "}
        <br /> and Within Budget.
      </Description>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        {uspPoints.map((point, index) => (
          <div
            key={index}
            className={`flex flex-col items-start px-4 py-4 text-left ${
              index !== 3 && "lg:border-r" // only add right border on first 3 cards in desktop
            } ${
              index % 2 === 0 && index < 2 ? "sm:border-r" : ""
            } border-r-gray-200`}
          >
            <div className="mb-4">{point.icon}</div>
            <h4 className="text-lg font-semibold text-black mb-2">
              {point.title}
            </h4>
            <p className="text-sm text-gray-500">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
