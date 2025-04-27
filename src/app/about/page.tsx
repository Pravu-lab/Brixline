import Aboutus from '@/Components/Aboutus'
import FooterSection from '@/Components/Footer'
import FounderSection from '@/Components/FounderSection'
import AboutHero from '@/Components/HeroAboutus'
import OurPartners from '@/Components/OurPartners'
import Header from '@/Components/Header'
import React from 'react'
import AboutUsSlider from '@/Components/AboutusSlider'

const page = () => {
  return (
    <>
    <Header/>
<AboutHero/>
<AboutUsSlider/>
<Aboutus/>
<FounderSection/>
<OurPartners/>
<FooterSection/>
    </>
  )
}

export default page