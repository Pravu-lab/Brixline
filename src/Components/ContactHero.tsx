"use client";
import { useThankYou } from "@/contexts/ThankYouContext";
import Image from "next/image";
import { useState } from "react";
import CustomInput from "./Forms/CustomInput";
import CustomSelect from "./Forms/CustomSelect";
import CustomTextArea from "./Forms/CustomTextArea";
import { Button, Description, MainTitle, Section } from "./Tag";

const ContactHero = () => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        location: "",
        enquiryType: "",
        enquiry: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { showThankYouWithTimeout } = useThankYou();

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setIsSubmitting(true);
            console.log("submitting data:", formData);
    
            try {
                const response = await fetch("/api/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
    
                if (!response.ok) throw new Error("Submission failed");
    
                setFormData({ name: "", contact: "", location: "", enquiryType: "", enquiry: "" });
                if(response.ok){
                    showThankYouWithTimeout();
                }
                
            } catch (error) {
                console.error("Submission error:", error);
                alert("Something went wrong. Please try again.");
            } finally{
                setIsSubmitting(false);
            }
        };
    const enquiryTypeOption = [
        { label: "social", value: "Social" },
        { label: "Commercial", value: "Commercial"},
        { label: "Residential", value: "Residential"}

    ]

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        // if(value.length <= 13) { // number limit to 13
            setFormData({ ...formData, contact: value });
        // }
    };
    return (
        <Section className="!p-0 md:!px-10" >
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
                    <div className="absolute inset-0 flex flex-col justify-center md:justify-end px-6 md:px-10 text-white z-20 bitter-font pb-12">
                        <div className="bitter-font text-left !text-[48px] !font-normal ">
                            We are here to answer your all queries
                        </div>
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
                                setFormData((prev) => ({ ...prev, name: val.target.value }))
                            }
                            value={formData.name}
                            placeholder="First Name"
                            type="text"
                            required
                        />

                        <CustomInput
                            onChange={handleContactChange}
                            value={formData.contact}
                            placeholder="Contact Number"
                            type="tel" // numeric keyboard in mobile
                            required
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
                            required
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
                                required
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
                                <Button className="w-full py-3 cursor-pointer bg-[#F55252] text-white px-4 font-bold hover:bg-[#e04a4a] transition-colors border-none">
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