import React from 'react'
import { Description, SubTitle } from '../Tag';

interface TestimonialCardProps {
  name: string;
  msg: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, msg }) => {
  return (
    <div className='px-8 py-5 md:py-12 border border-[#0000001A] min-w-[300px] sm:min-w-[430px]'>
      <Description className='text-black mb-8'>{msg}</Description>
      <SubTitle>{name}</SubTitle>
    </div>
  )
}

export default TestimonialCard;
