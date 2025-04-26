import Aboutus from '@/Components/Aboutus'
import FooterSection from '@/Components/Footer'
import FounderSection from '@/Components/FounderSection'
import AboutHero from '@/Components/HeroAboutus'
import OurPartners from '@/Components/OurPartners'
import Header from '@/Components/Header'
import React from 'react'
import AboutUsSlider from '@/Components/AboutusSlider'
import HowitWorksSlider from '@/Components/HowitWorksSlider'

const page = () => {
  return (
    <>
    <Header/>
<AboutHero/>
<AboutUsSlider/>
<Aboutus/>
<HowitWorksSlider/>
<FounderSection/>
<OurPartners/>
<FooterSection/>
    </>
  )
}

export default page