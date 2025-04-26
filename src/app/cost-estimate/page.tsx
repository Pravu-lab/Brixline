import BottomForm from '@/Components/BottomForm'
import ConstructionPackage from '@/Components/ConstructionPackage'
import EstimatePage from '@/Components/costEstimate'
import CostEstimetor from '@/Components/CostEstimetor'
import FooterSection from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CostEstimetor/>
  <EstimatePage/>
  <ConstructionPackage/>
  <BottomForm/>
  <FooterSection/>
  </>
  )
}

export default page