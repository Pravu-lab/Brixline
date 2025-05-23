import BottomForm from '@/Components/BottomForm'
import ConstructionPackage from '@/Components/ConstructionPackage'
import EstimatePage from '@/Components/costEstimate'
import CostEstimetor from '@/Components/CostEstimetor'
import FAQ from '@/Components/FAQ/Faq'

import FooterSection from '@/Components/Footer'
import Header from '@/Components/Header'

const page = () => {
  return (
    <>
    <Header/>
    <CostEstimetor/>
  <EstimatePage/>
  <ConstructionPackage/>
  <BottomForm/>
  {/* <FAQ/> */}
  <FooterSection/>
  </>
  )
}

export default page