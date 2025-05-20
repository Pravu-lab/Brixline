"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomInput from "./Forms/CustomInput";
import CustomSelect from "./Forms/CustomSelect";
import CustomTextArea from "./Forms/CustomTextArea";
import { Button, Description, MainTitle, Section } from "./Tag";
import { useThankYou } from "@/contexts/ThankYouContext";

const ContactHero = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        contactNumber: "",
        location: "",
        enquiryType: "",
        enquiry: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { showThankYouWithTimeout } = useThankYou();
    // const [showThankYou, setShowThankYou] = useState(false);

    // useEffect(() => {
    //     if (showThankYou) {
    //         // Hide the entire navbar container
    //         const navbarContainer = document.querySelector('header') as HTMLElement | null;
    //         if (navbarContainer) navbarContainer.style.display = 'none';
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         // Show the navbar container
    //         const navbarContainer = document.querySelector('header') as HTMLElement | null;
    //         if (navbarContainer) navbarContainer.style.display = '';
    //         document.body.style.overflow = '';
    //     }

    //     return () => {
    //         // Cleanup - ensure navbar is visible if component unmounts
    //         const navbarContainer = document.querySelector('header') as HTMLElement | null;
    //         if (navbarContainer) navbarContainer.style.display = '';
    //         document.body.style.overflow = '';
    //     };
    // }, [showThankYou]);



        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setIsSubmitting(true);
    
            try {
                // const response = await fetch("/api/submit", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(formData),
                // });
    
                // if (!response.ok) throw new Error("Submission failed");
    
                setFormData({ firstName: "", contactNumber: "", location: "", enquiryType: "", enquiry: "" });
                showThankYouWithTimeout();
            } catch (error) {
                console.error("Submission error:", error);
                alert("Something went wrong. Please try again.");
            } finally{
                setIsSubmitting(false);
            }
        };
    const enquiryTypeOption = [{ label: "social", value: "Social" }]

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 13) { // number limit to 13
            setFormData(prev => ({ ...prev, contactNumber: value }));
        }
    };
    return (
        <Section className="!p-0 md:!px-10" >

{/* {showThankYou && ( */}
        {/* <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 max-w-md text-center text-black">
          <div className="flex justify-center mb-6">
      <img 
        src="./temporary.png"
        alt="Thank you illustration"
        className="w-full max-h-70 object-contain" // Adjust size as needed
      />
    </div>
            <h2 className="font-extrabold text-red-600">THANK YOU FOR REACHING OUT!</h2>
            <p className="text-xl font-bold">We've Received Your Request And Our
           Team Is Reviewing Your Details.</p> */}
            {/* <p className="my-4">
              Whether you're building your dream home or planning a
              renovation, we're excited to help bring your vision to life.
            Expect a call or email from us within the next 24 hours.</p>
            <button
              onClick={() => setShowThankYou(false)}
              className="mt-6 bg-[#F55252] text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center relative">
                {/* Left side: Image */}
                <div className="relative h-[500px] md:h-full">
                    <Image
                        src="/png/contactx.png"
                        alt="bookwithus"
                        width={634}
                        height={100}
                        className="block h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center md:justify-end px-6 md:px-10 text-white z-20 bitter-font pb-6">
                        <MainTitle className="text-left !text-[48px] !font-normal ">
                            We are here to answer your all queries
                        </MainTitle>
                        <div className="flex gap-x-5 mt-3 text-sm">
                            <p>+91 86189 60406</p>
                            <p>hello@brixline.com</p>
                        </div>
                    </div>
                </div>

                {/* Right side: Form */}
                <div className="flex justify-center items-center p-4 md:p-5 bg-white md:bg-gray-100 h-full">
                    <form onSubmit={handleSubmit} className="w-full max-w-2xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5 bg-gray-100 md:bg-transparent z-10  md:mt-0"> {/* mt-[-150px] */}
                        <CustomInput
                            onChange={(val) =>
                                setFormData((prev) => ({ ...prev, firstName: val.target.value }))
                            }
                            value={formData.firstName}
                            placeholder="First Name"
                            type="text"
                            
                        />

                        <CustomInput
                            // onChange={(val) =>
                            //     setFormData((prev) => ({ ...prev, contactNumber: val.target.value }))
                            // }
                            onChange={handleContactChange}
                            value={formData.contactNumber}
                            placeholder="Contact Number"
                            type="tel" // numeric keyboard in mobile
                            
                        />

                        <CustomInput
                            onChange={(val) =>
                                setFormData((prev) => ({ ...prev, location: val.target.value }))
                            }
                            value={formData.location}
                            placeholder="Location of Plot"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.7504 15.75L12.5254 12.525" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />

                        <CustomSelect
                            onChange={(val) =>
                                setFormData((prev) => ({ ...prev, enquiryType: val }))
                            }
                            options={enquiryTypeOption}
                            value={formData.enquiryType}
                            placeholder="Enquiry Type"
                        />

                        <div className="md:col-span-2">
                            <CustomTextArea
                                rows={5}
                                onChange={(val) =>
                                    setFormData((prev) => ({ ...prev, enquiry: val.target.value }))
                                }
                                value={formData.enquiry}
                                placeholder="Enquiry*"
                            />
                        </div>
                        <div className="md:col-span-2 flex gap-8 flex-col-reverse md:flex-row">
                            <Description className="w-full text-black font-normal">
                                By proceeding, you are indicating that you have read and agree to our
                                {" "}
                                <a href="#" className="underline">
                                    terms of use
                                </a>{" "}
                                &{" "}
                                <a href="#" className="underline">
                                    privacy policy
                                </a>
                                .
                            </Description>

                            <div className="w-full">
                                <Button className="w-full py-3 text-sm h-full bg-[#F55252] text-white rounded-lg cursor-pointer">
                                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div>

            </div>
        </Section>
    )
}

export default ContactHero