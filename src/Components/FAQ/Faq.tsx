import React from 'react';
import Toggle from './Toggle/Toggle';
import { Section, SubTitle, Title } from '../Tag';

const FAQ = () => {
    const toggleValue = [
        {
            que: "What services does Brixline offer?",
            ans: {
                intro: "Brixline provides comprehensive construction solutions, including:",
                points: [
                    "Turnkey Residential Construction",
                    "Commercial Construction",
                    "Renovation & Remodeling"
                ]
            }
        },
        {
            que: "Is Brixline licensed and insured?",
            ans: {
                intro: "Yes, Brixline operates as a licensed construction company and offers:",
                points: [
                    "20-Year Structural Warranty",
                    "100% Money Safety through ESCROW",
                    "431+ Quality Checks with a 3-Layered Audit System"
                ]
            }
        },
        {
            que: "Do you provide free consultations?",
            ans: {
                intro: "Yes, we offer complimentary services including:",
                points: [
                    "Initial project assessment",
                    "Feasibility analysis",
                    "Preliminary cost estimates"
                ]
            }
        },
        {
            que: "How does Brixline ensure quality in construction?",
            ans: {
                intro: "Quality is a cornerstone of Brixline's operations. They implement:",
                points: [
                    "Over 431 Quality Checks",
                    "A 3-Layered Audit System",
                    "Use of Premium Materials",
                    "Innovative Architectural Designs"
                ]
            }
        },
        {
            que: " What are the available construction packages and their costs?",
            ans:{
                intro: "Brixline offers four construction packages:",
                points: [
                    "Basic Package: ₹1,819/sq.ft (Incl. GST)",
                    "Standard Package: ₹1,999/sq.ft (Incl. GST)",
                    "Premium Package: ₹2,220/sq.ft (Incl. GST)",
                    "Elite Package: ₹2,415/sq.ft (Incl. GST)"
                ]
            }
        },
        {
            que: "How does Brixline handle project timelines and cost overruns?",
            ans: {
                intro: "Brixline emphasizes:",
                points: [
                    "On-Time Delivery through intelligent scheduling and efficient processes",
                    "Fixed Pricing to ensure clients pay only the agreed amount",
                    "Zero Cost Overruns with a commitment to budget adherence",
                ]
            }
        },
        {
            que: " Does Brixline offer financing options?",
            ans: {
                intro: "Yes, Brixline provides:",
                points: [
                    "Easy EMI Options to start building during the construction phase",
                    "Zero Cost EMI with flexible payment plans to suit financial needs",
                ]
            }
        },
        {
            que: " How can I estimate the cost of my construction project?",
            ans: {
                intro: "Brixline offers a Home Construction Cost Calculator on their website. This tool helps clients:",
                points : [
                    "Estimate construction costs",
                    "Plan budgets effectively",
                    "Understand package inclusions"
                ]
            }
        },
        {
            que: "What is the process to start a project with Brixline?",
            ans: {
                intro: "The process includes:",
                points : [
                    "Raise a Request – Submit a home construction service request",
                    "Meet Our Expert – Consult with Brixline's technical experts",
                    "Get a Free Quote – Receive a detailed project estimate",
                    "Project Execution – Construction begins with regular progress updates"
                ]
            }
        },
        {
            que: "Does Brixline offer services outside Bengaluru?",
            ans: "Currently, Brixline's operations are focused in Bengaluru, Karnataka. Clients outside this region are encouraged to contact Brixline directly to discuss potential services."
        },
        {
            que: "How can I contact Brixline for more information?",
            ans: {
                intro: "Clients can reach Brixline through:",
                points: [
                    "Website: www.brixline.com",
                    "Address: Fransisco Technology Private limited.Opp To Jyoti Niwas College No : 126, 4th Floor, KHB Colony, 5th Block Koramangala, Bengaluru, Karnataka 560095",
                    "Phone: +91 86189 60406",
                    "Email: hello@brixline.com"
                ]
            }
        }
    ];

    return (
        <Section className='w-full md:w-4/5 m-auto py-16 px-5'>
            <div className='mb-8 sm:mb-20 text-center'>
                <SubTitle className='mb-4'>Frequently Asked Questions</SubTitle>
                <Title className="text-black">
                    Got Questions? We&apos;ve Got <br />Answers
                </Title>
            </div>
            <div className='flex flex-col gap-4 sm:gap-10 m-auto w-full md:w-[85%] mt-10 md:mt-0'>
                {toggleValue.map((val, ind) => (
                    <Toggle key={`Toggle-${ind}`} que={val.que} ans={val.ans} />
                ))}
            </div>
        </Section>
    );
};

export default FAQ;