import BottomForm from '@/Components/BottomForm'
import FooterSection from '@/Components/Footer'
import Header from '@/Components/Header'
import HowItWorks from '@/Components/HowItWorks'
import HowitWorksSlider from '@/Components/HowitWorksSlider'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <HowItWorks/>
    <HowitWorksSlider/>
    <BottomForm/>
    <FooterSection/>
    </>
  )
}

export default page