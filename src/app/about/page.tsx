import Aboutus from '@/Components/Aboutus'
import FooterSection from '@/Components/Footer'
import FounderSection from '@/Components/FounderSection'
import AboutHero from '@/Components/HeroAboutus'
import OurPartners from '@/Components/OurPartners'
import Header from '@/Components/Header'
import React from 'react'
import AboutUsSlider from '@/Components/AboutusSlider'
import ScrollingText from '@/Components/AboutusTextAnimation'
import FAQ from '@/Components/FAQ/Faq'

const page = () => {
  return (
    <>
    <Header/>
<AboutHero/>
<ScrollingText/>
<AboutUsSlider/>
<Aboutus/>
<FounderSection/>
<OurPartners/>
<FAQ/>
<FooterSection/>
    </>
  )
}

export default page