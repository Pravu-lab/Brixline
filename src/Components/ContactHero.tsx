"use client";
import { useState } from "react";
import Image from "next/image";
import CustomInput from "./Forms/CustomInput";
import CustomTextArea from "./Forms/CustomTextArea";
import CustomSelect from "./Forms/CustomSelect";
import { Button, Section, Title } from "./Tag";

const ContactHero = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        contactNumber: "",
        location: "",
        enquiryType: "",
        enquiry: ""
    })
    const enquiryTypeOption = [{ label: "social", value: "Social" }]
  return (
    <Section className="!py-0" >
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center relative bg-gray-100">
        {/* Left side: Image */}
        <div className="relative h-[500px] md:h-full">
            <Image
                src="/png/contact-hero.png"
                alt="bookwithus"
                width={634}
                height={100}
                className="block h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end px-10 text-white z-20 bitter-font">
                <Title className="text-left">
                    We are here to <br /> answer your all <br /> queries
                </Title>
                <div className="flex gap-x-5 mt-3 text-lg">
                    <p>+91 86189 60406</p>
                    <p>hello@brixline.com</p>
                </div>
            </div>
        </div>

        {/* Right side: Form */}
        <div className="flex justify-center items-center p-5">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <CustomInput
                    onChange={(val) =>
                        setFormData((prev) => ({ ...prev, firstName: val.target.value }))
                    }
                    value={formData.firstName}
                    placeholder="First Name"
                />

                <CustomInput
                    onChange={(val) =>
                        setFormData((prev) => ({ ...prev, contactNumber: val.target.value }))
                    }
                    value={formData.contactNumber}
                    placeholder="Contact Number"
                />

                <CustomInput
                    onChange={(val) =>
                        setFormData((prev) => ({ ...prev, location: val.target.value }))
                    }
                    value={formData.location}
                    placeholder="Location of Plot"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="black" strokeLinecap="round" stroke-linejoin="round"/>
                        <path d="M15.7504 15.75L12.5254 12.525" stroke="black" strokeLinecap="round" stroke-linejoin="round"/>
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

                <div className="md:col-span-2 text-xs text-gray-500">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="underline">
                        terms of use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                        privacy policy
                    </a>
                    .
                </div>

                <div className="md:col-span-2">
                    <Button className="w-full py-3 text-sm bg-[#F55252] text-white rounded-lg">
                        SUBMIT
                    </Button>
                </div>
            </div>
        </div>
    </div>

    {/* map section starts */}
    <div>

    </div>
    {/* map section ends */}
</Section>
  )
}

export default ContactHero