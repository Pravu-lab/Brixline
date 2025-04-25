import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Section, SubTitle, Title } from '../Tag';

// Define the type for the testimonial data
interface TestimonialData {
    name: string;
    msg: string;
}

const Testimonial: React.FC = () => {
    // Use the TestimonialData type for the testimonials array
    const testimonials: TestimonialData[] = [
        {
            name: "Rahul Garg",
            msg: "When Puneet set out to buy his first home, he envisioned a joyful and exciting process. He had the perfect one in mind and looked forward to the thrill of scouting. The reality was far from his imagination - house hunting quickly turned into a physical, emotional, and financial burden. He found himself entangled in"
        },
        {
            name: "Ganesh Das",
            msg: "When Puneet set out to buy his first home, he envisioned a joyful and exciting process. He had the perfect one in mind and looked forward to the thrill of scouting. The reality was far from his imagination - house hunting quickly turned into a physical, emotional, and financial burden. He found himself entangled in"
        },
        {
            name: "Pravas Chandragiri",
            msg: "When Puneet set out to buy his first home, he envisioned a joyful and exciting process. He had the perfect one in mind and looked forward to the thrill of scouting. The reality was far from his imagination - house hunting quickly turned into a physical, emotional, and financial burden. He found himself entangled in"
        },
        {
            name: "Pravas Chandragiri",
            msg: "When Puneet set out to buy his first home, he envisioned a joyful and exciting process. He had the perfect one in mind and looked forward to the thrill of scouting. The reality was far from his imagination - house hunting quickly turned into a physical, emotional, and financial burden. He found himself entangled in"
        }
    ];

    return (
        <Section>
            <div className='mb-8 sm:mb-20 text-center'>
                <SubTitle>Testimonial</SubTitle>
                <Title className='text-black'>Hear from Our Happy <br />Homeowners</Title>
            </div>
            <div className='flex gap-10 overflow-auto scrollbar-hide'>
                {
                    testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} name={testimonial.name} msg={testimonial.msg} />
                    ))
                }
            </div>
        </Section>
    );
}

export default Testimonial;
