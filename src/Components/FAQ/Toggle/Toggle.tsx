'use client';
import { Description } from "@/Components/Tag";
import React, { useState, FC } from 'react';

interface ToggleProps {
    que: string;
    ans: string;
}

const Toggle: FC<ToggleProps> = ({ que, ans }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className='border-b border-[#0000000a] pb-4 sm:pb-10'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left  flex justify-between "
            >
                <h3 className="text-[18px] sm:text-2xl font-medium text-[#161529]">{que}</h3>
                {isOpen?
                <svg className='min-w-[24px]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" fill="#F55252"/>
                <path d="M10.6667 16H21.3334" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                :
                <svg className='min-w-[24px]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" fill="#F55252" />
                    <path d="M10.6667 16H21.3334" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 10.6665V21.3332" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                }
            </button>
            {isOpen && (
                <Description className="text-[#161529] mt-4">
                    {ans}
                </Description>
            )}
        </div>
    );
};

export default Toggle;
