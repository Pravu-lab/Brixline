import ContactHero from '@/Components/ContactHero'
import FooterSection from '@/Components/Footer'
import Header from '@/Components/Header'
import MapSection from '@/Components/MapSection'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <ContactHero/>
    <MapSection/>
    <FooterSection/>
    </>
  )
}

export default page