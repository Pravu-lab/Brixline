import React from 'react'
import Toggle from './Toggle/Toggle'
import { Section, SubTitle, Title } from '../Tag'

const FAQ = () => {
    const toggleValue = [
        {
            ans: "What if my project exceeds the budget?",
            que: "With our Zero Cost Overrun policy, you pay only what was agreed upon."
        },
        {
            ans: "What if my project exceeds the budget?",
            que: "With our Zero Cost Overrun policy, you pay only what was agreed upon."
        },
        {
            ans: "What if my project exceeds the budget?",
            que: "With our Zero Cost Overrun policy, you pay only what was agreed upon."
        },
        {
            ans: "What if my project exceeds the budget?",
            que: "With our Zero Cost Overrun policy, you pay only what was agreed upon."
        },
        {
            ans: "What if my project exceeds the budget?",
            que: "With our Zero Cost Overrun policy, you pay only what was agreed upon."
        }
    ]
    return (
        <Section className='md:w-4/5 m-auto py-16 px-5'>
            <div className='mb-8 sm:mb-20 text-center'>
                <SubTitle className='mb-4'>Frequently Asked Questions</SubTitle>
                <Title className="text-black">
                    Got Questions? We&apos;ve Got <br />Answers
                </Title>
            </div>
            <div className='flex flex-col gap-4 sm:gap-10 w-[85%] m-auto'>
                {
                    toggleValue.map((val, ind) => {
                        return (
                            <Toggle key={`Toggle-${ind}`} que={val.que} ans={val.ans} />
                        )
                    })
                }
            </div>

        </Section>
    )
}

export default FAQ