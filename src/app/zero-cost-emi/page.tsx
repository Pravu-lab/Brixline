import BottomForm from "@/Components/BottomForm"
import FAQ from "@/Components/FAQ/Faq"
import FooterSection from "@/Components/Footer"
import Header from "@/Components/Header"
import WhyChooseUs from "@/Components/WhyChooseUs"
import ZeroCostEmi from "@/Components/ZeroCostEmi"
import ZeroCostWhy from "@/Components/ZeroCostWhy"

const page = () => {
     return (
    <>
    <ZeroCostEmi/>
    <Header/>
    {/* <WhyChooseUs/> */}
    <ZeroCostWhy/>
    {/* <BottomForm/> */}
    <FAQ/>
    <FooterSection/>
    </>
  )
}

export default page