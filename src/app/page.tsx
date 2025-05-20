import FAQ from "@/Components/FAQ/Faq";
import FooterSection from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import HomeCalculation from "@/Components/HomeCalculation";
import HomePackagesSection from "@/Components/HomePackagesSection";
import OurServicesSection from "@/Components/OurServicesSection";
import QualityCommitmentSection from "@/Components/QualityCommitmentSection";
import Testimonial from "@/Components/Testimonial/Testimonial";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Work from "@/Components/Work";

export default function Home() {
  return (
    <>
    <Hero/>
    <Header/>
    <WhyChooseUs/>
    <HomeCalculation/>
    <HomePackagesSection/>
    <OurServicesSection/>
    <QualityCommitmentSection/>
    <Work/>
    {/* <Testimonial/> */}
    {/* <FAQ/> */}
    <FooterSection/>
    </>
  );
}
