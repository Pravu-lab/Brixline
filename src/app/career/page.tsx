import Career from "@/Components/Career"
import CareerDream from "@/Components/CareerDream"
import CareerTextAnimation from "@/Components/CareerTextAnimation"
import CareerWorkspace from "@/Components/CareerWorkspace"
import FAQ from "@/Components/FAQ/Faq"
import FooterSection from "@/Components/Footer"
import Header from "@/Components/Header"

const page = () => {
    return (
        <>
        <Career/>
        <Header/>
        <CareerTextAnimation/>
        <CareerWorkspace/>
        <CareerDream/>
        
        {/* <FAQ/> */}
        <FooterSection/>
        </>
       

    )
}

export default page